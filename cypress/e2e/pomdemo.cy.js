import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', function() {
  
  beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
  
  it('Login with valid credentials', function() {
    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('#app h6.oxd-text').click()
      .should('contain','Dashboard')
      .should('be.visible')
  })

  it('Login with invalid username', function() {
    loginPage.enterUsername('Admin1')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('#app p.oxd-alert-content-text').click()
      .should('contain','Invalid credentials')
      .should('be.visible')
  })

  it('Login with invalid password', function() {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin1234')
    loginPage.clickLogin()
    cy.get('#app p.oxd-alert-content-text').click()
      .should('contain','Invalid credentials')
      .should('be.visible')
  })


})