describe('MySuits',()=>{
    //before ||excuted only once before the first it block
        //after  || execute once after completion of all it block
        //beforeEach || executed before every it block
        //AfterEach || executed after every it block
        before('before',()=>{
            cy.log('runs before the first it')

        })
        after('after',()=>{
            cy.log('runs after all it')

        })
        beforeEach('',()=>{
            cy.log("Before each")
        })
        afterEach('',()=>{
            cy.log('afterEach')
        })



    it.only('search', () => {
        cy
        .log('First test case')
        
        
    });

    it('Advance search', () => {
        cy
        .log('Second test case')
        
    });

    it('listing products', () => {
        cy
        .log('Third test case')
        
    });
})