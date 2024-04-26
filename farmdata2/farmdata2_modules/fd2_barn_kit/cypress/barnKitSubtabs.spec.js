describe('Test the sub-tabs of the FieldKit tab', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit')
    })

    it('Check the BarnKit tab contains sub-tabs for “Info”, “Seeding Report” and “Transplanting Report”', () => {
        cy.get('.tabs--secondary').contains('Info').should('exist')
        cy.get('.tabs--secondary').contains('Seeding Report').should('exist')
        cy.get('.tabs--secondary').contains('Transplanting Report').should('exist')
    })
    
    it('Check the order of the tabs is “Info”, “Seeding Report” and then “Transplanting Report”', () => {
        cy.get('.tabs--secondary').children().eq(0).contains('Info')
        cy.get('.tabs--secondary').children().eq(1).contains('Seeding Report')
        cy.get('.tabs--secondary').children().eq(2).contains('Transplanting Report')
    })
    
    it('Check there are the correct number of sub-tabs (3 at this time)', () => {
        cy.get(".tabs--secondary").children().should('have.length', 3)
    })
})

