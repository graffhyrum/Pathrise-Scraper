import {chromium} from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import {expect} from '@playwright/test';
import {type AppProcess} from '../interfaces/zod_schema/index';
import type {TwcApp} from '../interfaces/twcApps';
import {assertIsAppsSchema} from '../interfaces/zod_schema/assertions';
import {handlers} from '../util/handlers';

require('dotenv').config();
const email = process.env.GOOGLE_EMAIL;
if (!email) throw new Error('no email found in env vars');
const pw = process.env.GOOGLE_PASSWORD;
if (!pw) throw new Error('no password found in env vars');

chromium.use(StealthPlugin());

chromium.plugins.setDependencyDefaults('stealth/evasions/webgl.vendor', {
  vendor: 'Pendragon',
  renderer: 'Josh',
});

// main start
chromium
  .launch({headless: false})
  .then(async browser => {
    let jobApps;
    const flaggedForUpdate = process.env.UPDATE;
    const appsExist = handlers().appsHandler().check();
    if (flaggedForUpdate || !appsExist) {
      await fetchDataFromPathrise();
    } else {
      jobApps = handlers().appsHandler().get();
    }
    assertIsAppsSchema(jobApps);
    return jobApps;

    async function fetchDataFromPathrise() {
      const page = await browser.newPage();
      const responsePromise = page.waitForResponse(
        response =>
          response.url() ===
          'https://fellows.pathrise.com/api/v2/fellows/fellow_data'
      );
      await page.goto('https://fellows.pathrise.com/dashboard/pipeline');
      await doLogin();
      await expect(page).toHaveTitle(/Pathrise/);
      const resp = await responsePromise;
      const json = await resp.json();
      handlers().dataHandler().set(json);
      await (jobApps = json.appProcesses);
      //teardown
      await page.close();
      await browser.close();

      async function doLogin() {
        await fillEmail();
        await clickNext();
        await fillPassword();
        await clickNext();

        async function fillEmail() {
          await page.getByLabel('Email or phone').fill(email!);
        }

        async function fillPassword() {
          // fill password if prompted, otherwise click 'try another way'
          const pwInput = page.locator('input[type="password"]');
          const tawLocator = page.getByText('Try another way');

          await expect(async () => {
            const pwInputVisible = await pwInput.isVisible();
            const tawVisible = await tawLocator.isVisible();
            expect(pwInputVisible || tawVisible).toBeTruthy();
          }).toPass({timeout: 10 * 1000});
          if (!(await pwInput.isVisible())) {
            await tawLocator.click();
            await page.getByText('Enter your password').click();
          }
          await page.locator('input[type="password"]').fill(pw!);
        }

        async function clickNext() {
          await page.getByRole('button', {name: 'Next'}).click();
        }
      }
    }
  })
  .then(async jobApps => {
    assertIsAppsSchema(jobApps);
    // fs.writeFileSync(paths.apps, JSON.stringify(jobApps, null, 2));
    handlers().appsHandler().set(jobApps);
    const twcApps = getProcessedApps();
    // fs.writeFileSync(paths.twcApps, JSON.stringify(twcApps, null, 2));
    handlers().twcAppsHandler().set(twcApps);
    return twcApps;

    function getProcessedApps() {
      const twcApps: TwcApp[] = jobApps
        .filter(app => app.stages.length > 0)
        .map(app => {
          // find stage with the most recent date value, not in future
          const latestStage = getLatestStage(app);
          return {
            pathriseId: app.id,
            date: app.created_at,
            workSearchActivity: latestStage.interview_type,
            jobTitle: app.job_title,
            company: app.company_name,
            url: app.job_url,
            connections: app.pipeline_connections,
          };
        })
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      return twcApps;
    }
  });

function getLatestStage(app: AppProcess) {
  const stages = app.stages;
  const len = stages.length;
  if (len === 1) return stages[0];
  return stages.reduce((acc, stage) => {
    const thisDate = Date.parse(stage.date);
    const accDate = Date.parse(acc.date);
    if (thisDate > accDate && thisDate <= Date.now()) return stage;
    return acc;
  });
}
