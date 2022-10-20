import Requests from "../support/requests";
import method from  "../fixtures/methodRequest/method.json"

const request = new Requests()


describe('Rustybeer (Beer brewing tools), API testing', () => {

    let headUrl = 'https://rustybeer.herokuapp.com'


    it('Calculates alcohol by volume (abv) in percentage from final and original gravity. To use plato or brix units for gravity, add the °P or °Bx after the value.', () => {
        let url = headUrl + `/calculate/abv`
        let body = {
            "og": "2",
            "fg": "3"
        }

        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body).to.have.keys('abv')
            })
    })

    it('Calculates final gravity based on original gravity and wanted alcohol by volume. To use plato or brix units for gravity, add the °P or °Bx after the value.', () => {
        let url = headUrl + `/calculate/fg`
        let body = {
            "og": "1.066",
            "abv": 6.825000000000006
        }

        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body).to.have.keys('fg')
            })
    })

    it('Calculates number of different standard-size bottles needed to contain a given volume', () => {
        let url = headUrl + `/calculate/bottles`
        let body = {
            "volume": "55l"
        }

        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body[length]).to.have.keys('num', 'size')
            })
    })


    it('Lists beer styles that match optional query parameters', () => {
        let name = "string"
        let og = 1.44
        let fg = 1.018
        let abv = 9
        let ibu = 11
        let color = 3
        let url = headUrl + `/styles?name=${name}&og=${og}&fg=${fg}&abv=${abv}&ibu=${ibu}&color=${color}`

        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

    it('Lists hops that match optional query parameters', () => {

        let name = "string"
        let country = "string"
        let alpha_acid = 1
        let beta_acid = 9
        let purpose = 11
        let substituted = 3
        let url = headUrl + `/hops?name=${name}&country=${country}&alpha_acid=${alpha_acid}&beta_acid=${beta_acid}&purpose=${purpose}&substituted=${substituted}`

        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

    it('Lists yeasts that match optional query parameters', () => {
        let company = "string"
        let name = "string"
        let attenuation = 2
        let temperature = "string"
        let url = headUrl + `/yeasts?company=${company}&name=${name}&attenuation=${attenuation}&temperature=${temperature}`

        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

})