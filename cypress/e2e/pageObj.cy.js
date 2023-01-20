import Login from "../pageObjectModel/loginScreen"

describe('',()=>{

    it('type correct details and login', () => {
        cy
        .visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('orangehrm').then((e)=>{

            const login = new Login() 
            login.setUsername(e.username)
            login.setPassword(e.password)
            login.clickSubmit()
            login.verifyLogin()
        })

       
    
    })
})