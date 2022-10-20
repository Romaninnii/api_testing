import Requests from "../support/requests";
import method from  "../fixtures/methodRequest/method.json"


const request = new Requests()


describe('Fruityvice (Data about all kinds of fruit), API testing', () => {

    let headUrl = 'https://www.fruityvice.com'


    it('Get all fruits list', () => {
        let url = headUrl + `/api/fruit/all`

        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

    it('Get fruit by id', () => {
        let url = headUrl + `/api/fruit/25`

        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(JSON.parse(response.body)).to.have.keys
                ('family', 'genus', 'id', 'name', 'nutritions', 'order')
            })
    })

    it('Get fruit by name', () => {
        let url = headUrl + `/api/fruit/Watermelon`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(JSON.parse(response.body)).to.have.property('family', "Cucurbitaceae")
                expect(JSON.parse(response.body)).to.have.property('genus', "Citrullus")
                expect(JSON.parse(response.body)).to.have.property('id', 25)
                expect(JSON.parse(response.body)).to.have.property('name', "Watermelon")
                expect(JSON.parse(response.body).nutritions).to.have.property('calories', 30)
                expect(JSON.parse(response.body).nutritions).to.have.property('carbohydrates', 8)
                expect(JSON.parse(response.body).nutritions).to.have.property('fat', 0.2)
                expect(JSON.parse(response.body).nutritions).to.have.property('protein', 0.6)
                expect(JSON.parse(response.body).nutritions).to.have.property('sugar', 6)
                expect(JSON.parse(response.body)).to.have.property('order', "Cucurbitales")

            })
    })

    it('Request fruits with given family', () => {
        let url = headUrl + `/api/fruit`
        let body = {
            "genus": "Fragaria",
            "name": "Strawberry",
            "family": "Rosaceae",
            "order": "Rosales",
            "nutritions": {
                "carbohydrates": 5.5,
                "protein": 0,
                "fat": 0.4,
                "calories": 29,
                "sugar": 5.4
            }
        }

        request.request(method.put, url, body)
            .then((response) => {
                expect(response.body.error).to.eq
                ("The fruit either already existed or had an invalid json object attached")
            })
    })
})