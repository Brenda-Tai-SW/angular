const apiUrl = `${Cypress.env("apiUrl")}`

describe('Frontend Test Spec', () => {
  it('should visit index', () => {
    cy.visit('/')
  })
})



describe('TransactionService', () => {
  it('should add a transaction', () => {
    // Mock the transaction request
    const transactionRequest = { accountId: '123e4567-e89b-12d3-a456-426614174000', amount: 100 };

    // Stub the addTransaction method of TransactionService
    cy.intercept('POST', '/transactions', {}).as('addTransaction');

    // Visit the page where the transaction form component is located
    cy.visit('newTransaction');

    // Fill in the form fields with transaction data
    cy.get('#accountId').type(transactionRequest.accountId);
    cy.get('#amount').type(transactionRequest.amount);

    // Submit the transaction by clicking the submit button
    cy.get('button[type="submit"]').click();

    // Wait for the addTransaction request to complete
    cy.wait('@addTransaction').then((interception) => {
     
      // Check if the request was successful
      expect(interception.response.statusCode).to.equal(200);
    });
  });
});




describe('Form Input Type Validation', () => {
  it('should validate accountId type', () => {
    cy.visit('/newTransaction'); 

    cy.get('#accountId').type('12345').blur();

    cy.get('.error-message').should('contain', 'Invalid UUID format');

    cy.get('#accountId').clear().type('123e4567-e89b-12d3-a456-426614174000').blur();
    cy.get('.error-message').should('not.exist');
  });

  it('should validate amount type', () => {
    cy.visit('/newTransaction'); 

    cy.get('#amount').type('abc').blur();

    cy.get('.error-message').should('contain', 'Invalid integer format');

  
    cy.get('#amount').clear().type('123').blur();

   
    cy.get('.error-message').should('not.exist');
  });
});





