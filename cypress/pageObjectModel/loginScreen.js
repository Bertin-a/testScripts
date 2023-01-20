class Login{

    txtUsername = '[placeholder="Username"]'
    txtPassword = '[placeholder="Password"]'
    btnSubmit = 'button[type="submit"]'
    txtDashboard = '.oxd-topbar-header-breadcrumb > .oxd-text'


    setUsername(username){

        cy.get(this.txtUsername).type(username)
       
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()

    }

    verifyLogin(){
        cy
        .get(this.txtDashboard)
        .should('have.text','Dashboard')

    }

    // navigate(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com/')
    //    oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module
    //    
    //     
    // }
}

export default Login