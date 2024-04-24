describe("Testing cancel and submit button for table element in seeding report", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("farm/fd2-barn-kit/seedingReport")
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
    })
    
    it("Make an edit, submit, and check that database was changed", () => { 
        cy.get('[data-cy=r0-edit-button]').click()
        cy.get('[data-cy=td-r0c13]').type('edit:)')
        //can't click save button for some reason
        cy.get('[data-cy=r0-save-button]').click()
        //still considering how to check values, because confusion in the issue wording
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=td-r0c13]').should('have.text', '<p>edit:)</p>')
    })
    it("Make an edit, cancel, and check that tha database didn't change", () => {
        cy.get('[data-cy=r0-edit-button]').click()
        cy.get('[data-cy=td-r0c13]').type('rar muahaha')
        cy.get('[data-cy=r0-cancel-button]').click()
        //still considering how to check values, because confusion in the issue wording
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=td-r0c13]').should('have.text', '<p>edit:)</p>')
    })
    it("Undo change made in the first it", () => {
        cy.get('[data-cy=r0-edit-button]').click()
        cy.get('[data-cy=td-r0c13]').type('')
        cy.get('[data-cy=r0-save-button]').click()
        //still considering how to check values, because confusion in the issue wording
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=td-r0c13]').should('have.text', '')
    })
} )