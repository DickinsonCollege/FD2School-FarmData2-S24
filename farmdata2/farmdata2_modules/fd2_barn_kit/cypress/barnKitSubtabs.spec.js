describe('Test the sub-tabs of the FieldKit tab', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit')
    })

    it('Check Info, Seeding Report, and Transplanting Report sub-tabs', () => {
        cy.get('.tabs--secondary').contains('Info').should('exist')
        cy.get('.tabs--secondary').contains('Seeding Report').should('exist')
        cy.get('.tabs--secondary').contains('Transplanting Report').should('exist')
    })
    
    it('Check that the order of the tabs: Info, Seeding Report, and Transplanting Report', () => {
        cy.get('.tabs--secondary').children().eq(0).contains('Info')
        cy.get('.tabs--secondary').children().eq(1).contains('Seeding Report')
        cy.get('.tabs--secondary').children().eq(2).contains('Transplanting Report')
    })
    
    it('Check that there are only 3 sub-tabs', () => {
        cy.get(".tabs--secondary").children().should('have.length', 3)
    })
})

