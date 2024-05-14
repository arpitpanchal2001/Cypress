export default class ProductPage {
   visitHomePage(){
      return cy.visit('https://rahulshettyacademy.com/angularpractice/')
   }
   getShop(){
      return cy.get('a[href*="/angularpractice/shop"]')
   }
   getCheckoutButton(){
      return cy.contains('Checkout')
   }
   total(){
      
      let total = 0;
         cy.get('tr td:nth-child(4) strong').each((el,index,list)=>{
             
            let rup = el.text()
            let split = rup.split(" ")
            let rupees = Number(split[1])
            total = total + rupees;
            cy.log(total)
         })
         return total
     }
}