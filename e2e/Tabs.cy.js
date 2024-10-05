const { describe } = require("mocha");

describe('Handle tabs', (()=>{

        it('Approach - 01', (()=>{
            cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
            cy.get('.example >a').invoke('removeAttr','target').click(); //clicking on link
            cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
            cy.wait(5000);
            //operations
            cy.go('back') //back to the parent tab

    
        }))
        it('Approach - 02', (()=>{
            cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
            cy.get('.example >a').then((e)=>{
                let url=e.prop('href')
                cy.visit(url)
            })

            cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
            cy.wait(5000)
            //operations
            cy.go('back')
    
        }))
}))