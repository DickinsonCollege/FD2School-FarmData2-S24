describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/FD2")
        cy.get("[data-cy=page-header]").should("have.text","Harvest Report")
        cy.get("[data-cy=start-date]").should("have.value","2020-05-05")
        cy.get("[data-cy=end-date]").should("have.value","2020-05-15")
        cy.get("[data-cy=crop-dropdown]").children().eq(0).should("contain.text", "ARUGULA");
        cy.get("[data-cy=crop-dropdown]").children().eq(4).should("contain.text", "BEAN-FAVA");
        cy.get("[data-cy=crop-dropdown]").children().last().should("contain.text", "ZUCCHINI");
        cy.get("[data-cy=crop-dropdown]").children().should("have.length", 111);
    })
      
    it("Check the page header", () => {
    
    })
    it("Check the default start and end date", () => {

    })
    it("Check the crop dropdown menu", () => {

    })
})