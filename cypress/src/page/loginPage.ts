import DashboardPage from "./dashboardPage";

export default class LoginPage {

  public getEmailTextbox() {
    return cy.get('#UserEmail');
  }

  public getPasswordTextbox() {
    return cy.get('input#UserPassword');
  }

  public getSubmitButton() {
    return cy.get('.submit');
  }

  public doLogin(username: string, password: string) {
    this.getEmailTextbox().clear().type(username);
    this.getPasswordTextbox().clear().type(password);
    this.getSubmitButton().click();
    return new DashboardPage();
  }

}