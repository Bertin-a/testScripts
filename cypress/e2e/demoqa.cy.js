describe("",()=>{

    it('', () => {
        cy.visit('https://demoqa.com/browser-windows')
        cy.get('#tabButton').click().then(()=>{
            cy.visit('https://demoqa.com/sample')
            cy.url().should('contain','https://demoqa.com/sample')
        })
       
})
it('', () => {
    cy.visit("https://demoqa.com/alerts")

    cy.window()
    .then((wind)=>{
        cy.stub(wind,'prompt').returns('Welcome')
    })
    cy.get('#promtButton').click()
    cy.get('#promptResult').should('have.text','You entered Welcome')
    
});

it('', () => {
    cy.visit("https://demoqa.com/browser-windows")
    cy.get('#windowButton').click().then(()=>{
        cy.visit('https://demoqa.com/sample')
        cy.url().should('contain','https://demoqa.com/sample')
        cy.get('#sampleHeading').should('have.text','This is a sample page')

    })
    
});

i.only('',()=>{
    cy.visit("https://demoqa.com/browser-windows")
    cy.get('#messageWindowButton')
})
})