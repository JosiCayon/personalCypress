
/// <reference types = "cypress"/>


describe('test vitro', {testIsolation: false}, () =>{
it('Login with credentials to platform', () => {
let LABID = 3994;
let labId = LABID.toString()

    cy.visit('https://v3.interqc.com/')
    cy.get('#txtId').type(labId);
    cy.get('#username').type('test') // type(Cypress.env().USER.QA.user_name)// I use to work with this kind of expression
    cy.get('#password').type('interqc')//type(Cypress.env().USER.QA.password)
    cy.intercept('POST', '/UI/myDashboard.aspx/GetWidgetSummaryCount').as('dashboard')
    cy.contains('button', 'Iniciar sesión').click()
    cy.wait('@dashboard');
})

it ('To control warning message and select raw materia', ()=>{
    /*cy.get('#ppError_PW-1 > .dxpc-mainDiv').should('be.visible') 
    cy.get('#ppError_HCB-1 > .dxWeb_pcCloseButton').click()*/ 

    cy.get('#HeaderControl_HeaderMenu1_mainMenu_DXI1_P').scrollIntoView().click()
    cy.contains('Manual Results input ').click()
    cy.intercept('/UI/dataInsert.aspx').as('data')
    cy.contains('Raw').click()
    cy.wait('@data', {timeout:5000})
   })

it('Tree selections', ()=>{
    // Lab./Dep./Inst.
    cy.get('#FilterControl_cbpLab_cbxLab_B-1Img').click()
    cy.get('[style=""] > :nth-child(1) > :nth-child(1) > .dxtv-btn').click()
    cy.get(':nth-child(1) > :nth-child(1) > ul[style=""] > :nth-child(1) > :nth-child(1) > .dxtv-btn').click()
    cy.get('#FilterControl_cbpLab_cbxLab_DDD_tvLab_0_N0_0_1 > .dxtv-ndTxt').click()
    //Control/Level/QC Lot
    cy.get('#FilterControl_cbpControl_cbxMasterControl_B-1Img').click()
    cy.get(':nth-child(2) > :nth-child(1) > .dxtv-btn').click()
    cy.get(':nth-child(2) > ul[style=""] > :nth-child(1) > :nth-child(1) > .dxtv-btn').click()
    cy.get('#FilterControl_cbpControl_cbxMasterControl_DDD_tvControl_0_N1_0_0 > .dxtv-ndTxt').click()
    //Analyte
    cy.get('#FilterControl_cbpAssay_cbxAssay_B-1Img').click()
    cy.get('#FilterControl_cbpAssay_cbxAssay_DDD_tvAssay_0_N4 > .dxtv-ndTxt').click()
})

it('After Finishing and click apply button and finish the test', ()=>{
        cy.get('#BodyContentPlaceholder_btnProcess_CD').click()
        cy.get('#HeaderControl_HeaderMenu1_mainMenu_DXI0_T > .dx-vam').click()
        cy.get('#HeaderControl_hlQuit').click()
    })




   


})

