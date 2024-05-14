/// <reference types ="Cypress" />

describe("My second Test suit", function () {
  context("720p resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720);
    });

    xit("Check-box", function () {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#checkBoxOption1').check().should('have.value' ,'option1').and('be.checked')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('input[type = "checkbox"]').check(['option1','option2'])
    });

    xit("Static Drop-Down" ,function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#dropdown-class-example').select('option1').should('have.value' ,"option1")
        
        // in select we just need to pass option name or value attribute
    })

    it('Dynamic Drop-Down' , function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each((el,index,list) => {
            var dynName = el.text()
            cy.log(dynName)
            if(dynName === "India"){
             cy.wrap(el).click()
            }
     })
        cy.get('#autocomplete').should('have.value',"India")

        cy.get('#autocomplete').clear().type('United')
        cy.wait(2000  )
        cy.get('.ui-menu-item div').each((el,index,list) => {
           var dynName = el.text()
           if(dynName === "United Kingdom (UK)"){
            cy.log("hello")
            cy.wrap(el).click()
           }
     })


    })

    xit("Visible or Disabled" , function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
    })

    xit("radio button" , function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('input[value = "radio2"]').check().should('be.checked')

    })

    it("alert" , function(){
        // Cypress auto accepts alerts 
        // Cypress have the capabilty to listen browser events
        // window.alert will trigger when the alert get trigger  
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click()

        cy.on('window:alert', (str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

    })
  });
});
