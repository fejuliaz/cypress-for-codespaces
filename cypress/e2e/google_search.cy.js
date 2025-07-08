describe('Practice Software Testing - View Product', () => {
  it('Loads homepage and navigates to a product detail page', () => {
    cy.visit('https://practicesoftwaretesting.com/');
    // Confirm that "Combination Pliers" product is visible
    cy.contains('.card-title', 'Combination Pliers').should('exist');
    // Click the product to view details
    cy.contains('.card-title', 'Combination Pliers').click();
    // Verify we are on the product detail page
      cy.get('[data-test="product-name"]')
      .should('be.visible')
      .and('have.text', 'Combination Pliers');
    cy.get('[data-test="unit-price"]').should('be.visible');
  });
});