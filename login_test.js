var assert = require('assert')

Feature('login');

Scenario('Teste de Cadastro', async ({ I }) => {

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
