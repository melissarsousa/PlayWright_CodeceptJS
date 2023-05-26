const { I } = inject();

module.exports = {
    fields: {
        userNameField: '#user',
        emailField: '#email',
        passwordField: '#password'
    },

    button: {
        registerButton: '#btnRegister'
    },

    messages: {

    },

    registerAccount(){
        I.fillField(this.fields.userNameField, 'Melissa')
        I.fillField(this.fields.emailField, 'mel@gmail.com')
        I.fillField(this.fields.passwordField, 'bsoleocio')
        I.click(this.button.registerButton)
        I.see('Cadastro realizado!')

    }

  // insert your locators and methods here
}
