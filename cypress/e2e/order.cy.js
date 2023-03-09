
import main_data from "../factory/main_data"
import home from "../pages/home"
import product_page from "../pages/product_page"
import pre_cart_page from "../pages/pre_cart_page"
import cart from "../pages/cart"
import cookies from "../helpers/cookies"


beforeEach(() =>{
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

        product_page.buy_product()

    })
    it('Ir para a Página do Carrinho', ()=>{

        pre_cart_page.go_to_cart_page()

    })
    it('Selecionar a Forma de Pagamento', ()=>{

        cart.go_to_payment()
    })
    it('Logar', ()=>{

        home.go_login_page(data.user, data.password)
        home.user_must_have_logged()
    })
    it('Selecionar o Frete', ()=> {

        cart.must_be_cart_page()
        cart.select_shipping_method(data.ship_code)
        
    })
    


})
