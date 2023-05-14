import PropertiesPage from "./propertiesPage";

export default class NavigationPanel {

  public getPropertiesMenu() {
    return cy.get('li.alias-properties.dropdown');
  }

  public clickPropertiesMenu() {
    this.getPropertiesMenu().click();
    return new PropertiesPage();
  }
}

