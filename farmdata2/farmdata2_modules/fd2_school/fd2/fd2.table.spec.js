
describe('Harvest Report Table', () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2/fd2.html")
        cy.visit('http://fd2_farmdata2/FD2School/FD2');
        cy.get('[data-cy=generate-report-button]').click();
    });
  
    it('should display the harvest report table', () => {
        cy.get("[data-cy=h0]").should("have.text", "Date");
        cy.get("[data-cy=h1]").should("have.text", "Field");
        cy.get("[data-cy=h2]").should("have.text", "Crop");
        cy.get("[data-cy=h3]").should("have.text", "Quantity");
        cy.get("[data-cy=h4]").should("have.text", "Unit");
    });
  });
  