describe("Check UI Elements", () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
         //visibility of RadioButtons
         cy.get("input#male").should('be.visible') // tag#element : behavior.visible
         cy.get("input#female").should('be.visible')
 
         //Selecting RadioButtons
         cy.get("input#male").check().should('be.visible')
         cy.get("input#female").check().should('not.be.visible')
        

       
    })
    it("Checking CheckBoxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

       // //visibility of element
       // cy.get("input#monday").should('be.visible') // tag#id : behavior.visible
        
       // //selecting single checkbox
       // cy.get("input#monday").check().should('be.checked')
        
       // //Unselecting single checkbox
       // cy.get("input#monday").uncheck().should('not.be.checked')


        //Selecting all checkboxes
        // tag.class[type]
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
    })

    })
