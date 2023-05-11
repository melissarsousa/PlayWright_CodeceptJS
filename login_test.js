var assert = require('assert')

Feature('login');

Scenario('Teste de Cadastro @cadastro', async ({ I }) => {

    I.amOnPage('/')
    I.click({xpath: '//*[@id="top_header"]/div/div/div[2]/div/ul/li[2]/a'})
    I.waitForElement('#btnRegister', 10) // secs
    I.fillField('#user', 'Melissa')
    I.fillField('#email', 'mel@gmail.com')
    I.fillField('#password', 'bsoleocio')
    I.click('#btnRegister')

    var title = await I.grabTitle()
    assert.equal(title, 'QAZANDO Shop E-Commerce')

    I.see('Cadastro realizado!')

    I.waitForElement({xpath: '/html/body/div[2]/div/div[6]/button[1]'})
    I.click({xpath: '/html/body/div[2]/div/div[6]/button[1]'})

    var paginaUsuario = await I.grabTextFrom('.active')
    assert.equal(paginaUsuario, 'Dashboard')

    });

Scenario('Teste de Atualização de Dados @atualizarDados', async ({ I }) => {

    I.amOnPage('/')
    I.click({xpath: '//*[@id="top_header"]/div/div/div[2]/div/ul/li[1]/a'})
    I.waitForElement('#btnLogin', 10) // secs
    I.fillField('#user', 'mel@gmail.com')
    I.fillField('#password', 'bsoleocio')
    I.click('#btnLogin')

    I.see('Login realizado')

    I.waitForElement({xpath: '/html/body/div[2]/div/div[6]/button[1]'})
    I.click({xpath: '/html/body/div[2]/div/div[6]/button[1]'})

    var paginaUsuario = await I.grabTextFrom('.active')
    assert.equal(paginaUsuario, 'Dashboard')

    I.click({xpath: '//*[@id="my-account_area"]/div/div/div[1]/div/ul/li[5]/a'})

    I.waitForElement({xpath: '//*[@id="dashboard"]/div/div[1]/a'})
    I.click({xpath: '//*[@id="dashboard"]/div/div[1]/a'})

    I.waitForElement({xpath: '//*[@id="account_edit"]/div/div[2]/div[2]/div/div/h2'})

    I.click({xpath: '//*[@id="account_info_form"]/div[1]/span[2]/input'})
    I.fillField('//*[@id="f_name"]', 'Melissa')
    I.fillField('//*[@id="account_info_form"]/div[2]/input[2]', 'Sousa')
    I.fillField('//*[@id="email_address"]', 'mel@gmail.com')

    I.click({xpath: '//*[@id="account_info_form"]/button'})

    /* outros comandos:
    I.scrollTo()
    I.scrollPageToBottom()
    I.selectOption() -> quando tem dropdown


    });
