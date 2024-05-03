var FarmOSAPI = require('../../resources/FarmOSAPI.js')
var getRecord = FarmOSAPI.getRecord

describe("Testing cancel and submit button for table element in seeding report", () => {
    let endpoint = "/log.json?id=229"
    //let allpages = null

    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("farm/fd2-barn-kit/seedingReport")
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.waitForPage()
    })
    
    it("Make an edit, submit, and check that database was changed", () => { 
        cy.get('[data-cy=r0-edit-button]').click({force: true})
        cy.get('[data-cy=td-r0c13]').type('edit:)')
        cy.get('[data-cy=r0-save-button]').click({force: true})

        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=td-r0c13]').should('contain.text', 'edit:)')

        cy.wrap(getRecord(endpoint)).as('fetch')
        cy.get('@fetch').then((response) => {
            expect(response.status).to.equal(200)  // 200 - OK/success
            expect(response.data.list[0].notes.value).to.have.string('edit:)')
        }) //.data.list[0].notes.value
    })

    it("Make an edit, cancel, and check that tha database didn't change", () => {
        cy.get('[data-cy=r0-edit-button]').click({force: true})
        cy.get('[data-cy=td-r0c13]').type('rar muahaha')
        cy.get('[data-cy=r0-cancel-button]').click({force: true})
        //
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=td-r0c13]').should('contain.text', 'edit:)')
    })
    it("Undo change made in the first it", () => {
        cy.get('[data-cy=r0-edit-button]').click({force: true})
        cy.get('[data-cy=td-r0c13]').type('{selectall}{del}')
        cy.get('[data-cy=r0-save-button]').click({force: true})
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=td-r0c13]').should('have.text', '     ')
    })
} )