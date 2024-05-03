/**The  file is to ensure that the "Submit" button is enabled and disabled as appropriate.*/


describe("Seeding Input: Test Submit", () => {

    beforeEach(() => {
        cy.login("manager1","farmdata2");
        cy.visit("/farm/fd2-field-kit/seedingInput");
        cy.waitForPage();

        //selectDate
        cy.get('[data-cy="date-selection"] > [data-cy="date-select"]').click()
        .type('2024-04-24');
        //select crop
        cy.get('[data-cy="crop-selection"] > [data-cy="dropdown-input"]')
        .select('ARUGULA');

        //select area
        cy.get('[data-cy="direct-seedings"]')
        .click();
        //Choose type of area
        cy.get('[data-cy="direct-area-selection"] > [data-cy="dropdown-input"]')
        .select('CHUAU-1')
         //Input num/rows
         cy.get('[data-cy="num-rowbed-input"] > [data-cy="text-input"]')
         .type(5);
        //input feet area
        cy.get('[data-cy="num-feet-input"] > [data-cy="text-input"]')
        .type(124);
       
        //Input workers 
        cy.get('[data-cy="num-worker-input"] > [data-cy="text-input"]')
        .type(20);
        //Input minutes
        cy.get('[data-cy="minute-input"] > [data-cy="text-input"]')
        .type(35);

        cy.get('[data-cy="comments"]').type("Testing");
        cy.get('[data-cy="submit-button"]').click();
     });

    it('Testing comfirm', () => {
        cy.get('[data-cy="confirm-button"]').should('be.visible');
    });

    it('Cancel comfirm', () => {
        cy.get('[data-cy="cancel-button"]').should('be.visible');
     });

    context("Direct seeding is being created", () => {
        beforeEach(() => {
            cy.get('[data-cy="confirm-button"]').click();
        })
        
        it('Testing the log has been submitted', () => {
            cy.request('GET','http://fd2_farmdata2/log.json?type=farm_seeding&timestamp[ge]=1713931200&timestamp[le]=1713931200').then((response) => {
                expect(response.body.list[0].movement.data.name).to.equal("{\"crop_tid\":\"102\"}"); //get the Crop
                expect(response.body.list[0].movement.area[0].name).to.eq("CHUAU-1"); //area name
                expect(response.body.list[0].quantity[0].value).to.eq('124');  //row feed
                expect(response.data.list[0].quantity[1].value).to.equal("5"); //rows/bed check
                expect(response.data.list[0].quantity[2].value).to.equal("20"); // workers
                expect(response.data.list[0].quantity[3].value).to.equal("0.58"); // hours
                expect(response.data.list[0].timestamp).to.equal("1713931200"); // teimstanp
                expect(response.data.list[0].notes.value).to.equal("Testing"); // comments  
                expect(response.data.list[0].name).to.equal("2021-04-10 ARUGULA CHUAU-1"); //name of the transaction
            });
        });
    });
});
