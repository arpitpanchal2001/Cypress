import ProductPage from '../pageObjects/ProductPage'

describe("Making different class for all page and using it to bind the data" , function(){
before(function(){
    cy.fixture('example').then(function(data){
        this.data = data
    })
})

    it("lets do it for home page" , function(){
        var Productpage = new ProductPage();
        Productpage.visitHomePage()
        Productpage.getShop().click()
        this.data.productName.forEach(function(productName){
            cy.addProductWithName(productName)
        })
        Productpage.getCheckoutButton().click()
        
    })
})