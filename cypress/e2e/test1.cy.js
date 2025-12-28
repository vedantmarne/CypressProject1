describe('Google Search', () => {
  it('Google Search', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app [name="username"]').type('Admin');
    cy.get('#app [name="password"]').type('admin123{enter}');
  })
})