describe("Check Tray Seeding Section", () => {
    beforeEach(() => {
      
      cy.login("manager1", "farmdata2");
      cy.visit("farmdata2/farmdata2_modules/fd2_field_kit/seedingInput");
   
      // Select the "Tray" button to display the Tray Seeding section
      cy.get('[data-cy="tray-seedings"]').click();
    });
  
    it("should display the Tray Seeding section fields correctly", () => {
      // Check for visibility of the Tray Seeding section
      cy.get("[data-cy='tray-area-selection']").should('be.visible');
      cy.get("[data-cy='num-cell-input']").should('be.visible');
      cy.get("[data-cy='num-tray-input']").should('be.visible');
      cy.get("[data-cy='num-seed-input']").should('be.visible');
  
     
  
      // Verify that input fields for cells/tray, trays, and seeds are empty and enabled
      cy.get('[data-cy="num-cell-input"] input').should('be.enabled').and('have.value', '');
      cy.get('[data-cy="num-tray-input"] input').should('be.enabled').and('have.value', '');
      cy.get('[data-cy="num-seed-input"] input').should('be.enabled').and('have.value', '');
    });
  });
  
  