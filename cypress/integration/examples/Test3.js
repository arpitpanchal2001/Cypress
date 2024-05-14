/// <reference types ="Cypress" />
describe("section 8", function () {
    context("720p resolution", () => {
      beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720);
      }); 


      xit('Handeling child tab(section 8)' , function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // if the child tab opens in new tab we need to remove target attr to open it in parent tab 
        cy.get('#opentab').invoke('attr','href','https://rahulshettyacademy.com/seleniumPractise/#/').invoke('removeAttr' , 'target').click()

        
            cy.get('.product-name:visible').each((el,index,list)=>{
                if(el.text().includes('Brinjal')){
                    cy.contains("ADD TO CART").click()
                }
            })

            // suppose we are completing changing the origin then we need to write code in 
            // cy.origin("www.geeksforgeek.com",function(){
              // write all the code in this wrap 
            // })
        })


        it('Handeling web table' ,function(){
          cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
          cy.get('.left-align #product tr td:nth-child(2)').each((el,index,list)=>{
             cy.log(el.text())
            var text =  el.text()
            if(text === "Master Selenium Automation in simple Python Language"){
              // to use next method to get next sibling we need to use next on get
              cy.get('.left-align #product tr td:nth-child(2)').eq(index).next().then(function(price){
                var prc =price.text()
                expect(prc).to.equal('25')
              })
            }
             
          })
        })

        it("mouse over" ,function(){
          // cypress doesnot support mouse over so we need to use show method on that mouseover element which is jQuery which grabs the hidden element
          cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
          // show method apply on immidiate parent of hiddent element 
          cy.get('.mouse-hover-content').invoke('show')
          cy.contains('Top').click()
          // or we can directly use click({force:true})
          cy.url().should('include','top')
        })
      })
    })
