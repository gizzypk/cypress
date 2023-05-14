
import Utility from 'support/utility';
import LoginPage from '../../src/page/loginPage';
import NavigationPanel from '../../src/page/navigation';
import PropertiesPage from '../../src/page/propertiesPage';
import { LoginPageData } from 'src/model/ui/LoginPageData';

describe('Senario 2 : Add a properly with a multiple rentable units', () => {

  before(() => {
    cy.visit(Utility.getWebBaseUrl());
    Utility.getTestData(cy.fixture, 'user').then((data: LoginPageData) => {
      new LoginPage().doLogin(data.credential.username, data.credential.password)
    });
  })

  it('click Properties menu', () => {
    new NavigationPanel().clickPropertiesMenu();
  })

})