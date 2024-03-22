describe("hi", () => {
    beforeEach(() => {
        cy.login("manager1","farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Click the generate report button", () => {
        cy.get("[data-cy=report-header").should("not.exist")
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=report-header]").should("be.visible")
    })

})
