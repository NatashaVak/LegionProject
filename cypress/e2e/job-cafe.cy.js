///<reference types = "Cypress"/>

describe('Job Cafe sanity spec', {defaultCommandTimeout:10000}, () => {
    it('test jobs page with 10 sec', {defaultCommandTimeout:10000}, () => {

        cy.visit('job-page')
        // cy.wait(5000)
        cy.get('[class="post-item clearfix"]').should('be.visible')

    })
})
//     it('test jobs page with 1 sec', {defaultCommandTimeout:1000}, () => {
//     cy.visit('http://167.99.178.249:3000/job-page '), {timeout:10000}
//     // cy.wait(5000)
//     cy.get('[class="post-item clearfix"]', {timeout:10000}).should('be.visible')
// })

// })

