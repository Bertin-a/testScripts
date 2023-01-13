///<reference types="cypress"/>

describe('My first Test', () => {
  it('Verify title postive', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM')
  })
  it('verify title Negative ', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHR')
  });
  it('type correct details and login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[placeholder="Username"]').type('Admin')
    cy.get('[placeholder="Password"]').type('admin123')
    cy.get('[type="submit"]').click()


  });
   it('type wrong details and login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[placeholder="Username"]').type('Ad')
    cy.get('[placeholder="Password"]').type('admin123')
    cy.get('[type="submit"]').click()
  });
})