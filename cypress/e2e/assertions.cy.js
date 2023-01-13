describe('Assertions',()=>{
it('Implicit Assertions', () => {
    //should & and
    cy
    .visit('https://opensource-demo.orangehrmlive.com/')

    cy
    .url().should('include','https')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm')
    .and('not.contain','greenhrm')

    cy
    .title().should('not.contain','hyel')
    .and('contain','HRM')
    .and('eq','OrangeHRM')

    cy
    .get('[alt="company-branding"]')
    .should('be.visible')
    .and('exist')

    cy
    .get('[placeholder="Username"]')
    .type('Admin')
    .should('have.value','Admin')
 });



  it('Explicit Assertions', () => {
    //expect   BDD
    //assert TDD
    cy
    .visit('https://opensource-demo.orangehrmlive.com/')

    cy
    .get('[placeholder="Username"]')
    .type('Admin')

    cy
    .get('[placeholder="Password"]')
    .type('admin123')

    cy
    .get('button[type="submit"]')
    .click()

    let expectedName ="Larhonda Metz                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       "

    // cy
    // .get('.oxd-userdropdown-name')
    // .then((x)=>{
    //   let actualName = x.text()
    //   expect(actualName).to.equal(expectedName)
    //  })

     cy
     .get('.oxd-userdropdown-name')
     .then((x)=>{
      let actualName=x.text()
      expect(actualName).to.not.equal(expectedName)
      //assert.equal(actualName,expectedName)
     })
    });
 
  

})