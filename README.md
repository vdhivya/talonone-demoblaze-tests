# talonone-demoblaze-tests

This repository contains Cypress end-to-end tests that cover the login and purchase flows on [Demoblaze](https://www.demoblaze.com).

## Prerequisites

- [Node.js](https://nodejs.org/) 22 (LTS), 24 (current) or later.

## Installing Dependencies

```bash
npm install
```

## Running the Tests Locally

```bash
npx cypress run
```

## Running the Tests with interactive runner

```bash
npx cypress open
```

## Credentials

The credentials for test user are managed under fixtures/. The tests use the user account before exercising the login flow.
