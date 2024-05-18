
describe('Reviews Form', () => {
  it('Submits a review successfully', () => {
    // Assuming 'http://localhost:3000/test-reviews' is the route where the Reviews component is rendered
    cy.visit('http://localhost:3000/test-reviews'); 

    cy.get('#name').type('John Doe');
    cy.get('#rating').type('5');
    cy.get('#comment').type('This movie is great!');
    cy.get('button[type="submit"]').click();

      // Assuming '/sendReview' is the route redirected after successful submission 
    cy.url().should('include', '/sendReview');  
  });

  it('Failure because review user cannot be sent due to no comment entered', () => {
    // Assuming 'http://localhost:3000/test-reviews' is the route where the Reviews component is rendered
    cy.visit('http://localhost:3000/test-reviews'); 
    
    cy.get('#name').type('John Doe');
    cy.get('#rating').type('5');
    // clear comment
    cy.get('#comment').clear(); 
    cy.get('button[type="submit"]').click();

    // Confirm that the cautionary note is not displayed.
    cy.contains('Fyll i det här fältet.').should('not.exist');

    // Make sure no redirects occur
    cy.url().should('not.eq', 'http://localhost:3000/sendReview');  
  });
});