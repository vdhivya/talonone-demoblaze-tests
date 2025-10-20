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

## Approach to test

- The focus was on automating the **login and  purchase flows** on Demoblaze using Cypress.  
- Tests validate key functionalities like login, logout, cart operations and checkout flow to ensure smooth end-to-end behavior.  
- Test data such as user credentials and card details are handled through fixtures for consistency and reusability.  
- API intercepts are used to verify backend responses and improve reliability.  
- Selectors were chosen for **stability and clarity**, avoiding fragile or dynamic locators.

## Use of AI Tools & Assistance

- Limited AI assitance was used to **speed up documentation** and **verify element selectors**.  
- All test design, structure, and assertions were written manually based on the application’s behavior.

## Enhancements & Future Improvements

- Add negative test cases (e.g., invalid login, empty cart).  
- Include more product categories for wider coverage.  
- Integrate with CI/CD for automated execution.
