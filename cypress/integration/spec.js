describe('My App', () => {

  it('loads', () => {
    cy.visit('/');
    cy.get('h1').contains('Welcome to app!');
  });

});
