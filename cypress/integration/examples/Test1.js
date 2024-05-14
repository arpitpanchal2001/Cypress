describe("My first Test suit" , function(){
    context('720p resolution', () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1280, 720)
        })

    it("My first test case" ,function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")  
       
    })
    it("checking search field" ,function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // cy.get('.product:visible').should('have.length',4)

        // parent child chaining 
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
       
    })
    it("By Searching ca in input field trying to add carrot in cart" , function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').each(($el,index,$list) =>{
           var vegName = $el.find('h4.product-name').text()
           if(vegName.includes('Carrot')){
                cy.wrap($el).find('button').click()

           }
        })
    })
    it("example till checkout",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').each((el,index,list) =>{
          var text =  el.find('h4.product-name').text()
           if(text.includes('Cashews')){
            cy.wrap(el).find('button').click()
            cy.get('.cart-icon').click()
            cy.get('.cart-preview > .action-block > button').click()
            cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
           }
        })
    })


    }) 
})