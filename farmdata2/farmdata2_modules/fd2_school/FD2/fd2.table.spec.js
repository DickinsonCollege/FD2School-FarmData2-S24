describe("Test the Table header", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/FD2")
    })
      
    it("Check the table header", () => {
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=h0]").should("have.text","Index")
        cy.get("[data-cy=h1]").should("have.text","Date")
        cy.get("[data-cy=h2]").should("have.text","Area")
        cy.get("[data-cy=h3]").should("have.text","Crop")
        cy.get("[data-cy=h4]").should("have.text","Yield")
        cy.get("[data-cy=h5]").should("have.text","Units")
    })
    it("Check the number of columns", () => {
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=table-headers]").children().should("have.length", 6);
    })
    it("Check the table after filtering", () =>{
        cy.get("[data-cy=crop-dropdown]> [data-cy=dropdown-input]").select("ARUGULA")
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=table-body]").children().should("have.length", "4")
        cy.get("[data-cy=r0-Crop]").should("have.text", "ARUGULA")
        cy.get("[data-cy=r1-Crop]").should("have.text", "ARUGULA")
        cy.get("[data-cy=r2-Crop]").should("have.text", "ARUGULA")
        cy.get("[data-cy=r3-Crop]").should("have.text", "ARUGULA")
    })
})