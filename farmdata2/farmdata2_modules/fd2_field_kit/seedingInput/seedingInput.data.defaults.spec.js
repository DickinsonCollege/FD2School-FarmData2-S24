describe('Tests the default contents of the Data section of the Seeding Input Form', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        
        // Cypress clears the local storage between each test.  
        // So we need to save it at the end of each test (see afterEach)
        // and then restore beore each test (here). 
        cy.restoreLocalStorage() 
        cy.visit('/farm/fd2-field-kit/seedingInput')
    })

    afterEach(() => {
        // Save the local storage at the end of each test so 
        // that it can be restored at the start of the next 
        cy.saveLocalStorage()
    })
    
    //Gabe
    it('', () => {

    })

    //Spencer
    it('', () => {

    })

    //Maximo
    it('Tests the crop dropdown so that it does not have a selected value and the correct crop list', () => {
        cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input]").should("have.text", "")
        cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option0]").should("have.text", "ARUGULA")
        cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option8]").should("have.text", "BROCCOLI")
        cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option32]").should("have.text", "GARLIC-SCAPES")
        cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option110]").should("have.text", "ZUCCHINI")
        cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input]").children().should("have.length", 111)
    })
})