// Cypress introduced support for iframes (inline frames) in version 3.0.0, released on July 30, 2018. 
// This allowed Cypress users to interact with elements inside iframes within their tests.
/// <reference types ="Cypress" />
/// <reference types ="Cypress-iframe" />
import 'cypress-iframe'

describe('section 9 ' , function(){
    context("720p resolution", () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1280, 720);
        }); 
    
        xit('Handeling frames' , ()=>{
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            // for testing frame we need to first load frame into cypress object and then use iframe
            cy.frameLoaded("#courses-iframe")
            cy.iframe().find("a[href*='mentorship']").eq(0).click()
            cy.iframe().wait(6000).find('h1[class*="pricing-title"]').should('have.length',2)
            cy.iframe().find('div.sidebar-title h3').should('contain',"Testimonial")
            cy.iframe().contains("JOIN NOW").click()
        })

        it('calender' ,function(){
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get('a[href*="offers"]').invoke('removeAttr','target').click()
            cy.get('.react-date-picker__inputGroup').click()
            cy.get('.react-calendar__navigation__label__labelText').then(function(year){
                var year1 = year.text()
                if(!year1.includes('2027')){
                    cy.get('.react-calendar__navigation__label').click()
                }
            })
            cy.get('.react-calendar__navigation__label__labelText').then(function(Onyear){
                var yr = Onyear.text()
                if(yr !='2027'){
                    cy.get('.react-calendar__navigation__label').click()
                }
            })

            cy.get('.react-calendar__tile ').each((el,index,list)=>{
                var yrr = el.text()
                
                if(yrr === "2027"){

                    cy.wrap(el).click()

                }
            })
            cy.get('.react-calendar__tile ').each((el,index,list)=>{
                var yrr = el.text()
                
                if(yrr === "June"){

                    cy.wrap(el).click()

                }
            })
            cy.get('.react-calendar__month-view__days__day').each((el,index,list)=>{
                var day = el.text()
                
                if(day === "7"){

                    cy.wrap(el).click()

                }
            })
            cy.get('.react-date-picker__inputGroup input').eq(0).should('have.value','2027-06-07')
        })
    
    })
})