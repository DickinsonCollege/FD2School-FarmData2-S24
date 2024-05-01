describe("Generate Report Button Tests", () => {
    beforeEach(() => {
      cy.login("manager1", "farmdata2");
      cy.visit("/farm/fd2-school/fd2/fd2.html"); 
    });
  
    it("clicks generate report button", () => {
        cy.get("[data-cy=report-header]").should("not.exist");

        cy.get("[data-cy=generate-report-button]").click();

        it("Check that the name of the farm is correctly set", () => {
            cy.get("[data-cy=generate-report-button]").click();
            cy.get("[data-cy=farm-name]").should("contain.text", "Dickinson Farm");
            cy.get("[data-cy=user-name]").should("contain.text", "manager1");
            cy.get("[data-cy=language]").should("have.text", "english");
        });
        
    });
  });
  