describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text","Harvest Report")
    })

    it("Check default start and end dates", () => {
        cy.get("[data-cy=start-date]")
            .should("have.value", "2020-05-05")
        cy.get("[data-cy=end-date]")
            .should("have.value", "2020-05-15")
    })

    it("Check crop selection values", () => {
        cy.get("[data-cy=crop-selection]").children().eq(0)
            .should("have.value", "ARUGULA")
        cy.get("[data-cy=crop-selection]").children().eq(4)
            .should("have.value", "BEAN-FAVA")
        cy.get("[data-cy=crop-selection]").children().eq(110)
            .should("have.value", "ZUCCHINI")
        cy.get("[data-cy=crop-selection]").children()
            .should("have.length", "111")
    })
})
