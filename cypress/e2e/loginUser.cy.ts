describe('Sign in Form Test', () => {
  it('should fill out the sign in form and login', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href="/profil"]').click();

    cy.get('input[name="email"]').should('be.visible');

    cy.get('input[name="email"]').type('jon.doe@gmail.com');
    cy.get('input[name="password"]').type('asdfgh');

    cy.get('button[type="submit"]').click();
    cy.wait(2000);

    cy.get('button[type="button"]').contains('Logga Ut').click();
    cy.wait(1000);

    cy.url().should('include', '/');
  });
});
