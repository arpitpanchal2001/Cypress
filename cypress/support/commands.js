// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add('addProductWithName', (productName) => { 
    cy.get('.card-title').each((el,index,list)=>{
    if(el.text().includes(productName)){
        cy.get('button.btn.btn-info').eq(index).click()
    }
}) })


Cypress.Commands.add('firstLogin',function(userEmail,password){

    console.log("helllooooo")
    cy.visit('https://rahulshettyacademy.com/client')
    cy.get('#userEmail').type(userEmail)
    cy.get('#userPassword').type(password)
    cy.intercept('POST','https://rahulshettyacademy.com/api/ecom/auth/login',
    (req)=>{
        console.log('inside intercept')
       
        Cypress.env('userEmail',userEmail)
        console.log('lets see email' + Cypress.env('userEmail'))

        Cypress.env('password',password)

        req.continue((res) => {
            console.log("inside res");
            console.log("token " + res.body.token)
        Cypress.env('token',res.body.token)
        const tok = res.body.token
        Cypress.env('token',tok)
       
        console.log('lets see token' + Cypress.env('token'))

        // console.log(Cypress.env('token',res.body.token))
        })
        
    }).as('handeling')
    
   
    cy.get('input[type*="submit"]').click()
    cy.wait('@handeling')
})
Cypress.Commands.add('loginApi' , function(){
    cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',
    {"userEmail":Cypress.env('userEmail'),"userPassword":Cypress.env('password')}).then(function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token)
    })
})
Cypress.Commands.add('previousLogin',function(){
                console.log('lets see email' + Cypress.env('userEmail'))
                // console.log('lets see token' + Cypress.env('token'))
    
                cy.visit('https://rahulshettyacademy.com/client',
                {
                    onBeforeLoad:function(window){
                        window.localStorage.setItem('token' ,Cypress.env('token'))
                        
                    }
                })
            })


//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })