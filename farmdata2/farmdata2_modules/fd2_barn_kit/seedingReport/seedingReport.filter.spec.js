describe('Test the contents of the BarnKit Seeding Report after generation', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        
        // Cypress clears the local storage between each test.  
        // So we need to save it at the end of each test (see afterEach)
        // and then restore before each test (here). 
        cy.restoreLocalStorage() 
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
    })

    afterEach(() => {
        // Save the local storage at the end of each test so 
        // that it can be restored at the start of the next 
        cy.saveLocalStorage()
    })
    
    //Gabe
    it("Check that when 'All' is selected in the Area field, the table will contain seeding logs for multiple different areas", () => {
        cy.get('[data-cy=start-date-select]')
            .type('2020-01-01')
        cy.get('[data-cy=end-date-select]')
            .type('2020-03-01')
        cy.get('[data-cy=generate-rpt-btn]')
            .click()
        cy.get('[data-cy=td-r0c2] > [data-cy=r0-Area]').should('have.text', 'M')
        cy.get('[data-cy=td-r1c2] > [data-cy=r1-Area]').should('have.text', 'CHUAU-4')
        cy.get('[data-cy=td-r2c2] > [data-cy=r2-Area]').should('have.text', 'SEEDING BENCH')
    })

    //Spencer
    it('Check that appropriate areas appear when the area filter is selected onto a specific area', () => {
        cy.get('[data-cy=start-date-select]')
            .type('2020-01-01')
        cy.get('[data-cy=end-date-select]')
            .type('2020-03-01')
        cy.get('[data-cy=generate-rpt-btn]')
            .click()
        cy.get('[data-cy=area-dropdown] > [data-cy=dropdown-input]')
            .select('SEEDING BENCH')

        cy.get('[data-cy=td-r0c2] > [data-cy=r0-Area]').should('have.text', 'SEEDING BENCH')
        cy.get('[data-cy=td-r1c2] > [data-cy=r1-Area]').should('have.text', 'SEEDING BENCH')
        cy.get('[data-cy=td-r2c2] > [data-cy=r2-Area]').should('have.text', 'SEEDING BENCH')
    })

    //Maximo
    it('Test that the area filter only contains areas where crops were planted in the selected date range', () => {
        cy.get('[data-cy=start-date-select]').type('2020-01-01')
        cy.get('[data-cy=end-date-select]').type('2020-03-01')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=area-dropdown] > [data-cy=dropdown-input] > [data-cy=option0]').should("have.text", "All")
        cy.get('[data-cy=area-dropdown] > [data-cy=dropdown-input] > [data-cy=option1]').should("have.text", "CHUAU-4")
        cy.get('[data-cy=area-dropdown] > [data-cy=dropdown-input] > [data-cy=option2]').should("have.text", "M")
        cy.get('[data-cy=area-dropdown] > [data-cy=dropdown-input] > [data-cy=option3]').should("have.text", "ORION")
        cy.get('[data-cy=area-dropdown] > [data-cy=dropdown-input] > [data-cy=option4]').should("have.text", "SEEDING BENCH")
    })
})