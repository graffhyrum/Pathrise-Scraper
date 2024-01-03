import {PDFDocument} from 'pdf-lib';
import fs from 'fs';

import {assertIsTwcApps, type TwcApp} from '../interfaces/twcApps';
import {fillAnEntry, fillDefaults} from './utils';
import {handlers} from '../util/handlers';

// const formPdfBytes = fs.readFileSync(paths.pdfTemplate);
const formPdfBytes = handlers().pdfTemplateHandler().get();
// 5 entries per log
const data = handlers().twcAppsHandler().get();
assertIsTwcApps(data);

// fill one template per 5 entries
const entriesPerTemplate = 5;
const weekInMs = 1000 * 60 * 60 * 24 * 7;
// group Apps by week, first week starting nov 12 2023
const start = new Date('2023-11-12');
// end is the end of the current week
const end = new Date(Math.ceil(Date.now() / weekInMs) * weekInMs);

// for every week from start to end of the current week, group apps by week
// then fill one template per 5 entries of each week
const weeks: {start: string; end: string; appGroups: TwcApp[][]}[] = [];
for (let i = start; i < end; i.setDate(i.getDate() + 7)) {
  const weekApps = data.filter(app => {
    const appDate = new Date(app.date);
    return appDate >= i && appDate < new Date(i.getTime() + weekInMs);
  });
  // split week into groups of 5
  const numEntries = weekApps.length;
  const weekGroups: TwcApp[][] = [];
  for (let j = 0; j < numEntries; j += entriesPerTemplate) {
    weekGroups.push(weekApps.slice(j, j + entriesPerTemplate));
  }
  weeks.push({
    start: i.toDateString(),
    end: new Date(i.getTime() + weekInMs).toDateString(),
    appGroups: weekGroups,
  });
}
weeks.map(({start, end, appGroups}) => {
  const numGroups = appGroups.length;
  for (let i = 0; i < numGroups; i++) {
    const apps = appGroups[i];
    const numEntries = apps.length;
    const numTemplates = Math.ceil(numEntries / entriesPerTemplate);
    const templates = new Array(numTemplates).fill(formPdfBytes);
    templates.map(template => {
      PDFDocument.load(template).then(
        async pdfDoc => {
          const form = pdfDoc.getForm();
          fillDefaults(form, start, end);
          apps.map((app, i) => {
            fillAnEntry(app, form, i + 1);
          });
          const pdfBytes = await pdfDoc.save();
          const startMon = start.slice(4, 8);

          const dir = `./filled/${startMon}/${start}-${end}`;
          fs.mkdirSync(dir, {recursive: true});

          // remove invalid characters from filename
          let filename = `${start} - ${end} `.replace(/[/\\?%*:|"<>]/g, '_');
          if (i > 0) {
            filename = `${filename} - ${i + 1}`;
          }
          filename = `${filename}.pdf`;
          fs.writeFileSync(`${dir}/${filename}`, pdfBytes);
        },
        err => {
          console.error(err);
        }
      );
    });
  }
});
