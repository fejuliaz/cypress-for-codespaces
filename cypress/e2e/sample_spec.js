describe('Example test', () => {
  it('Visits Cypress docs', () => {
    cy.visit('https://docs.cypress.io')
    cy.contains('In a nutshell')
  })
})