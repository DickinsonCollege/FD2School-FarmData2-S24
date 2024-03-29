describe('Test the user interaction with harvest report', () => {
  beforeEach(() => {
    cv.login("manager1","farmdata2")
    cv.visit("/farm/fd2-school/e2e")
  })
  it("Check the generation report operation", () => {
    cy.get("data-cy=report-title")
     .should("not.exist")
    cy.get("[data-cy=generate-btn").click()
    cy.get("[data-cy=report-title]")
     .should("be.visible") 
    })

  it("Check farm name", () => {
    cy.get("[data-cy=generate-btn").click()
    cy.get('[data-cy=farm-name')
     .should("have.text", "Sample Farm")
  })
})