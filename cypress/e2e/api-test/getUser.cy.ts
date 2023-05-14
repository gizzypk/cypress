import { Pagination } from "src/model/api/Pagination";
import { User } from "src/model/api/User";
import Utility from "support/utility";

context('Get Users - GET', () => {

    it('Get Users without page - GET', () => {
        cy.request<Pagination<User>>('GET', Utility.getApiBaseUrl() + '/api/users')
        .then(response => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200, 'Respose code is 200');
            expect(response.body.page).to.eq(1, 'Page is 1');
            expect(response.body.data.length).to.eq(response.body.per_page, 'Data has equal size to per page');
            assert.isArray(response.body.data, 'Users Response is an array')
        });
    })

    it('Get Users with valid page- GET', () => {
        cy.request<Pagination<User>>('GET', Utility.getApiBaseUrl() + '/api/users?page=2')
        .then(response => {
            expect(response.status).to.eq(200, 'Respose code is 200');
            expect(response.body.page).to.eq(2, 'Page is 2');
            expect(response.body.data.length).to.eq(response.body.per_page, 'Data has equal size to per page');
            assert.isArray(response.body.data, 'Users Response is an array');
        });
    })

    it('Get Users with invalid page- GET', () => {
        cy.request<Pagination<User>>('GET', Utility.getApiBaseUrl() + '/api/users?page=3')
        .then(response => {
            expect(response.status).to.eq(200, 'Respose code is 200');
            expect(response.body.page).to.eq(3, 'Page is 3');
            expect(response.body.data.length).to.eq(0, 'No data');
            assert.isArray(response.body.data, 'Users Response is an array');
        });
    })
})