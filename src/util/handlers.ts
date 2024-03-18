import fs from 'fs';
import {assertIsRootSchema} from '../interfaces/zod_schema/assertions';

export const paths = {
  apps: 'data/apps.json',
  twcApps: 'data/twcApps.json',
  data: 'data/data.json',
  pdfTemplate: 'work-search-log-twc.pdf',
};

export const handlers = () => {
  const dataHandler = () => {
    const get = () => {
      return JSON.parse(fs.readFileSync(paths.data, 'utf-8'));
    };
    const set = (data: unknown) => {
      assertIsRootSchema(data);
      // make diretory if it doesn't exist
      if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
      }
      fs.writeFileSync(paths.data, JSON.stringify(data, null, 2));
    };

    const check = () => {
      fs.existsSync(paths.data);
    };

    return {
      get,
      set,
      check,
    };
  };

  const appsHandler = () => {
    const get = () => {
      return JSON.parse(fs.readFileSync(paths.apps, 'utf-8'));
    };
    const set = (apps: unknown) => {
      fs.writeFileSync(paths.apps, JSON.stringify(apps, null, 2));
    };

    const check = () => {
      return fs.existsSync(paths.apps);
    };

    return {
      get,
      set,
      check,
    };
  };

  const twcAppsHandler = () => {
    const get = () => {
      if (check()) {
        return JSON.parse(fs.readFileSync(paths.twcApps, 'utf-8'));
      } else {
        throw new Error('twcApps.json does not exist');
      }
    };
    const set = (apps: unknown) => {
      fs.writeFileSync(paths.twcApps, JSON.stringify(apps, null, 2));
    };

    const check = () => {
      return fs.existsSync(paths.twcApps);
    };

    return {
      get,
      set,
      check,
    };
  };

  const pdfTemplateHandler = () => {
    const get = () => {
      return fs.readFileSync(paths.pdfTemplate);
    };

    const check = () => {
      return fs.existsSync(paths.pdfTemplate);
    };

    return {
      get,
      check,
    };
  };
  return {
    dataHandler,
    appsHandler,
    twcAppsHandler,
    pdfTemplateHandler,
  };
};
