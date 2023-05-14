
import LoginPage from '../../src/page/loginPage';
import DashboardPage from '../../src/page/dashboardPage';
import Utility from "../../support/utility"
import { Credentials, LoginPageData } from 'src/model/ui/LoginPageData';

const login = new LoginPage();

describe('Senario 1 : Login to system', () => {

  before(() => {
    cy.visit(Utility.getWebBaseUrl());
  })

  it('display login page ', () => {
    cy.title().should('include', 'Login');
    Utility.getTestData(cy.fixture, 'user').then((data: LoginPageData) => {
      login.doLogin(data.credential.username, data.credential.password)
      .verifyWelcomeMessageDisplay();
    });
  })

})