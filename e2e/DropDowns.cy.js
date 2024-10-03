
describe('Dropdown Test', () => {
    it('Dropdown with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get('#zcf_address_country') // Correctly use the ID selector
            .select('Italy')
            .should('have.value', 'Italy');
    });

    it('Dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get('#select2-billing_country-container') // Correctly use the ID selector
        cy.get('#select2-billing_country-container') // Select the container for billing country
            .click() // Open the dropdown
        cy.get('input.select2-search__field') // Look for the search input field inside the dropdown
            .type('Italy') // Type 'Italy'
            .type('{enter}'); // Press enter to select the option



        cy.get('#select2-billing_country-container')  // to verify : whether it captured the right value or not
        .should('have.text','Italy')


        

    
    });

    it('Auto suggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/");
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()// Select the container for billing country
    })

    it.skip('Dynamic dropdown', () => {
        cy.visit("https://www.google.com/"); //launching a page
        cy.get("textarea[name='q']", { timeout: 10000 })
            .should('exist')
            .should('be.visible')
            .type('cypress automation');

        cy.wait(3000);

        //cy.get("input[name='q']").type('cypress automation') // searching something
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length',11) //capturing all options + counting total number of options

        cy.get('div.wM6W7d>span').each(($el) => {
            // Verify that "cypress automation tool" is one of the suggestions
            expect($el.text()).to.include('cypress automation tool');
          });
          
        //cy.get('div.wM6W7d>span').each(($el, index, $list) =>{  //reading each & eary option into this element + 
          //  if($el.text()=='cypress automation tool')  //comparing text value of the element into our text
           // {
                cy.wrap($el).click()  //if both are equal then i'm directly clicking into that option
           // }
        //})

        cy.get("input[name='q']").should('have.value','cypress automation tool')

    })
    it('Dynamic dropdown', () => {
        cy.visit('https://www.google.com/');
      
        // Wait for the search input field to be visible
        cy.get('textarea[name="q"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .type('cypress automation');
      
        // Wait for search suggestions to load
        cy.wait(3000); // wait for suggestions to appear
      
        // Assert that the suggestions container contains at least 10 items and less than 20 items
        cy.get('div.wM6W7d>span')
          .should('have.length.greaterThan', 10) // At least 10 suggestions
          .should('have.length.lessThan', 20); // Fewer than 20 suggestions
      
        // Check that each suggestion includes the term 'cypress automation'
        cy.get('div.wM6W7d>span')
            .filter((index, el) => Cypress.$(el).text().trim() !== '')
            .each(($el) => {
             expect($el.text()).to.include('cypress automation');
        });
        cy.get('textarea[name="q"]').should('have.value','cypress automation')

      });
      
      
});
