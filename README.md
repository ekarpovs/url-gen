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

gen.generateUrl('https', destHostName, destPort).then((u) => console.log(u));

default values
protocol = 'http';
host = 'localHost';
port = '3800';
```
Will generate output like

```bash
https://destHostName:destPort/JDJhJDEwJDNKbnp6cmUzTDZFZW5hSzhhOS50SWVrT0gyQThIb251N2ZuVVZxMVg2dzhKR0ZQeUVNUzY2
```

