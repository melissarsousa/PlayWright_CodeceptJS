var assert = require('assert');

const {I, homePage, registerPage} = inject()

Feature('register');

Scenario('Teste de Cadastro com sucesso @cadastro', async () => {

    I.amOnPage('/')
    homePage.accessRegisterPage()
    I.waitForElement('#btnRegister', 10) // secs
    registerPage.registerAccount()

    });