
class home {

    set_cookies(){
        cy.wait(5000)
        cy.get('button[id="onetrust-accept-btn-handler"]').should('have.text', 'Entendi').click({force: true})
        cy.wait(5000)
    }

    go_main_page(){
        cy.visit('/')
        cy.get('.IconLogoKabum')
        cy.get('#linkLoginHeader').should('have.text','Login')
    }

    go_login_page(user,password){
        cy.get('#linkLoginHeader').should('have.text','Login')
        cy.get('#linkLoginHeader').click()
        cy.get('h1').should('have.text','Identificação')
        cy.get('#formLogin > h2').should('have.text', 'Já tenho cadastro')
        cy.get('#inputUsuarioLogin').type(user)
        cy.get('#inputSenhaLogin').type(password)
        cy.get('#botaoLogin').click()
        cy.setCookie('showpopup','0')
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
