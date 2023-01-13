///<reference types="cypress"/>
describe('Check UI Elements',()=>{
    it.skip('Checking Radio Buttons', () => {
        cy
        .visit('https://itera-qa.azurewebsites.net/home/automation')
//Checking visibility of radio button
        cy
        .get('input#female')
        .should('be.visible')

        cy
        .get('input#male')
        .should('be.visible')

        cy
        .get('input#other')
        .should('be.visible')

        //selecting radio button 
        cy
        .get('input#female')
        .check()
        .should('be.checked')
        
        cy
        .get('input#male')
        .should('not.be.checked')

        cy
        .get('input#other')
        .should('not.be.checked')

    });

    it.skip('checking multiple checkbox', () => {
        cy
        .visit('https://itera-qa.azurewebsites.net/home/automation')

        cy
        .get('input#monday')
        .should('be.visible')

        //checking single checkBox

        cy
        .get('input#monday')
        .check()
        .should('be.checked')

        //unchecking
        cy
        .get('input#monday')
        .uncheck().should('not.be.checked')

        //selecting all the checkboxes 

        cy
        .get('input.form-check-input[type="checkbox"]')
        .check()
        .should('be.checked')

        //unchecking all checkboxes
        cy
        .get('input.form-check-input[type="checkbox"]')
        .uncheck()
        .should('not.be.checked')
    });

    it.skip('Drop down', () => {
        cy
        .visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
        .select('France')
        .should('have.value','France')
 });
    it.skip('new site', () => {
        cy
        .visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy
        .get('#select2-billing_country-container')
        .click()

        cy
        .get('.select2-search__field')
        .type('Japan{enter}')
       

        cy
        .get('#select2-billing_country-container')
        .should('have.text','Japan')
        
        
    });
    it.skip('auto suggest drop down but static', () => {
        cy
        .visit('https://www.wikipedia.org/')
        
        cy
        .get('#searchInput')
        .type('Delhi')

        cy
        .get('.suggestion-title')
        .contains('Delhi University')
        .click()

    });
    it('Dynamic dropdown', () => {
        cy
        .visit('https://google.com')
        
        cy
        .get('.gLFyf')
        .type('cypress automation')

        cy
        .wait(3000)

        cy
        .get('div.wM6W7d>span')
        .should('have.length',11)

        cy
        .get('div.wM6W7d>span')
        .each( ($el, index, $list) =>{
            if($el.text() =='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
          
        })
        
    });
})