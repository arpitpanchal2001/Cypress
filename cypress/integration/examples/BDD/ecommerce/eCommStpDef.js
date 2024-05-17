import ProductPage from '../../../pageObjects/ProductPage'
const { Given, Then, When} = require("@badeball/cypress-cucumber-preprocessor");
var Productpage = new ProductPage();
Given('I open ecommerce page',function(){
    Productpage.visitHomePage()
})
When('i add items to cart' ,function(){
    Productpage.getShop().click()
    this.data.productName.forEach(function (productName) {
        cy.addProductWithName(productName)
    })
    Productpage.getCheckoutButton().click()
})
Then('Validate the total price', function(){
    Productpage.total().then((result) => {
        cy.get('td h3 strong').then(function(get){
            var totalWithDollar = get.text();
            var splitt = totalWithDollar.split(" ");
            var total = Number(splitt[1].trim());
            expect(total).to.equal(result);
        });
    });
});

Then('Select the submit and verify success', function(){

});
