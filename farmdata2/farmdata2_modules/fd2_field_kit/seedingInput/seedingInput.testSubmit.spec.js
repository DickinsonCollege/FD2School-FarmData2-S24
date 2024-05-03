/**The  file is to ensure that the "Submit" button is enabled and disabled as appropriate.*/

describe("Seeding Input: Test Submit", () => {
    beforeEach(() => {
        cy.login("manager1","farmdata2");
        cy.visit("/farm/fd2-field-kit/seedingInput");
        cy.waitForPage();
     });

     //testing
     //submit button enabled
     it("Submit should be disabled", () => {
        cy.get("[data-cy='submit-button']").should('be.disabled');
     });

     //enabled by tray seedings
     context("Button enabled only when all required field have valid values (Tray)", () => {
         beforeEach(() => {
            //selectDate
            cy.get('[data-cy="date-selection"] > [data-cy="date-select"]').click()
            .type('2021-04-10');
            //select crop
            cy.get('[data-cy="crop-selection"] > [data-cy="dropdown-input"]')
            .select('ARUGULA');
            //select tray seeding
            cy.get('[data-cy="tray-seedings"]')
            .click();
            //Choose crop area
            cy.get('[data-cy="tray-area-selection"] > [data-cy="dropdown-input"]')
            .select('CHUAU');
            //Input Cells/Tray
            cy.get('[data-cy="num-cell-input"] > [data-cy="text-input"]')
            .type(5);
            //Input Trays
            cy.get('[data-cy="num-tray-input"] > [data-cy="text-input"]')
            .type(10);
            //Input Seeds
            cy.get('[data-cy="num-seed-input"] > [data-cy="text-input"]')
            .type(15);
            //Input workers 
            cy.get('[data-cy="num-worker-input"] > [data-cy="text-input"]')
            .type(20);
            //Input minutes
            cy.get('[data-cy="minute-input"] > [data-cy="text-input"]')
            .type(35);

            cy.get('[data-cy="comments"]').type("Testing");
         });
        
         it('Test submit button is enabled', () => {
            cy.get('[data-cy="submit-button"]').should('be.enabled');
         });
     });

     //enabled by direct seedings
     context("Button enabled only when all required field have valid values (Direct)", () => {
      beforeEach(() => {
         //reload page
         cy.reload();
         //selectDate
         cy.get('[data-cy="date-selection"] > [data-cy="date-select"]').click()
         .type('2021-04-10');
         //select crop
         cy.get('[data-cy="crop-selection"] > [data-cy="dropdown-input"]')
         .select('ARUGULA');

         //select area
         cy.get('[data-cy="direct-seedings"]')
         .click();
         //Choose type of area
         cy.get('[data-cy="direct-area-selection"] > [data-cy="dropdown-input"]')
         .select('CHUAU-1')
          //Input num/rows
          cy.get('[data-cy="num-rowbed-input"] > [data-cy="text-input"]')
          .type(5);
         //input feet area
         cy.get('[data-cy="num-feet-input"] > [data-cy="text-input"]')
         .type(124);
        
         //Input workers 
         cy.get('[data-cy="num-worker-input"] > [data-cy="text-input"]')
         .type(20);
         //Input minutes
         cy.get('[data-cy="minute-input"] > [data-cy="text-input"]')
         .type(35);

         cy.get('[data-cy="comments"]').type("Testing");
      });
     
      it('Test submit button is enabled', () => {
         cy.get('[data-cy="submit-button"]').should('be.enabled');
      });
  });
});
