# Pathrise Scraper

This project is a side project  for scraping pipeline data from a [Pathrise account](https://www.pathrise.com/), then  filling out Work Search Activity Log forms for the Texas Workforce Commission (TWC). It uses TypeScript and npm.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
2. Install dependencies with `npm install`

## Usage

### Scraper

The scraper is a utility for scraping data from the user's Pathrise dashboard. 

```bash
node --loader esbuild-register/loader -r esbuild-register src/scraper/index.ts
````

### Filler

The filler is a utility for filling out PDF forms based on data from the Texas Workforce Commission (TWC). 

```bash
node --loader esbuild-register/loader -r esbuild-register src/filler/index.ts
```

## Environment Variables

The project uses environment variables for sensitive data. These variables should be defined in a `.env` file in the project root. The following variables are required:

- `NAME`: Your name
- `SSN`: Your Social Security Number
- `NUMBER_OF_SEARCHES`: The number of job searches to be filled in the form
- `GOOGLE_EMAIL`: The google email used to register on Pathrise
- `GOOGLE_PASSWORD`: The google password used to register on Pathrise

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details


