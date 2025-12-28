export class LoginPage{

    username_textbox = '#app [name="username"]'
    password_textbox = '#app [name="password"]'
    login_button = '#app button.oxd-button'
    
    enterUsername(username){
        cy.get(this.username_textbox).type(username);
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password);
    }

    clickLogin(){
        cy.get(this.login_button).click();
    }

}