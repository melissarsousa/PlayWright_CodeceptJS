var assert = require('assert');

const {I, homePage, registerPage} = inject()

Feature('Register');

/*
pause()
Before (() => {
    I.amOnPage('/')
}) --> before each

After (() => {
    console.log('After')
}) --> after each

BeforeSuite(({ I }) => {
    I.syncDown('testfolder');
}); --> before all
*/

Scenario('Teste de Cadastro com sucesso @cadastro', async () => {

    I.amOnPage('/')
    homePage.accessRegisterPage()
    I.waitForElement('#btnRegister', 10) // secs
    registerPage.registerAccount()

    });