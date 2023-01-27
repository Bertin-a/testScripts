describe('',()=>{

    it('Alis and Invoke', () => {
        cy
        .visit('https://automationteststore.com/')
    
        cy
        .get("a[href*='product/category&path=']")
        .contains("Hair Care").click()
    
        cy
        .get(".fixed_wrapper > .fixed > .prdocutname")
        .eq(0).invoke('text')
        .as('productThumbnail')
    
        cy
        .get('@productThumbnail').its('length').should('be.gt',5)
    
        cy
        .get('@productThumbnail')
        .should('include','Seaweed Conditioner')
    
       
    
        
    });

    it('Validate the product thumbnail', () => {
        cy
        .visit('https://automationteststore.com/')

        cy
        .get('.thumbnail')
        .as('productThumbnail')

        cy
        .get('@productThumbnail')
        .should('have.length',16)

        cy
        .get('@productThumbnail')
        .find('.productcart')
        .invoke('attr','title')
        .should('include','Add to Cart')
})

it('normal product', () => {

    cy
    .visit('https://automationteststore.com/')

    cy
    .get('.thumbnail')
    .as('productThumbnail')

    cy
    .get('@productThumbnail')
    .find('.oneprice')
    .each(($el, index, $list)=>{
        let price=$el.text()
        cy.log(price)
    })

    
});

it('price of normal sale items', () => {

    cy
    .visit('https://automationteststore.com/')

    cy
    .get('.thumbnail')
    .find('.oneprice')
    .invoke('text')
    .as('itemPrice')

    cy
    .get('@itemPrice')
    .then($linkText=>{
        let totalPrice =0
        let itemsPrice = $linkText.split('$')
        
         for(let i=0; i<itemsPrice.length; i++){
             cy.log(itemsPrice[i])
             totalPrice+=Number(itemsPrice[i])
        }
        
        cy.log('Normal sale items'+totalPrice)
     })

    
});

it.only('calculating the total price', () => {

    cy
    .visit('https://automationteststore.com/')

    cy
    .get('.thumbnail')
    .find('.oneprice')
    .invoke('text')
    .as('itemPrice')

    let totalPriceOfNormalItems=0
   
    let total=0

    cy
    .get('@itemPrice')
    .then($linkText=>{
        
        let normalPriceItems = $linkText.split('$')

        for(let i=0; i<normalPriceItems.length; i++)
        {
             total+=Number(normalPriceItems[i])
             cy.log(total)
            
        }
         totalPriceOfNormalItems+=total
    

         //cy.log(totalPriceOfNormalItems)

    })

    cy
    .get('.thumbnail')
    .find('.pricenew')
    .invoke('text')
    .as('salePrice')

    cy
    .get('@salePrice')
    .then($linkText=>{
        total
        let normalPriceItems = $linkText.split('$')

        for(let i=0; i<normalPriceItems.length; i++)
        {
             total+=Number(normalPriceItems[i])

             //cy.log("The total price of "+total)
            
        }
         totalPriceOfNormalItems+=total

         cy.log(totalPriceOfNormalItems)

    })

    


    
});



    
})

