const { describe } = require("mocha");

describe('Alerts', ()=> {
    // 1) Javascript Alert: It will have some text and an 'OK' button
    it('JS alert', ()=> {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')  //the text inside alert => verify
        })
        //alert window automatically closed by cypress

        cy.get("#result").should('have.text','You successfully clicked an alert') //result msg on the page => verify
    })


// 2) Javascript Confirm Alert: It will have some text and an 'OK' and 'Cancel' button
    it('JS alert - Ok button', ()=> {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')  //the text inside alert => verify
        })
        //alert window automatically closed by cypress (clicking on OK button)
        cy.get("#result").should('have.text','You clicked: Ok') //result msg on the page => verify

    
    })

    it('JS alert - Cancel button', ()=> {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')  //the text inside alert => verify
        })
        //alert window automatically closed by cypress (clicking on OK button)
        cy.on('window:confirm',()=> false); // cypress closes alert window using cancel button
        
        cy.get("#result").should('have.text','You clicked: Cancel') //result msg on the page => verify

    
    })
// 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' button
    it('JS prompt alert', ()=> {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click();
        //cypress will automatically close prompted alert- it will use OK button - by default
        //cy.on('window:prompt',()=> false);
        cy.get("#result").should('have.text','You entered: welcome')

    })
// 4) Authenticated Alert
    it('Authenticated alert', ()=> {
        //approach-01
        cy.visit('http://the-internet.herokuapp.com/basic_auth', {auth:
                                                                        {   
                                                                            username: "admin", 
                                                                            password: "admin" 
                                                                        }
                                                                    }
                )

        cy.get("div[class='example'] p").should('have.contain',"Congratulations")  
        
        /*
        //approach-02
        cy.visit('admin:admin@http://the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")  
        })
        */

    })
})
