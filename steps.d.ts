/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home_page.js');
type loginPage = typeof import('./pages/login_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, loginPage: loginPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
