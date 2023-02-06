// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy
    .get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})


//custom commands for clicking links using labels

Cypress.Commands.add('clickLink',(label)=>{

    cy.get('a').contains(label, {matchCase: false}).click()

})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  


//custom command for login

Cypress.Commands.add('loginApp',(email,password)=>{
    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('button[class="button-1 login-button"]').click()


})