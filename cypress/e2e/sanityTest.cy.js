///<reference types = "Cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to the travel site', () => {
        cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    })

    before(() => {
        cy.visit('https://www.accesstravel.com/en-US/Home/Index/')
    })

    beforeEach(() => {
        cy.visit('https://www.accesstravel.com/en-US/Home/Index/')
})

     after(() => {
        cy.log("after each")
   })
 

    it('verify that tabs on menu page', () => {
        cy.get('.hotels').should("be.visible")
        cy.get('.guides').should("be.visible")
        cy.get('.js-list-tours').should("be.visible")
        cy.get('.attraction-link').should("be.visible")
    })

     it('verify that clicking on Hotel will navigate to correct page', () => {
         cy.get('.hotels').click()
    })

     it('verify that clicking on Guides will navigate to correct page', () => {
         cy.get('.guides').click()
     })

     it('verify that clicking on ListTours will navigate to correct page', () => {
         cy.get('.js-list-tours').click()
     })

     it('verify that clicking on AttractionLink will navigate to correct page  tab', () => {
         cy.get('.attraction-link').click()
     })

     it('verify that clicking on Login will open correct page  tab', () => {
         cy.get(':nth-child(3) > :nth-child(1) > a').click({ force: true })
     })

     it('verify that clicking on  Signup will open correct page  tab', () => {
        cy.get('.mobile-menu > :nth-child(3) > :nth-child(2) > a').click({ force: true })

     })

})

