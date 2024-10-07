describe('handling frames', () => {
      it('approach 01', () => {
        // Visit the page with the TinyMCE iframe
        cy.visit('http://the-internet.herokuapp.com/iframe');
    
        // Step 1: Get the iframe and focus on its body element
        cy.get('iframe#mce_0_ifr').then($iframe => {
          const iframeBody = $iframe.contents().find('body'); // Get the body inside the iframe
    
          // Step 2: Ensure the editor's body is contenteditable
          cy.wrap(iframeBody)
            .invoke('attr', 'contenteditable', 'true') // Make sure it's editable
            .clear() // Clear any existing content
            .type('Welcome {cmd+a}'); // Type "Welcome" and select all (cmd+a)
          
            
          // Step 3: Interact with the TinyMCE editor toolbar (Optional)
          // Example: Click the Bold button
          cy.get('[aria-label="Bold"]').click();
        });
    
        // Additional steps can be added as needed to interact with the TinyMCE editor.
      });

      /*it('approach 02 - by using custom command', ()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe")

        cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}")

        cy.get("[aria-label='Bold']").click();
    })*/
        
    });
