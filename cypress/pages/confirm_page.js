
class confirm{

    must_be_in_confirm_page(){
        cy.contains('div[id="confirmationContainer"] h1', 'Confirmação, etapa 4 de 5')
    }

    go_to_conclusion_page(){
        cy.contains('button[id="botaoFinalizarPagamento"]', 'FINALIZAR').click()
    }

}

export default new confirm