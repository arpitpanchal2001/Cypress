// Cypress doesnot directly support Xpath so  if we want to use then first of all install Xpath package npm install -D cypress-xpath
// Add this in support/e2e.js require('cypress-xpath')
describe("Trying to use Xpath in cypress" , function(){

    it('Xpath', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//input[@type="text"]').eq(0).type('brinjal')
    })
})