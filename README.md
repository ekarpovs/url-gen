# Unique Url Generator

## install the repo dependencies with npm

npm install

## Commands

Buld

```bash
npm run build
```


Run the linter manually:

```bash
npm run lint
```

Clean temp folders:

```bash
npm run clean
```

Run the tests:

```bash
npm run test
```

Run e2e test

```bash
npm run e2e
```

## Usage

```bash
var gen = require('./lib/index');
gen.generateUrl().then((u) => console.log(u));
```

