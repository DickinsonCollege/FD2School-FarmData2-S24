describe("Check Summary Table exists", () => {

  beforeEach(() => {

    cy.login("manager1", "farmdata2");
    cy.visit('/farm/fd2-barn-kit/seedingReport');
    cy.waitForPage()

  });

 

  it("Check if the summary table exists and visible for tray seeding", () => {

    // Enter start and end dates


    cy.get('[data-cy=start-date-select]').type('2019-01-01');
    cy.get('[data-cy=end-date-select]').type('2019-12-31');
    

    // Click the 'Generate Report' button
    cy.get('[data-cy="generate-rpt-btn"]').click();

        // Open the custom dropdown
    cy.get('[data-cy="seeding-type-dropdown"]').click();

        // Select "Tray Seeding" from the dropdown options
    
    cy.window().then(win => {
          const vueApp = win.seedingReport; // Access the Vue instance
          vueApp.seedingChange('Tray Seedings'); // Call the seedingChange method with 'Tray Seedings'
    });
    // Check if the summary table exists for Tray Seedings

    cy.get('[data-cy=tray-summary]').should('exist'); 
    cy.get('[data-cy=tray-summary]').should('be.visible');

    // Trigger the seedingChange method on the Vue instance with "Direct Seedings" as argument
        cy.window().then(win => {
          const vueApp = win.seedingReport; // Access the Vue instance
          vueApp.seedingChange('Direct Seedings'); // Call the seedingChange method with 'Direct Seedings'
        });
    
    // Verify that the tray summary table is not visible
    cy.get('[data-cy="tray-summary"]').should('not.exist');


  });

});