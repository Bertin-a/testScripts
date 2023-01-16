import 'cypress-iframe';
require('@4tw/cypress-drag-drop')
describe('Mouse operations',()=>{
   
    it('MouseHover', () => {
        cy
        .visit('https://demo.opencart.com/')

        cy
        .get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle')
        .trigger('mouseover')
        .click()

        cy
        .get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible')

       
        
    });
    it('Right click Approach', () => {
        cy
        .visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy
        .get('span[class="context-menu-one btn btn-neutral"]')
        .trigger('contextmenu')

        cy
        .get('.context-menu-icon-cut')
        .should('be.visible')
    });

    it('Right click Approach2',()=>{
        cy
        .visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy
        .get('span[class="context-menu-one btn btn-neutral"]')
        .rightclick()

        cy
        .get('.context-menu-icon-cut')
        .should('be.visible')
    })
    
    it('Double click Approach1 using trigger', () => {

        cy
        .visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        cy
        .frameLoaded('#iframeResult')

        cy
        .iframe('#iframeResult')
        .find('button[ondblclick="myFunction()"]')
        .trigger('dblclick')

        cy
        .iframe('iframeResult')
        .find('#field2')
        .should('have.text','Hello World!')
    });

    it('Right click Approach2 using dblclick', () => {
        
        cy
        .visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        cy
        .frameLoaded('#iframeResult')

        cy
        .iframe('#iframeResult')
        .find('button[ondblclick="myFunction()"]').dblclick()
    });

    it('Drag and drop using plugin', () => {

        cy
        .visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

        cy
        .get('#box6').drag('#box106',{force:true})
    });

    it.only('Scrolling on the page', () => {

        cy
        .visit('https://www.youtube.com/watch?v=qqH2QSXmVJg&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=13')
    
        cy
        .get(':nth-child(18) > #wc-endpoint > #container > #meta > h4.style-scope > #video-title')
        .scrollIntoView({duration:2000})

        
    });

})