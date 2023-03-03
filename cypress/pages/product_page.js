
class product_page {

    buy_product(){
        cy.get('div[id="blocoValores"] button')
        cy.contains('div[id="blocoValores"] button', 'COMPRAR').click()
    }

}

export default new product_page
