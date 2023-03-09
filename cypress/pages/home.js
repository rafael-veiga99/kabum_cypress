
class home {

    go_main_page(){
        cy.visit('/')
        cy.get('.IconLogoKabum')
        cy.get('#linkLoginHeader').should('have.text','LOGIN')
    }

    go_login_page(user,password){
        cy.wait(5000)
        cy.contains('h2', 'fazer login')
        cy.get('#inputUsuarioLogin').type(user)
        cy.get('#inputSenhaLogin').type(password)
        cy.get('#botaoLogin').click()
        cy.wait(5000)
        
    }

    user_must_have_logged(){
        cy.get('#linkMinhaContaHeader').should('have.text', 'MINHA CONTA')
    }

    search_product(code){
        cy.wait(5000)
        cy.get('#barraBuscaKabum').type(code)
        cy.get('div[id="barraBuscaKabum"] button[type="submit"]').click()
        cy.get('.imageCard').click()
        cy.contains('div', 'Código: ', code)
    }

}

export default new home
