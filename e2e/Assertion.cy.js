const { assert } = require("chai");

describe("Assertions demo", () => {
    it("Implicit assertions", () => {
        cy.visit("https://www.orangehrm.com/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test on this error
            return false;
        });
        
        
        //positive assertion
        //implicit assertions using 'should' keyword
        cy.url().should('include','orang') // is it a part of the url
        cy.url().should('eq',"https://www.orangehrm.com/") // equal or not
        cy.url().should('contain','ora')// is it a part of the url


        cy.url().should('include','orangehrm') // is it a part of the url
                .should('eq',"https://www.orangehrm.com/") // equal or not
                .should('contain','orangehrm')// is it a part of the url
        
        //implicit assertions using 'should' keyword
        cy.url().should('include','OrangeHRM') // is it a part of the url
                .and('eq',"https://www.orangehrm.com/") // equal or not
                .and('contain','orangehrm')

        //positive assertion
        cy.url().should('include','orangehrm') // is it a part of the url
                .and('not.eq',"https://www.orangehrm1.com/") // equal or not
                .and('not.contain','orangehrm1')


                cy.title().should('include','Orange')
                .and('eq','OrangeHRM')
                .and('contain','HRM')

            cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist') //logo exist

            //cy.xpath("//a").should('have.length','5') //no. of link

            cy.get("input[placeholder='Username']").type("Admin") // provide a value into inputbox
            cy.get("input[placeholder='Username']").should('have.value','Admin') //value


        })
    it("Explicit assertions", () => {
            cy.visit("https://www.orangehrm.com/")

            cy.get("input[placeholder='Username']").type("Admin") // provide a value into inputbox
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()

            let expName="xyz";

            cy.get(".oxd-userdropdown-name").then( (x)=> {

            let actName = x.text()

            // BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

             // TDD style
            assert.equal(actName,expName)
            assert.notequal(actName,expName)

    })


    })
})