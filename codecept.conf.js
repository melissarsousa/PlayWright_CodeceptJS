/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'PlayWright_CodeceptJS',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpratice.com.br',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    homePage: "./pages/home_page.js",
    loginPage: "./pages/login_page.js",
    registerPage: "./pages/register_page.js"
  },
  plugins: {
     screenshotOnFail: {
       enabled: true
     },
     autoLogin: {
       enabled: true,
       saveToFile: true,
       inject: 'login',
       users:{
         user: {
           login: (I) => {
               I.amOnPage('/');
               I.click({xpath: '//*[@id="top_header"]/div/div/div[2]/div/ul/li[1]/a'});
               I.waitForElement('#btnLogin', 10)
               I.fillField('#user','mel@gmail.com');
               I.fillField('#password',secret('12345678'));
               I.click('#btnLogin')
           },
            check: (I) => {
                I.amOnPage('/');
                I.see('mel@gmail.com');
           }
         }
       }
     }
  }
}