
import main_data from "../factory/main_data"
import home from "../pages/home_page"
import product from "../pages/product_page"
import pre_cart from "../pages/pre_cart_page"
import cart from "../pages/cart_page"
import cookies from "../helpers/cookies"


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
    })
    it('Clicar em ir Para o Pagamento e Logar', ()=>{
        cart.go_to_payment()
        home.go_login_page(data.user, data.password)
        home.user_must_have_logged()
    })
    it('Selecionar o Frete', ()=> {
        cart.must_be_cart_page()
        cart.select_shipping_method(data.ship_code)  
    })
    it('Ir para a Página de Pagamentos', ()=>{
        cart.go_to_payment()
    })

})