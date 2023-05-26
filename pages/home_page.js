const { I } = inject();

module.exports = {

    fields: {

    },

    button: {
        homeLoginButton: {xpath: '//*[@id="top_header"]/div/div/div[2]/div/ul/li[1]/a'}, //xpath do botão login
        homeRegisterButton: {xpath: '//*[@id="top_header"]/div/div/div[2]/div/ul/li[2]/a'}
    },

    messages: {

    },

    accessLoginPage() {
        I.click(this.button.homeLoginButton)
    },

    accessRegisterPage(){
        I.click(this.button.homeRegisterButton)
    }

}
