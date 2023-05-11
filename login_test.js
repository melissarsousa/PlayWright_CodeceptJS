Feature('login');

Scenario('test something',  ({ I }) => {

    I.amOnPage('/');
    I.click({xpath: '//*[@id="top_header"]/div/div/div[2]/div/ul/li[1]/a'});
    I.waitForElement('#btnLogin', 15); // secs
    I.fillField('#user', 'mel@gmail.com')
    I.fillField('#password', 'willleoncio')
    I.click('#btnLogin');
    I.see('Login realizado');

    });
