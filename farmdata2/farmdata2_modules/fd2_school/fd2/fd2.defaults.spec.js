describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-school/fd2");
    });

    it("Check report details", () => {
        cy.get("[data-cy=farm-name]").should("not.exist")
        cy.get("[data-cy=language]").should("not.exist")
        cy.get("[data-cy=user]").should("not.exist")
        cy.get("[data-cy=generate-report]").click()
        cy.get("[data-cy=farm-name]").should("have.text","Farm:  Sample Farm")
        cy.get("[data-cy=language]").should("have.text","en")
        cy.get("[data-cy=user]").should("have.text","manager1")
    })
});
