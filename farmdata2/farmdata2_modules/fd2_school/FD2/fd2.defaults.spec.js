describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/FD2")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]").should("have.text","Harvest Report")
    })
    it("Check the default start and end date", () => {
        cy.get("[data-cy=start-date]").should("have.value","2020-05-05")
        cy.get("[data-cy=end-date]").should("have.value","2020-05-15")
    })
    it("Check the crop dropdown menu", () => {
        cy.get("[data-cy=crop-dropdown]> [data-cy=dropdown-input]").children().eq(0).should("contain.text", "All");
        cy.get("[data-cy=crop-dropdown]> [data-cy=dropdown-input]").children().eq(4).should("contain.text", "BEAN-DRY");
        cy.get("[data-cy=crop-dropdown]> [data-cy=dropdown-input]").children().last().should("contain.text", "ZUCCHINI");
        cy.get("[data-cy=crop-dropdown]> [data-cy=dropdown-input]").children().should("have.length", 112);

    })
})