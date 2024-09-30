const { expect } = require("chai");
const { describe } = require("mocha");


describe('My First Test', () => {
    it('verify title-positive', () => {
        cy.visit("https://www.orangehrm.com/"); // Corrected URL
        cy.title().should('eq', 'OrangeHRM');
    });

    it('verify title-negative', () => {
        cy.visit("https://www.orangehrm.com/");
        cy.title().should('eq', 'OrangeHRM123');
    });
});


//describe('My First Test', function() {
  //  it('Does npt do much', function(){
  //      expect(true).to.equal(true)
  //  })
//})