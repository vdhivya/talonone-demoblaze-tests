import user_data from '../fixtures/user_data.json';

describe('Demoblaze login flows', () => {
  before(() => {
    cy.visit('/');
  });

  it('allows a registered user to log in and log out', () => {
    cy.login(user_data.username, user_data.password);

    cy.get('#logout2').should('be.visible');
    cy.get('#nameofuser').should('contain', user_data.username);

    cy.get('#logout2').click();
    cy.get('#login2').should('be.visible');

  });
});