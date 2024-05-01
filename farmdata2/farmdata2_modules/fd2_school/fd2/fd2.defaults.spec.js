describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2/fd2.html")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text", "Harvest Report")
    })

    it("checks the default start and end dates for the harvest report", () => {
        cy.get("[data-cy=start-date]").should("have.value", "2020-05-05");
        cy.get("[data-cy=end-date]").should("have.value", "2020-05-15");
      });

      it("Check the crop dropdown", () => {
        cy.get("[data-cy=crop-dropdown]").should("exist");
      });
      
      it("displays the correct crops in the dropdown", () => {
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]").then(($select) => {
          cy.wrap($select).children().should("have.length", 111);
          cy.wrap($select).contains("All");
          cy.wrap($select).contains("Crop1");
          cy.wrap($select).contains("Crop5");
          cy.wrap($select).contains("Crop110");
        });
      });
      
})
