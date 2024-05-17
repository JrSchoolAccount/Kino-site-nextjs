describe('Signup Form Test', () => {
  it('should fill out the signup form', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href="/registrera"]').click();

    cy.get('input[name="name"]').should('be.visible');

    cy.get('input[name="name"]').type('Jon Doe');
    cy.get('input[name="email"]').type('jon.doe@gmail.com');
    cy.get('input[name="password"]').type('asdfgh');

    cy.get('button[type="submit"]').click();
    cy.wait(2000);

    cy.url().should('include', '/login');
  });
});
