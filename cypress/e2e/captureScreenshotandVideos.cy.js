describe('',()=>{

    it('Caputure screenshots & Videos', () => {

        cy
        .visit('https://demo.opencart.com/')

        cy
        .screenshot('Homepage')

        cy
        .wait(5000)

        cy
        .get('.col-12 > .img-fluid').screenshot('photo')

        
        
    });

    it.only('Automatically capture screenshot & video on failure', () => {
        cy
        .visit('https://demo.opencart.com/')

        cy
        .get('li:nth-child(7) a:nth-child(1)')
        .click()

        cy
        .get('#content>h2').should('have.text','Tablet')

       

        
    });
})