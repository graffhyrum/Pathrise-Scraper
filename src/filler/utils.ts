import type {PDFForm} from 'pdf-lib';
import type {TwcApp} from '../interfaces/twcApps';

export function fillDefaults(form: PDFForm, start: string, end: string) {
  require('dotenv').config();
  fillName();
  fillSsn();
  fillCounts();
  fillTextField('Enter Week Of', start, form);
  fillTextField('Enter End Date', end, form);

  function fillName() {
    const name = process.env.NAME;
    if (!name) {
      throw new Error('No name found in env vars');
    }
    fillTextField('Enter Claimant Name', name, form);
  }

  function fillSsn() {
    const ssn = process.env.SSN;
    if (!ssn) {
      throw new Error('No ssn found in env vars');
    }
    const firstThree = ssn.slice(0, 3);
    const secondTwo = ssn.slice(3, 5);
    const lastFour = ssn.slice(5);
    fillTextField(
      'Enter Social Security Number First 3 Digits',
      firstThree,
      form
    );
    fillTextField(
      'Enter Social Security Number Middle 2 Digits',
      secondTwo,
      form
    );
    fillTextField(
      'Enter Last 4 Digits of Social Security Number',
      lastFour,
      form
    );
  }

  function fillCounts() {
    const searchCount = process.env.NUMBER_OF_SEARCHES;
    if (!searchCount) {
      throw new Error('No count found in env vars');
    }
    fillTextField('Enter Number of Required Searches', searchCount, form);
  }
}

export function fillAnEntry(
  app: TwcApp,
  form: PDFForm,
  formEntryNumber: number
) {
  const {date, company, jobTitle, workSearchActivity} = app;
  fillDate();
  fillCompany();
  fillJobTitle();
  fillWorkSearchActivity();
  fillResults();
  fillLink();

  function fillDate() {
    const dateFormKey =
      formEntryNumber === 1
        ? 'Enter Date of Job Search Activity'
        : `Enter Date of Job Search Activity - ${formEntryNumber}`;
    fillTextField(dateFormKey, new Date(date).toDateString(), form);
  }

  function fillCompany() {
    const companyFormKey =
      formEntryNumber === 4
        ? 'Enter Name of Organization  4'
        : formEntryNumber === 2
        ? `Enter Name of Organization  - ${formEntryNumber}` // sic, extra space in form name between Organization and -
        : `Enter Name of Organization - ${formEntryNumber}`;
    fillTextField(companyFormKey, company, form);
  }

  function fillJobTitle() {
    const jobTitleFormKey =
      formEntryNumber === 1
        ? 'Enter Job Type'
        : formEntryNumber === 2
        ? `Enter Job Type  - ${formEntryNumber}` // sic, extra space in form name between Type and -
        : `Enter Job Type - ${formEntryNumber}`;
    fillTextField(jobTitleFormKey, jobTitle, form);
  }

  function fillWorkSearchActivity() {
    const workSearchActivityFormKey =
      formEntryNumber === 1
        ? 'Enter Work Search Activity'
        : `Enter Work Search Activity - ${formEntryNumber}`;
    fillTextField(workSearchActivityFormKey, workSearchActivity, form);
  }

  function fillResults() {
    if (app.workSearchActivity === 'application_submitted') {
      const applicationSubmittedFormKey =
        formEntryNumber === 5
          ? 'Click Checkbox if You Filed an Application - 5'
          : `Click this Checkbox if You Filed an Application - ${formEntryNumber}`;
      checkBox(applicationSubmittedFormKey, form);
    } else {
      const otherResultsFormKey =
        formEntryNumber === 1
          ? 'Click this checkbox to tell us about other job result'
          : `Click the Other Checkbox to tell us about a different job result - ${formEntryNumber}`;
      checkBox(otherResultsFormKey, form);
      fillTextField(
        `Enter Other Job Result - ${formEntryNumber}`,
        app.workSearchActivity,
        form
      );
    }
  }
  function fillLink() {
    if (app.url) {
      const linkFormKey =
        formEntryNumber === 2 || formEntryNumber === 3
          ? `Enter Street Address - Organization - ${formEntryNumber}`
          : `Enter Street Address - Organization ${formEntryNumber}`;
      fillTextField(linkFormKey, app.url, form);
    }
  }
}

function fillTextField(fieldKey: string, value: string, form: PDFForm) {
  const field = form.getTextField(fieldKey);
  field.setText(value);
}

function checkBox(fieldKey: string, form: PDFForm) {
  const field = form.getCheckBox(fieldKey);
  field.check();
}
