

describe('CSSLocators', () => {
    it("csslocators", () => {
        cy.visit("http://automationpractice.com/index.php");
        
        //cy.get('#search_query_top', { timeout: 10000 }).should('be.visible').type('T-shirts');
        //cy.get("[name='submit_search']").click();
        //cy.get('.lighter').contains('T-shirts'); // Assertion

        cy.get("input.search_query[name='search_query']").type("T-Shirts") // tag + class + attribute tag is optional
        cy.get("[name='submit_search']").click()
        cy.get('.lighter').contains('T-shirts'); // Assertion

    
        });
});
