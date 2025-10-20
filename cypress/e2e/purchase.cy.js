import user_data from '../fixtures/user_data.json';
import card_details from '../fixtures/card_details.json';

describe('Demoblaze purchase flows', () => {
  before(() => {
    cy.visit('/');
  });

  it('completes the purchase flow for a laptop', () => {
    cy.login(user_data.username, user_data.password);

    cy.contains('.list-group-item', 'Laptops').click();
    cy.get('#tbodyid .card-title a').contains('MacBook air').click();
    cy.get('.name').should('contain', 'MacBook air');

    cy.intercept('POST', `${Cypress.env('apiBaseUrl')}/addtocart`).as('addCart');
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('cartAlert');
    });

    cy.contains('a', 'Add to cart').click();
    cy.wait('@addCart').then((interception) => {
      expect(interception.request.method).to.equal('POST');
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('@cartAlert').should('have.been.calledWith', 'Product added.');

    cy.get('#cartur').click();
    cy.url().should('include', 'cart.html');
    cy.get('#tbodyid tr').should('contain', 'MacBook air');

    cy.intercept('POST', `${Cypress.env('apiBaseUrl')}/deletecart`).as('deleteCart');
    cy.contains('button', 'Place Order').click();
    cy.wait(1000); //fix for the flaky test.
    cy.get('#orderModal').should('be.visible');

    cy.get('#name').type(card_details.card_name);
    cy.get('#country').type(card_details.card_country);
    cy.get('#city').type(card_details.card_city);
    cy.get('#card').type(card_details.card_number, { log: false });
    cy.get('#month').type(card_details.card_month);
    cy.get('#year').type(card_details.card_year);

    cy.contains('button', 'Purchase').click();
    cy.wait(1000); //fix for the flaky test.
    cy.get('.sweet-alert').should('be.visible');

    cy.contains('Thank you for your purchase!').should('be.visible');
    cy.contains('Amount:').should('exist');
    cy.contains('button', 'OK').click();

    cy.wait('@deleteCart').then((interception) => {
      expect(interception.request.method).to.equal('POST');
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body).to.contain('Item deleted.');
    });
    cy.get('.sweet-alert').should('not.exist');

    cy.get('#logout2').click();
    cy.get('#login2').should('be.visible');
  });
});
