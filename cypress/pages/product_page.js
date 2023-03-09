
class product_page {

    buy_product(){
        cy.wait(5000)
        cy.get('div[id="blocoValores"] button[id]').click()
    }

}

export default new product_page
