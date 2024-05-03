describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-school/e2e");
    });

    it("Check crop list", () => {
        cy.get("[data-cy=crop-list] > [data-cy=dropdown-input] > [data-cy=option0]").should("have.text", "All")
        cy.get("[data-cy=crop-list] > [data-cy=dropdown-input] > [data-cy=option1]").should("have.text", "ARUGULA")
        cy.get("[data-cy=crop-list] > [data-cy=dropdown-input] > [data-cy=option5]").should("have.text", "BEAN-FAVA")
        cy.get("[data-cy=crop-list] > [data-cy=dropdown-input]").children().should("have.length", "112")
    })
});
