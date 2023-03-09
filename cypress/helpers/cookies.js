
class cookies{

    set_cookies(){
        var current_date = new Date().toJSON()

        cy.setCookie('OptanonAlertBoxClosed',current_date)
        
    }

    set_local_storage(){
        localStorage.setItem('retira_magalu', 'checked')
    }

}

export default new cookies