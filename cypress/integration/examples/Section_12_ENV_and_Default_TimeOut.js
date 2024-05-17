describe('learning Environment variable and Default timeout', function(){


    it("Environment Variable" , function(){
        // we can set Environment variable in cypress.config.js file with env{}
        // This is basically used for setting variable to global level as we need to change the environment for every test level ex:QA,UAT
        // So if we need to perform same test in QA and UAT we can set url as env and then we just need to change the env variable moving from QA to UAT
        // we can also declare other variables which we are constantly using in out main code like ex:Username and Password ,etc.

        //cy.visit('https://rahulshettyacademy.com/angularpractice/')till now we are doing this 

        cy.visit(Cypress.env('url')+'/angularpractice/')
        //till now to call an cypress.config.js we were using Cypress.config('defaultTimeout',6000)
        //but for env wee need to Cypress.env
    })


    it("DefaultTimeout",function(){
        // we can change defaultTimeout from both cypress.config.js or in hardcore testing file
        //The Difference is when we change in cypress.config.js we set this value for global 
        // when we change in testing file from where we have written Cypress.config('defaultTimeout',6000) from there it will start considering 
        cy.visit(Cypress.env('url')+'/angularpractice/') //it will take default timeout as default or set in config like 4sec
        Cypress.config('defaultCommandTimeout',8000) // from now timeout would be 8sec

    })
})