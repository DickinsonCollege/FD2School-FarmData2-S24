describe('Check visibility of the FieldKit, BarnKit, FD2 Config tabs for manager', () => {
  
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
    })
    
    it('Check visibility of the FieldKit', () => {
      cy.visit('/farm')
      cy.get('.nav-tabs').contains('FieldKit').should('exist')
    })
  
    it('Check visibility of the BarnKit', () => {
        cy.visit('/farm')
        cy.get('.nav-tabs').contains('BarnKit').should('exist')
    })

    it('Check visibility of the FD2 Config', () => {
        cy.visit('/farm')
        cy.get('.nav-tabs').contains('FD2 Config').should('exist')
    })
})

describe('Check visibility of the FieldKit, BarnKit, FD2 Config tabs for worker', () => {
  
    beforeEach(() => {
        cy.login('worker1', 'farmdata2')
    })
    
    it('Check visibility of the FieldKit', () => {
      cy.visit('/farm')
      cy.get('.nav-tabs').contains('FieldKit').should('exist')
    })
  
    it('Check visibility of the BarnKit', () => {
        cy.visit('/farm')
        cy.get('.nav-tabs').contains('BarnKit').should('exist')
    })

    it('Check visibility of the FD2 Config', () => {
        cy.visit('/farm')
        cy.get('.nav-tabs').contains('FD2 Config').should('not.exist')
    })
})

describe('Check visibility of the FieldKit, BarnKit, FD2 Config tabs for guest', () => {
  
    beforeEach(() => {
        cy.login('guest', 'farmdata2')
    })
    
    it('Check visibility of the FieldKit', () => {
      cy.visit('/farm')
      cy.get('.nav-tabs').contains('FieldKit').should('not.exist')
    })
  
    it('Check visibility of the BarnKit', () => {
        cy.visit('/farm')
        cy.get('.nav-tabs').contains('BarnKit').should('not.exist')
    })

    it('Check visibility of the FD2 Config', () => {
        cy.visit('/farm')
        cy.get('.nav-tabs').contains('FD2 Config').should('not.exist')
    })
})
  