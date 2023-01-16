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

        cy
        .get('table.table.table-bordered.table-hover>thead>tr>td')
        .should('have.length','7')
    });

    it('Checking cell data in specific row and column', () => {
        cy
        .get('table.table.table-bordered.table-hover>tbody>tr:nth-child(8)>td:nth-child(3)')
        .should('have.text','rs@yopmail.com')

        cy
        .get('table.table.table-bordered.table-hover>tbody>tr:nth-child(8)>td:nth-child(2)')
        .should('have.text','<h1>Test</h1> <h3>Testing</h3>')
    });

    it('Reading data from all the rows and colums',()=>{
        cy
        .get('table.table.table-bordered.table-hover>tbody>tr')
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })
    it.only('Pagination',()=>{
        //total number of pages 
        let  totalPages =13
        cy.get('[class="col-sm-6 text-end"]').then((e)=>{
            //let myText=e.text()  //Showing 1 to 10 of 9124 (913 Pages)
           //totalPages= myText.substring( myText.indexOf("(")+1, myText.indexOf('Pages')-1) //extact value present in Showing 1 to 10 of 9124 (913 Pages)
           cy.log("Total pages"+totalPages)

           for(let i=1; i<=totalPages; i++)
           {
            if(totalPages>1)
            {
                cy
                .log("Active pages"+i)

                cy
                .get('.pagination>li:nth-child('+i+')').click()
                cy
                .wait(2000)
                cy
                .get('table.table.table-bordered.table-hover>tbody>tr')
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy
                        .get('td:nth-child(3)')
                        .then((e)=>{
                            cy.log(e.text())
                        })
                       
                    })
                })
            }
           }
        })


    })
})
