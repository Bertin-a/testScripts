describe('Handling Tables',()=>{
    beforeEach('login',()=>{
        cy
        .visit('https://demo.opencart.com/admin/index.php')
           
        cy
        .get('#input-username')
        .type('demo')

        cy
        .get('#input-password')
        .type('demo')

        cy
        .get('[type="submit"]')
        .click()

        cy
        .get('.btn-close')
        .click()

        cy
        .get('#menu-customer>a')
        .click()

        cy
        .get('#menu-customer>ul>li:first-child')
        .click()
        
    


    })

    it('finding number of rows and columns', () => {

        cy
        .get('table.table.table-bordered.table-hover>tbody>tr')
        .should('have.length','10')

        cy.get('table.table.table-bordered.table-hover>thead>tr>td').should('have.length','7')
    });

    it('Checking cell data in specific row and column', () => {
        cy.get('table.table.table-bordered.table-hover>tbody>tr:nth-child(8)>td:nth-child(3)')
        .should('have.text','rs@yopmail.com')

        cy.get('table.table.table-bordered.table-hover>tbody>tr:nth-child(8)>td:nth-child(2)')
        .should('have.text','<h1>Test</h1> <h3>Testing</h3>')
    });
})