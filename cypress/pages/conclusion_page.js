
class conclusion{

    

    must_be_in_conclusion_page(){
        cy.contains('div[class*="concluir-styles__ConcludeContainer"] h1', 'Concluir, etapa 5 de 5')
    }

    order_generated_with_success(){
        cy.contains('h1', 'Pedido realizado com sucesso!')
        var order_number = cy.get('div[class*="OrderNumber"] strong')
        console.log(order_number)

    }

    go_to_my_orders(){
        cy.contains('button[class*="concluir-styles__Conclude"]', 'VER MEUS PEDIDOS').click()
    }

    check_order_number(){
        cy.contains('div', '#' + order_number)
    }

}

export default new conclusion