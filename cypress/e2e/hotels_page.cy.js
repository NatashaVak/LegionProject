///<reference types = "Cypress"/>
describe('Hotels pages for travel site', () => {
const destination_list = '[name="Filter.DestinationId"]'
const children_num = '[name="Filter.ChildrenNum"]'     
 const submit = '[class=btn]' 
 const check_in = '[name="Filter.CheckIn"]'
 const check_out = '[name="Filter.CheckOut"]'
 const adult_num = '[name="Filter.AdultNum"]'

  before(() =>{
          cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
      })
      beforeEach(() => {
        cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
})



      it('chooses list of destination', () => {
        cy.get(destination_list).should('be.visible')
        cy.get(destination_list).select('Jerusalem').invoke("val").should('eq', "8")   
        cy.get(destination_list).select('London').invoke("val").should('eq', "31")    
        cy.get(destination_list).select('New York').invoke("val").should('eq', "51")
    
        
      })
         it('choosing a valid number of children', () => {
          cy.get(children_num).should('be.visible')
          cy.get(children_num).clear().type('3').click().should('have.value','3')
          cy.get(submit).click()
          cy.get('[class="row children-age"]').should('be.visible')
          cy.get('[name="Filter.ChildrensAge[0]').clear().type('5')
          cy.get('[name="Filter.ChildrensAge[1]').clear().type('1')
          cy.get('[name="Filter.ChildrensAge[2]').clear().type('7')
          cy.get(submit).click()
         })
        

          it('choosing a ivalid dates', () => {
          cy.get(destination_list).select('Jerusalem')    
          cy.get(check_in).clear()
          cy.get(check_in).type("2023-04-25");
          cy.get(check_out).clear()
          cy.get(check_out).type("2023-04-23");
          cy.get(submit).click()
          })

          it('choosing a ivalid number of adults', () => {
          cy.get(destination_list).select('Jerusalem')    
          cy.get(check_in).clear()
          cy.get(check_in).type("2023-04-25");
          cy.get(check_out).clear()
          cy.get(check_out).type("2023-04-29");
          cy.get(adult_num).clear()
          cy.get(adult_num).type("25");
          cy.get(submit).click()
          })

          it('choosing a ivalid number of children', () => {
          cy.get(children_num).clear()
          cy.get(destination_list).select('Jerusalem')    
          cy.get(check_in).clear()
          cy.get(check_in).type("2023-04-25");
          cy.get(check_out).clear()
          cy.get(check_out).type("2023-04-29");
          cy.get(adult_num).clear()
          cy.get(adult_num).type("2");
          cy.get(children_num).type("11")
          cy.get(submit).click()
        })

      })
      
        

        // cy.get(check_in).should('be.visible')
        // cy.get(check_out).should('be.visible')
        
        // it('choosing a ivalid number of adults', () => {
        //  cy.get(adult_num).should('be.visible')
       
    //     })

    //    it('choosing a ivalid number of children', () => {
    //     cy.get(children_num).should('be.visible')
    //     cy.get(children_num).clear().type('8')
    //     cy.get(submit).click()


    
       

   







    //    it('choosing a invalid number of adults', () => {
    //     cy.get(adult_num).should('be.visible')

      


        // it('choosing a invalid dates', () => {
        
        //     cy.get('[id="dp1681337191156"]').should('be.visible')
    
      
        

//  const adult_num = '[id=Filter_AdultNum"]'
//  const adult_num = '[name="Filter.AdultNum"]'
//  const checkin = '[name="Checkin"]'

// const checkin = '[name="Filter.CheckIn"]'










        //    cy.get('[class="row children-age"]').should('be.visible')
           
        //    cy.get('[name="Filter.ChildrensAge[0]').clear().type('1',{force:true})


            //  cy.get(chil_age).should('be.visible')

        //    cy.get(children_num.clear();
        //    cy.get(children_num).invoke("val").should('eq', "2")





