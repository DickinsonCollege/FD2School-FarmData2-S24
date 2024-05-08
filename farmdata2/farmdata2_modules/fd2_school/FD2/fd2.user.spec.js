describe("Test the harvest report user output values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/FD2")
        cy.get("[data-cy=header-check]").should("not.exist")
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=header-check]").should("be.visible");
        cy.get("[data-cy=farm-name]").should("have.text", "Farm: Sample Farm");
        cy.get("[data-cy=username]").should("contain.text", "manager1")
        cy.get("[data-cy=language]").should("have.text", "English");

    })
    it("Check the generate report button", () => {

    })
})