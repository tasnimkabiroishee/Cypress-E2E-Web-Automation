describe("handling frames", () =>{
    it('approach 01', ()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe")

        const iframe = cy.get("#mce_0_ifr")
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap)
                
                
                //iframe.clear()
                 //.type("Welcome")
    })
}) 

/*describe('Handling Iframe', () => {
    it('Types into iframe body', () => {
      // Visit the page with iframe
      cy.visit('http://the-internet.herokuapp.com/iframe')
  
      // Get the iframe and its contentDocument, then interact with the correct element
      cy.get('iframe').then(($iframe) => {
        const body = $iframe.contents().find('body')
  
        // Ensure the body is visible and interactable
        cy.wrap(body).should('be.visible')
  
        // Now, find the TinyMCE editor's contenteditable div or specific area inside the iframe
        const editor = body.find('.mce-content-body')
  
        // Make sure the editor is visible and clear any existing content (if allowed)
        cy.wrap(editor).should('be.visible')
        cy.wrap(editor).clear() // You can only clear content if it's editable
  
        // Type the new text
        cy.wrap(editor).type('Welcome')
      })
    })
  })*/

    