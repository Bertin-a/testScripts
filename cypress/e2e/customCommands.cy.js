describe('Custom Commands',()=>{

    beforeEach('Login',()=>{
        cy
        .visit('https://demo.nopcommerce.com/')

    })

    after('Logout',()=>{
        cy
        .get('.ico-logout')
        .click()
    })

    it('handling links', () => {

      

        cy
        .clickLink('Apple MacBook Pro 13-inch')

        
    });

    it('over write exisiting commands',()=>{
       
        cy
        .clickLink('apple MacBook Pro 13-inch')

    })

    it('Login command', () => {
        cy
        .clickLink('Log in')

        cy
        .loginApp('bertinatesting@gmail.com','123456')

        cy
        .get('.ico-account').should('have.text','My account')
    });
})