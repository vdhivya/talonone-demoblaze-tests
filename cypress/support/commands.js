// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.get('#login2').click();
  cy.get('#logInModal').should('be.visible');
  cy.wait(1000); //fix for the flaky test.
  cy.get('#loginusername').clear().type(username);
  cy.get('#loginpassword').clear().type(password, { log: false });
  cy.contains('#logInModal .modal-footer button', 'Log in').click();
  cy.get('#nameofuser', { timeout: 10000 }).should('contain', username);
});