describe('Alerts in cypress',()=>{
    it.only('simple alert', () => {
        cy
        .visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy
        .get('button[onclick="jsAlert()"]').click() 
        
        cy
        .on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })

        cy
        .get('#result')
        .should('have.text','You successfully clicked an alert')

    });

    it('comfirmation alert using OK button', () => {
        cy
        .visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy
        .get('button[onclick="jsConfirm()"]')
        .click()

        cy
        .on('window:comfim',(t)=>{
            expect(t).to.contain('I am a JS Confirm')

        })
        cy.
        get('#result')
        .should('have.text','You clicked: Ok')
    });
    it('alert confimation using cancel button', () => {
        cy
        .visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy
        .get('button[onclick="jsConfirm()"]')
        .click()

        cy
        .on('window:confirm',()=>false)

        cy
        .get('#result')
        .should('have.text','You clicked: Cancel')
       
    });

    it('Js prompt alert', () => {
        cy
        .visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window()
        .then((wind)=>{
            cy.stub(wind,'prompt').returns('Welcome')

        })

        cy
        .get('button[onclick="jsPrompt()"]').click()

        cy
        .get('#result')
        .should('have.text','You entered: Welcome')

        
    });

    it('Js Prompt using cancelled button', () => {
        cy
        .visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy
        .on('window:confirm',()=>false)

        cy
        .get('#result')
        .should('have.text','You entered: null')


        
    });

    it('Authentication alert', () => {
        //approach one passing username and password as paramenter 

        cy
        .visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin", password:"admin"}})

        cy
        .contains('Congratulations! You must have the proper credentials.')
        .should('be.visible')
        
    });

    it('Authentication alert', () => {
        //approach two passing the username and password in the url
        cy
        .visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        
        cy
        .contains('Congratulations! You must have the proper credentials.')
        .should('be.visible')
        
    });

})