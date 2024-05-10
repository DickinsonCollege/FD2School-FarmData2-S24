describe("Testing Seeding Type Filter", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("farm/fd2-barn-kit/seedingReport")
        cy.waitForPage()
    })
    
    it("Check when 'All' is selected table only shows direct seedings and tray seedings", () => { //chloe
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-15')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get("[data-cy=td-r2c3").should("have.text","Direct     ")
        cy.get("[data-cy=td-r11c3").should("have.text","Tray     ")
    })

    it("Check when 'Direct' is selected table only shows direct seedings", () => { //ryan
        cy.get("[data-cy=start-date-select]").type("2020-05-05")
        cy.get("[data-cy=end-date-select]").type("2020-05-06")
        cy.get("[data-cy=generate-rpt-btn]").click()
        cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select("Direct Seedings")

        cy.get("[data-cy=table-body]").children().should("have.length","11")
        cy.get("[data-cy=td-r0c3]").should("have.text", "Direct     ")
        cy.get("[data-cy=td-r5c3]").should("have.text", "Direct     ")
        cy.get("[data-cy=td-r10c3]").should("have.text", "Direct     ")
    })

    it("Check when 'Tray' is selected table only shows tray seedings", () => { //ryan
        cy.get("[data-cy=start-date-select]").type("2020-05-05")
        cy.get("[data-cy=end-date-select]").type("2020-05-06")
        cy.get("[data-cy=generate-rpt-btn]").click()
        cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select("Tray Seedings")

        cy.get("[data-cy=table-body]").children().should("have.length","31")
        cy.get("[data-cy=td-r0c3]").should("have.text", "Tray     ")
        cy.get("[data-cy=td-r7c3]").should("have.text", "Tray     ")
        cy.get("[data-cy=td-r22c3]").should("have.text", "Tray     ")
        cy.get("[data-cy=td-r30c3]").should("have.text", "Tray     ")
    })

    it("Checks that only the seeding types available in date range are shown in dropdown", () => { //Megan
        cy.get("[data-cy=start-date-select]").type("2020-05-05") //this date range has both tray and direct seedings
        cy.get("[data-cy=end-date-select]").type("2020-05-06")
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=seeding-type-dropdown]>[data-cy=dropdown-input]>[data-cy=option0]', {timeout: 40000}).should('have.text', "All")
        cy.get('[data-cy=seeding-type-dropdown]>[data-cy=dropdown-input]>[data-cy=option1]', {timeout: 40000}).should('have.text', "Direct Seedings")
        cy.get('[data-cy=seeding-type-dropdown]>[data-cy=dropdown-input]>[data-cy=option2]', {timeout: 40000}).should('have.text', "Tray Seedings")



        cy.get("[data-cy=end-date-select]").type("2020-05-05") //this date range has direct seedings
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=seeding-type-dropdown]>[data-cy=dropdown-input]>[data-cy=option1]', {timeout: 40000}).should('have.text', "Direct Seedings")

        cy.get("[data-cy=end-date-select]").type("2020-05-06")
        cy.get("[data-cy=start-date-select]").type("2020-05-06") //this date range has tray seedings
        
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=seeding-type-dropdown]>[data-cy=dropdown-input]>[data-cy=option1]', {timeout: 40000}).should('have.text', "Tray Seedings")
       
    })
} )