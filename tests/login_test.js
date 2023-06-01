var assert = require('assert');
var faker = require('faker');

const {I, homePage, loginPage, login} = inject()

Feature('Login');

//Scenario('Login with success @autoLogin', async () => {
//
//    await login('user')
//
//})

// cenário com faker
Scenario('Teste de login @login', async ({ I }) => {

    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    I.amOnPage('/')
    homePage.accessLoginPage()
    I.waitForElement('#btnLogin', 10) // secs
    loginPage.loginOnAccount(faker.internet.email())

    });

