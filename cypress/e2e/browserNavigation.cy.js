describe('',()=>{
    beforeEach('Login',()=>{
        cy
        .visit('https://demo.opencart.com/')

        cy
        .title().should('eq','Your Store')

    })

    it('Navigation Test', () => {

        cy
        .get('li:nth-child(7) a:nth-child(1)')
        .click()

        cy
        .get('#content>h2')
        .should('have.text','Cameras')

        cy
        .go('back')

        cy
        .get('[title="Your Store"]')
        .should('be.visible')

        cy
        .go('forward')

        cy
        .get('#content>h2')
        .should('have.text','Cameras')

        cy
        .go(-1)

        cy
        .get('[title="Your Store"]')
        .should('be.visible')

        cy
        .go(1)

        cy
        .get('#content>h2')
        .should('have.text','Cameras')

        cy
        .reload()


    });
})