export class HomePage {

    visitedPage (){
    return  cy.visit(url)
        }

    accessGranted (){
            cy.request(url).its(statusCode).should('eql', 200)
        }
}

export const homePage = new HomePage();