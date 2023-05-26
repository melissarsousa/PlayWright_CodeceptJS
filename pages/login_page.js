const { I } = inject();

module.exports = {

    fields: {
        emailAddressField: '#user',
        passwordField: '#password'
    },

    button: {
        loginButton: '#btnLogin'
    },

    messages: {

    },

    loginOnAccount(email){
        I.fillField(this.fields.emailAddressField, email)
        I.fillField(this.fields.passwordField, secret('123456'))
        I.click(this.button.loginButton)
        I.see('Login realizado')

    }

  // insert your locators and methods here
}
