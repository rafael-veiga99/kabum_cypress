
import main_data from "../factory/main_data"
import home from "../pages/home"
import product_page from "../pages/product_page"
import pre_cart_page from "../pages/pre_cart_page"
import cart from "../pages/cart"
  
describe ('Happy Path - Shopping with Logged in', ()=>{

    var data = main_data.access_data()

    it('Opening the main page', ()=>{

        home.go_main_page()

    })
    it.skip('Logging in', ()=>{

        home.go_login_page(data.user, data.password)
        home.user_must_have_logged()
    })
    it('Searching the product', ()=>{

        home.set_cookies()
        home.search_product(data.prod_cod)

    })
    it('Buying the product', ()=>{

        product_page.buy_product()

    })
    it('Go to the Cart Page', ()=>{

        pre_cart_page.go_to_cart_page()
    })
    it('Select the shipping methods', ()=> {
        
        cart.must_be_cart_page()
        cart.input_postal_code(data.postal_code)
        cart.confirm_postal_code()
        cart.select_shipping_method(data.ship_code)
        
    })
    it('Go to Payment Methods', ()=>{
        cart.go_to_payment()
    })


})

describe ('Happy Path - Shopping without Logged in', ()=>{

    var data = main_data.access_data()

    it('Opening the main page', ()=>{

        home.go_main_page()

    })
    it('Searching the product', ()=>{

        home.set_cookies()
        home.search_product(data.prod_cod)

    })
    it('Buying the product', ()=>{

        product_page.buy_product()

    })
    it('Go to the Cart Page', ()=>{

        pre_cart_page.go_to_cart_page()
    })
    it('Select the shipping methods', ()=> {
        
        cart.must_be_cart_page()
        cart.input_postal_code(data.postal_code)
        cart.confirm_postal_code()
        cart.select_shipping_method(data.ship_code)
        
    })
    it('Go to Payment Methods', ()=>{
        cart.go_to_payment()
    })


})