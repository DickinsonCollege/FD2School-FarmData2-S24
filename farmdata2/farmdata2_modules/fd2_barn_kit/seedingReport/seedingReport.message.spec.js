describe('Test the message of the BarnKit Seeding Report if there are no logs', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')

        // Cypress clears the local storage between each test.  
        // So we need to save it at the end of each test (see afterEach)
        // and then restore before each test (here). 
        cy.restoreLocalStorage() 
        cy.visit('/farm/fd2-barn-kit/seedingReport')
    })

    afterEach(() => {
        // Save the local storage at the end of each test so 
        // that it can be restored at the start of the next 
        cy.saveLocalStorage()
    })

    it('Test the text of the message if there are no rows in the table', () => {
        cy.get('[data-cy=start-date-select]')
            .type('2024-01-01')
        cy.get('[data-cy=end-date-select]')
            .type('2024-01-02')
        cy.get('[data-cy=generate-rpt-btn]')
            .click()
        
        cy.get('[data-cy=no-logs-message]')
            .contains('No Logs Found in These Dates')
    })
})