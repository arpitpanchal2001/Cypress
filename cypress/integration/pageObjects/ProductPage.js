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
}