
class payment {

    must_be_in_payment_page(){
        cy.get('main[class*="PagePayment-styles__Container"] h1').should('have.text', 'Pagamento, etapa 3 de 5')
    }

    select_payment(){
        cy.contains('form[id=paymentForm] h1', 'Forma de Pagamento')
        cy.contains('button[id="botaoFormaDePagamentoPix"]', 'Pix').click()
    }
    go_to_confirm_page(){
        cy.contains('button[id="botaoPagar"]', 'PAGAR COM PIX').click()
    }
}

export default new payment