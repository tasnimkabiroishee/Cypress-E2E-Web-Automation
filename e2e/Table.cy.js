describe('Handle Tables',(()=>{
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php");
        //cy.get("#input-username").type("demo")
        //cy.get("#input-password").type("demo")
        cy.get('button[type="submit"]').click()
        cy.wait(3000); // Wait for 3 seconds to avoid hitting rate limits

        ////cy.get(".btn-close").click()
        //customers ---> customers
        cy.get("#menu-customer>a", { timeout: 10000 }).click(); // 10 seconds timeout

        //cy.get("#menu-customer>a").click() // customers main menu
        cy.get('#menu-customer>ul>li:first-child') // customers sub/child item

    })
    it('Check Number Rows & Columns',()=>{

    })
    it('Check Cell data from specific Row & Column',()=>{
        
    })
    it('Read all the Rows & Columns data in the first page',()=>{
        
    })
    it('Pagination',()=>{
        
    })
}))