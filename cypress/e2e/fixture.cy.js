

// describe('Fixtures demo',()=>{
//     let userData;

<<<<<<< Updated upstream
beforeEach('Login',()=>{
    cy.fixture().then((e)=>{
        userData=e
    })
=======
// before('Login',()=>{
//     cy.fixture('orangehrm').then((data)=>{
//         userData=data
//     })
>>>>>>> Stashed changes
    
// })
// //Direct Access
//     it('FixturesDemoTest', () => {

//         cy
//         .visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//         cy
//         .get('input[placeholder="Username"]')
//         .type('Admin')

//         cy
//         .get('input[placeholder="Password"]')
//         .type('admin123')

//         cy
//         .get('button[type="submit"]')
//         .click()

//         cy
//         .get('span[class="oxd-topbar-header-breadcrumb"]')
//         .should('be.visible').and('have.text','Dashboard')


//     });


//     })
    

//     it.only('FixturesDemoTest', () => {

//         cy
//         .visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
//         cy
//         .get('input[placeholder="Username"]')
//         .type(userData.username)

//         cy
//         .get('input[placeholder="Password"]')
//         .type(userData.password)

//         cy
//         .get('button[type="submit"]')
//         .click()

//         cy
//         .get('span[class="oxd-topbar-header-breadcrumb"]')
//         .should('be.visible')
//         .and('have.text', userData.expected)

        
//      })

describe('',()=>{

    let userData

    before('',()=>{
        cy.fixture('orangehrm').then((e)=>{
            userData=e
        })
    })

    it('', () => {

        cy
        .visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

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
<<<<<<< Updated upstream
        .should('be.visible').and('have.text', userData.expected)
=======
        .should('be.visible')
        .and('have.text','Dashboard')
>>>>>>> Stashed changes

        
    });
})

       

        
 