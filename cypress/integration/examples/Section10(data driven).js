describe('Data Driven fixtures' , function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
    it('Lets try first Data Driven test' , function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('input[placeholder="Password"]').type(this.data.password)
        cy.get('#exampleCheck1').check()
        cy.get('select').select(this.data.gender)
        cy.get('#inlineRadio1').check()
        cy.get('input[name*="bday"]').type(this.data.date)
        cy.get('input[type*="submit"]').click()
        cy.get('.alert-dismissible').then(function(str){
            var string = str.text()
            expect(string.includes('Success! The Form has been submitted successfully!.')).to.be.true
        })
    })
})