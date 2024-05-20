describe('saving login token into env  ' ,function(){
    it.only('first login' ,function(){
      
        cy.firstLogin('arpitpanchal2643@gmail.com','Java@123')
        
    })
    it.only('previous login' ,function(){
      
        cy.previousLogin()
        
    })
   
})