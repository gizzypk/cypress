import { ErrorResponse } from "src/model/api/ErrorResponse";
import { LoginResponse } from "src/model/api/LoginResponse";
import Utility from "support/utility";

context('Login - POST', () => {

    it('Login with correct credentials - POST', () => {
        cy.request<LoginResponse>('POST', Utility.getApiBaseUrl() + '/api/login', {
            'email': 'eve.holt@reqres.in',
            'password': 'cityslicka'
        }).then(response => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200, 'Respose code is 200');
            assert.isString(response.body.token, 'Token is string')
        });
    })

    it('Login with no password - POST', () => {
        cy.request<ErrorResponse>({
            method: 'POST', url: Utility.getApiBaseUrl() + '/api/login', failOnStatusCode: false, body: {
                'email': 'eve.holt@reqres.in'
            }
        }).then(response => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(400, 'Respose code is 400');
            expect(response.body.error).to.eq('Missing password', 'Error message as Missing password')
            assert.isString(response.body.error, 'Error Response is an string');
        });
    })

    it('Login with email - POST', () => {
        cy.request<ErrorResponse>({
            method: 'POST', url: Utility.getApiBaseUrl() + '/api/login', failOnStatusCode: false, body: {
                'password': 'cityslicka'
            }
        }).then(response => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(400, 'Respose code is 400');
            expect(response.body.error).to.eq('Missing email or username', 'Error message as Missing email or username')
            assert.isString(response.body.error, 'Error Response is an string');
        });
    })
})