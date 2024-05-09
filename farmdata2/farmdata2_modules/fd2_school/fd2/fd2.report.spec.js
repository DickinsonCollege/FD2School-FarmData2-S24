describe("Test the harvest report functionality", () => { 

    beforeEach(() => { 
        cy.login("manager1", "farmdata2") 
        cy.visit("/farm/fd2-school/e2e") 
    }) 

    it("Check Generate Report Button", () => { 
        cy.get("[data-cy=report-title]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-title]").should("be.visible")
    }) 

    it("Check report details", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm]").should("have.text","Farm:")
        cy.get("[data-cy=lang]").should("have.text","Language:")
        cy.get("[data-cy=user]").should("have.text","User:")
    })
}) 