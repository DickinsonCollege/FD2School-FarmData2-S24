describe('Test the harvest report default values', () => {
  beforeEach(() => {
    cy.login('manager1', 'farmdata2')
    cy.visit('/farm/fd2-school/fd2')
  })
it('Check the page header', ()=> {
  cy.get("[data-cy=page-header]").should("have.text", "Harvest Report")
})
it('Check the default start and end dates', ()=> {
  cy.get("[data-cy=start-date]").should("have.value", "2020-05-05")
  cy.get("[data-cy=end-date]").should("have.value", "2020-05-15")
})
it('Check the crops in the crop dropdown', ()=> {
  cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option0]").should("have.text", "All")
  cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option1]").should("have.text", "ARUGULA")
  cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option5]").should("have.text", "BEAN-FAVA")
  cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option111]").should("have.text", "ZUCCHINI")
  cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]").children().should("have.length", "112")
})
it('Check the areas in the area dropdown', ()=> {
  cy.get("[data-cy=area-dropdown]>[data-cy=dropdown-input]>[data-cy=option0]").should("have.text", "All")
  cy.get("[data-cy=area-dropdown]>[data-cy=dropdown-input]>[data-cy=option1]").should("have.text", "A")
  cy.get("[data-cy=area-dropdown]>[data-cy=dropdown-input]>[data-cy=option5]").should("have.text", "ALF-3")
  cy.get("[data-cy=area-dropdown]>[data-cy=dropdown-input]>[data-cy=option70]").should("have.text", "Z")
  cy.get("[data-cy=area-dropdown]>[data-cy=dropdown-input]").children().should("have.length", "71")
})

})