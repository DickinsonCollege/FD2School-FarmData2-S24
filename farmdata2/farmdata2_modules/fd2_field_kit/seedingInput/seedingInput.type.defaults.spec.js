/** 
 * This file tests the default contents of the 
 * "Seeding Type" (Tray/Direct) section of the Seeding
 * Input Form in the FieldKit.
 */

describe("Test Seeding Input Default Type", () => {
    beforeEach(() => {
        cy.login("manager1","farmdata2");
        cy.visit("/farm/fd2-field-kit/seedingInput");

    });

    /** Check elements for "Tray" is enabled. 
     * binding with submitInProgress Value
    */
    it("1) Tray seeding is enabled", () => {
        cy.get("[data-cy='tray-seedings']").should('be.enabled')
    })
    /** Check elements for "Direct" is enabled. 
     * binding with submitInProgress Value
    */
    it("2) Direct seeding is enabled", () => {
        cy.get("[data-cy='direct-seedings']").should('be.enabled')
    })

    /** Check neither Tray nor Direct is selected */
    it("3) Tray and Direct elements not selected", () => {
        cy.get("[data-cy='tray-seedings']").should('not.be.checked')
        cy.get("[data-cy='direct-seedings']").should('not.be.checked')
    })

    /** Check neither Tray nor Direct is selected */
    it("4) message visible when tray and direct not selected", () => {
        cy.get("[data-cy='tray-seedings']").should('not.be.checked')
        cy.get("[data-cy='direct-seedings']").should('not.be.checked')
        cy.contains("Please Select Tray Seeding or Direct Seeding")
    })

      /** Check the form elements for either the "Tray" and 
    "Direct" seedings are not visible or do not exist. */

    it("5) Check form elements of Tray is not visible or not exist", () => { 
        cy.get("[data-cy=tray-area-selection]").should("not.be.visible")
        cy.get("[data-cy=num-cell-input]").should("not.be.visible")
        cy.get("[data-cy=num-tray-input]").should("not.be.visible")
        cy.get("[data-cy=num-seed-input]").should("not.be.visible")
    }) 
    it("5) Check form elements of Direct is not visible or not exist", () => { 
        cy.get("[data-cy=direct-area-selection]").should("not.be.visible")
        cy.get("[data-cy=num-rowbed-input]").should("not.be.visible")
        cy.get("[data-cy=unit-feet]").should("not.be.visible")
        cy.get("[data-cy=num-feet-input]").should("not.be.visible")
    }) 

});