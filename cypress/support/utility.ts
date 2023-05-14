export default class Utility {
    
    public static getWebBaseUrl() {
        let envi = Cypress.env('ENV');
        if (envi == 'production')
            return "https://staging.arthuronline.co.uk/login?X-MODE=QA-eW91LXdpbi1ub3RoaW5nCg";
        else if (envi == 'staging')
            return "https://staging.arthuronline.co.uk/login?X-MODE=QA-eW91LXdpbi1ub3RoaW5nCg";
    }

    public  static getApiBaseUrl() {
        let envi = Cypress.env('ENV');
        if (envi == 'production')
            return "https://reqres.in";
        else if (envi == 'staging')
            return "https://reqres.in";
    }

    public static getTestData(fixture, name) {
        let envi = Cypress.env('ENV');
        return fixture(envi + '-' + name).then((data) => {
            console.log(data)
            return data;
        })
    }
}