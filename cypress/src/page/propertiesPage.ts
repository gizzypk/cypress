export default class PropertiesPage {

  public getAddPropertyButton() {
    return cy.get('.left > div > .btn');
  }

  public clickAddProperty() {
    this.getAddPropertyButton().click();
  }
}
