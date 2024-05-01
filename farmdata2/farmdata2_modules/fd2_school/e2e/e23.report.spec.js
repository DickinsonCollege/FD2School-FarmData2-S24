describe("Generate Report Button Tests", () => {
    beforeEach(() => {
      cy.login("manager1", "farmdata2");
      cy.visit("/farm/fd2-school/e2e"); 
    });
  
    it("test", () => {
        cy.get("[data-cy=generate-report-button]").click();
    });
  });
  