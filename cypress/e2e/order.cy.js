
import main_data from "../factory/main_data"
import home from "../pages/home_page"
import product from "../pages/product_page"
import pre_cart from "../pages/pre_cart_page"
import cart from "../pages/cart_page"
import cookies from "../helpers/cookies"
import payment from "../pages/payment_page"
import confirm from "../pages/confirm_page"
import conclusion from "../pages/conclusion_page"

before(() =>{
    cookies.clear_all()
    cookies.set_cookies()
    cookies.set_local_storage()
})

describe ('Happy Path - Compra Produto 1P KaBuM!', ()=>{

    var data = main_data.access_data()

    it('Abrir a Página Home', ()=>{
        home.go_main_page()
    })
    it('Selecionar o Produto', ()=>{
        home.search_product(data.prod_cod)
    })
    it('Comprar o Produto', ()=>{
        product.buy_product()
    })
    it('Ir para a Página do Carrinho', ()=>{
        pre_cart.go_to_cart_page()
        cart.must_be_in_cart_page()
    })
    it('Clicar em ir Para o Pagamento e Logar', ()=>{
        cart.go_to_payment()
        home.go_login_page(data.user, data.password)
        home.user_must_have_logged()
    })
    it('Selecionar o Frete', ()=> {
        cart.must_be_in_cart_page()
        cart.select_shipping_method(data.ship_code)  
    })
    it('Ir para a Página de Pagamentos', ()=>{
        cart.go_to_payment()
        payment.must_be_in_payment_page()
    })
    it('Selecionar a Forma de Pagamento', ()=>{
        payment.select_payment()
    })
    it('Ir para a Página de Confirmação', ()=>{
        payment.go_to_confirm_page()
        confirm.must_be_in_confirm_page()
    })
    it('Concluir o Pedido', ()=>{
        confirm.go_to_conclusion_page()
        conclusion.must_be_in_conclusion_page()
        conclusion.order_generated_with_success()  
    })
    it.skip('Validar Pedido no Minha Conta', ()=>{
        conclusion.go_to_my_orders()
        conclusion.check_order_number()

    })

})