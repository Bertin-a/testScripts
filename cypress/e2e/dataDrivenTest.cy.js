describe('MY Test suite',()=>{
  

    it('DataDrivenTest', () => {

        cy
        .visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy
        .fixture('orangehrm2').then((data)=>{
            data.foreach((userData)=>{

                cy
                .get('input[placeholder="Username"]')
                .type(userData.username)

                cy
                .get('input[placeholder="Password"]')
                .type(userData.password)
        
                cy
                .get('button[type="submit"]')
                .click()
        
                cy
                .get('span[class="oxd-topbar-header-breadcrumb"]')
                .should('be.visible')
                .and('have.text', userData.expected)

            })

        })
        
    });

})