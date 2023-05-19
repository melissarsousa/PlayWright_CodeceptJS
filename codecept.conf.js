/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpratice.com.br',
      show: true,
      browser: process.env.browser
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'PlayWright_CodeceptJS'
}