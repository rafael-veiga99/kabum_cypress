
class cookies{

    set_cookies(){
        var current_date = new Date().toJSON()
        cy.setCookie('OptanonAlertBoxClosed',current_date)
        cy.setCookie('showpopup', '0')
    }

    clear_all(){
        cy.clearAllCookies()
        cy.clearAllSessionStorage()
    }

    set_local_storage(){
        localStorage.setItem('retira_magalu', 'checked')
    }

}

export default new cookies