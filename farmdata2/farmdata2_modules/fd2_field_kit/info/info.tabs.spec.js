describe('Test the sub-tabs of the FieldKit tab', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')

        // Cypress clears the local storage between each test.  
        // So we need to save it at the end of each test (see afterEach)
        // and then restore before each test (here). 
        cy.restoreLocalStorage() 
        cy.visit('/farm/fd2-field-kit')
    })

    afterEach(() => {
        // Save the local storage at the end of each test so 
        // that it can be restored at the start of the next 
        cy.saveLocalStorage()
    })

    // Gabe
    it('Test Info and Seeding Input sub-tabs', () => {
        cy.get('.tabs--secondary').contains('Info').should('exist')
        cy.get('.tabs--secondary').contains('Seeding Input').should('exist')
    })

    // Spencer
    it('', () => {
        
    })

    // Maximo
    it('', () => {
        
    })
})