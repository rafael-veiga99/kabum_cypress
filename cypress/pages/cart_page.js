
class cart {

    must_be_in_cart_page(){
        cy.get('div[class*="PageCart-styles__Container"] h1').should('have.text', 'Carrinho, etapa 1 de 5')
    }

    input_postal_code(postal_code){
        cy.contains('h2', 'SELECIONE O ENDEREÇO')
        cy.get('input[placeholder="Inserir CEP"]').type(postal_code)

    }

    select_shipping_method(ship_code){
        cy.contains('h2', 'FRETE')
        cy.contains('div', 'Para receber no seu endereço:')
        cy.get('div[class$="shippingContainer"]')
        cy.get(`input[type="radio"][value="${ship_code}"]`).click()
    }

    go_to_payment(){
        cy.contains('button[id="buttonGoToPayment"]', 'IR PARA O PAGAMENTO').click()
    }

    confirm_postal_code(){
        cy.get('button[type="submit"][id="buttonOkCep"]').click()
        cy.contains('strong', 'Entregar em: ')
    }   

}

export default new cart