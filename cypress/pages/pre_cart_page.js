
class pre_cart{

    go_to_cart_page(){
        cy.get('button[class*="buttonGoToCart"]')
        cy.contains('button[class*="buttonGoToCart"]', 'IR PARA O CARRINHO').click()
    }

}

export default new pre_cart
