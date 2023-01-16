import 'cypress-iframe';

describe('Handling Iframes',()=>{

    it('Approach1', () => {
        cy
        .visit('https://the-internet.herokuapp.com/iframe')

        let iframe= cy
        .get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .then(cy.wrap)

        iframe
        .clear()
        .type('Welcome {ctrl+a}')

        cy
        .wait(5000)

        cy
        .get('[aria-label="Bold"]')
        .click()


      
    });

    it('Approach2 using custom command', () => {
        cy
        .visit('https://the-internet.herokuapp.com/iframe')
        cy
        .getIframe('#mce_0_ifr')
        .clear()
        .wait(5000)
        .type('Welcome {ctrl+a}')

        cy
        .wait(5000)

        cy
        .get('[aria-label="Bold"]')
        .click()


        
    });

    it.only('Apprach3 using cypress iframe plugin', () => {
        cy
        .visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr') //load the frame

        cy
        .iframe('#mce_0_ifr')
        .clear().wait(5000)
        .type('Welcome {ctrl+a}')

        cy.wait(5000)

        cy
        .get('[aria-label="Bold"]')
        .click()


        
    });
})