
class home {

    go_main_page(){
        cy.visit('/')
        cy.get('.IconLogoKabum')
        cy.get('#linkLoginHeader').should('have.text','LOGIN')
    }

    go_login_page(user,password){
        cy.contains('h2', 'fazer login')
        cy.contains('label', 'E-mail, CPF ou CNPJ')
        cy.get('input[type="text"]').type(user)
        cy.contains('label', 'Senha')
        cy.get('input[type="password"]').type(password)
        cy.contains('button', 'Entrar').click() 
    }

    user_must_have_logged(){
        cy.get('#linkMinhaContaHeader').should('have.text', 'MINHA CONTA')
    }

    search_product(code){
        cy.get('#barraBuscaKabum').type(code)
        cy.get('div[id="barraBuscaKabum"] button[type="submit"]').click()
        cy.get('.imageCard').click()
        cy.contains('div', 'Código: ', code)
    }

}

export default new home
