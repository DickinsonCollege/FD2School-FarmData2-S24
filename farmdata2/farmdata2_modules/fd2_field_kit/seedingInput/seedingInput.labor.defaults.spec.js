describe("Testing default inputs for Labor chart", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit/seedingInput")
    })
    
    it("Checks header is Labor", () => { //megan
        cy.get("[data-cy=labor-header]").should("have.text", "Labor")
    })

    it("checks fields are empty", () => { //ryan
        cy.get("[data-cy=minute-input]").should("has.text", "")
        cy.get("[data-cy=hour-input]").should("has.text", "")
        cy.get("[data-cy='num-worker-input']").should("has.text", "")
    })

    it("Checks dropdown values are default", () => { //chloe
        //crop dropdown
        cy.get("[data-cy=crop-selection]").children().eq(0).should("have.text", "Crop:*") 
        // time unit dropdown
        cy.get("[data-cy=time-unit] > [data-cy=dropdown-input]").children().eq(0).should("have.text", "minutes")
    })

    it("Checks default time unit", () => { //megan
        
    })
} )