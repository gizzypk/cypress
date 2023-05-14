export default class Utility {
    
    public static getWebBaseUrl() {
        let env = Cypress.env('ENV');

        switch(env){
            case 'production': {
                return "https://staging.arthuronline.co.uk/login?X-MODE=QA-eW91LXdpbi1ub3RoaW5nCg";
            }
            case 'staging': {
                return "https://staging.arthuronline.co.uk/login?X-MODE=QA-eW91LXdpbi1ub3RoaW5nCg";
            }
            default: {
                break;
            }
        }
    }

    public static getApiBaseUrl() {
        let env = Cypress.env('ENV');

        switch(env){
            case 'production': {
                return "https://reqres.in";
            }
            case 'staging': {
                return "https://reqres.in";
            }
            default: {
                break;
            }
        }
    }

    public static getTestData(fixture, name) {
        let env = Cypress.env('ENV');
        return fixture(env + '-' + name).then((data) => {
            console.log(data)
            return data;
        })
    }
}