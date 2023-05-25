/** @type {CodeceptJS.MainConfig} */
exports.config = {
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
  name: 'PlayWright_CodeceptJS'
}