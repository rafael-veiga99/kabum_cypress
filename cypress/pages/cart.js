
class cart {

    must_be_cart_page(){
        cy.get('div[id="steppCarrinho"]').should('have.text', 'Carrinho')
    }

    input_postal_code(postal_code){
        cy.contains('h2', 'SELECIONE O ENDEREÇO')
        cy.get('input[placeholder="Inserir CEP"]').type(postal_code)

    }

    select_shipping_method(ship_code){
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