describe('Tray Seeding Summary Table Validation', () => {
    beforeEach(() => {
      cy.login('manager1', 'farmdata2');
      cy.visit('/farm/fd2-barn-kit/seedingReport');
      cy.waitForPage();
      
    });
  
    it('exists and is visible when "All" or "Tray Seedings" is selected', () => {
      cy.get("[data-cy=start-date-select]").type("2019-01-01");
      cy.get("[data-cy=end-date-select]").type("2019-03-01");
      cy.get("[data-cy=generate-rpt-btn]").click();
      ['All', 'Tray Seedings'].forEach(type => {
        cy.get('[data-cy="seeding-type-dropdown"] > [data-cy="dropdown-input"]').select(type);
        cy.get('[data-cy="tray-summary"]').should('be.visible');
      });
    });
  
    it('does not exist or is not visible when "Direct Seedings" is selected', () => {
      cy.get("[data-cy=start-date-select]").type("2019-01-01");
      cy.get("[data-cy=end-date-select]").type("2019-03-01");
      cy.get("[data-cy=generate-rpt-btn]").click();
      cy.get('[data-cy="seeding-type-dropdown"] > [data-cy="dropdown-input"]').select('Direct Seedings');
      cy.get('[data-cy="tray-summary"]').should('not.exist');
    });
  
    it('the No Logs message appears with a table with no logs', () => {
      cy.get("[data-cy=start-date-select]").type("2021-01-01");
       
      cy.get('[data-cy=end-date-select]')
          .type('2021-03-01')
      cy.get('[data-cy=generate-rpt-btn]').click()
      cy.get('[data-cy=no-logs-message]').should('be.visible')
  
      
    });
  });