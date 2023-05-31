var assert = require('assert');
var faker = require('faker');

const {I, homePage, loginPage, login} = inject()

Feature('Atualizar');

// cenário com faker
Scenario('Teste de Atualização de Dados @atualizarDados', async ({ I }) => {

    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    I.amOnPage('/')
    homePage.accessLoginPage()
    I.waitForElement('#btnLogin', 10) // secs
    loginPage.loginOnAccount(faker.internet.email())

    I.waitForElement({xpath: '/html/body/div[2]/div/div[6]/button[1]'})
    I.click({xpath: '/html/body/div[2]/div/div[6]/button[1]'})

    var paginaUsuario = await I.grabTextFrom('.active')
    assert.equal(paginaUsuario, 'Dashboard')

    I.click({xpath: '//*[@id="my-account_area"]/div/div/div[1]/div/ul/li[5]/a'})

    I.waitForElement({xpath: '//*[@id="dashboard"]/div/div[1]/a'})
    I.click({xpath: '//*[@id="dashboard"]/div/div[1]/a'})

    I.waitForElement({xpath: '//*[@id="account_edit"]/div/div[2]/div[2]/div/div/h2'})

    I.click({xpath: '//*[@id="account_info_form"]/div[1]/span[2]/input'})
    I.fillField('//*[@id="f_name"]', firstName)
    I.fillField('//*[@id="account_info_form"]/div[2]/input[2]', lastName)
    I.fillField('//*[@id="email_address"]', 'mel@gmail.com')

    I.click({xpath: '//*[@id="account_info_form"]/button'})

    /* outros comandos:
    I.scrollTo()
    I.scrollPageToBottom()
    I.selectOption() -> quando tem dropdown
    */

    });

