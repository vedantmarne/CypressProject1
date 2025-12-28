  describe('assertion', () => {
  it('assertion', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app button.oxd-button')
        .should('contain','Login')
        .should('be.visible')
  })
})