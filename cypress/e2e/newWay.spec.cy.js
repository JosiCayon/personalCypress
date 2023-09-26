
/// <reference types = "cypress"/>
import { homePage } from "../../pageObjects/homePage";

describe('test web page Oysho', {testIsolation: false}, () =>{

    it('Access to web page', () => {
    homePage.visitedPage()
    cy.url().should('eq', 'https://www.oysho.com')
})

    it('checked access is granted', ()=>{
    homePage.accessGranted()
})

)};
