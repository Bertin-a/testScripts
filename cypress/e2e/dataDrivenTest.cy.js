describe('',()=>{
    //let userData

    it('', () => {
        cy
        .visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy
        .fixture('orangehrm2')
        .then((data)=>{
            data.forEach((userData)=>{

                cy
                .get('input[name="username"]')
                .type(userData.username)
        
                cy
                .get('input[placeholder="Password"]')
                .type(userData.password)
        
                cy
                .get('button[type="submit"]')
                .click()
                
                if(userData.username=="Admin"&&userData.password=="admin123")
                {
                    cy
                    .get('span[class="oxd-topbar-header-breadcrumb"]')
                    .should('be.visible')
                    .and('have.text','Dashboard')

                    cy
                    .get('.oxd-userdropdown-tab').click()

                    cy
                    .get('[href="/web/index.php/auth/logout"]')
                    .click()

                }

                else{
                    cy
                    .get('.oxd-text.oxd-text--p.oxd-alert-content-text')
                    .should('have.text',userData.expected)
                }
        
               

                
            })
        })    
    })
})    
