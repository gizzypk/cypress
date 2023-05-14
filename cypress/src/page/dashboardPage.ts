export default class DashboardPage {

  public getWelcomeMessageText() {
    return cy.get('.landing h1');
  }

  public verifyWelcomeMessageDisplay() {
    this.getWelcomeMessageText().should('have.text', "Welcome to Arthur!");
  }
  
}