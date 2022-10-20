import Requests from "../support/requests";
import method from  "../fixtures/methodRequest/method.json"


const request = new Requests()


describe('Website Reqres, API testing', () => {

    let headUrl = 'https://reqres.in'


    it('Get List users', () => {
        let page = 2
        let url = headUrl + `/api/users?page=${page}`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.page).to.eq(2)
                expect(response.body.data[length]).to.have.keys
                ('avatar', 'email', 'first_name', 'id', 'last_name')
            })
    })

    it('Get Single user', () => {
        let user = 4
        let url = headUrl + `/api/users/${user}`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.data.id).to.eq(user)
                expect(response.body.data).to.have.keys
                ('avatar', 'email', 'first_name', 'id', 'last_name')
            })
    })

    it('Get Single user not found', () => {
        let user = 23
        let url = headUrl + `/api/users/${user}`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(404)
                expect(response.statusText).to.eq("Not Found")
            })
    })

    it('Get List resource', () => {
        let url = headUrl + `/api/unknown`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.data[length]).to.have.keys
                ('color', 'id', 'name', 'pantone_value', 'year')
            })
    })

    it('Get single resource', () => {
        let resource = 2
        let url = headUrl + `/api/unknown/${resource}`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.data.id).to.eq(resource)
                expect(response.body.data).to.have.keys
                ('color', 'id', 'name', 'pantone_value', 'year')
            })
    })

    it('Get Single resource not found ', () => {
        let resource = 23
        let url = headUrl + `/api/users/${resource}`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(404)
                expect(response.statusText).to.eq("Not Found")
            })
    })

    it('Post create user', () => {
        let url = headUrl + `/api/users`
        let body = {
            "name": "Stepan",
            "job": "leader"
        }
        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.statusText).to.eq("Created")
                expect(response.body.job).to.eq(body.job)
                expect(response.body.name).to.eq(body.name)
            })
    })

    it('Put update user', () => {
        let user = 2
        let url = headUrl + `/api/users/${user}`
        let body = {
            "name": "morpheus",
            "job": "zion resident"
        }
        request.request(method.put, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.job).to.eq(body.job)
                expect(response.body.name).to.eq(body.name)
            })
    })

    it('Patch update user', () => {
        let user = 2
        let url = headUrl + `/api/users/${user}`
        let body = {
            "name": "morpheus",
            "job": "zion resident"
        }
        request.request(method.patch, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.job).to.eq(body.job)
                expect(response.body.name).to.eq(body.name)
            })
    })

    it('Delete user', () => {
        let user = 2
        let url = headUrl + `/api/users/${user}`
        request.request(method.delete, url)
            .then((response) => {
                expect(response.status).to.eq(204)
                expect(response.statusText).to.eq("No Content")
            })
    })

    it('Post register successful', () => {
        let url = headUrl + `/api/register`
        let body = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.id).to.eq(4)
                expect(response.body.token).to.eq("QpwL5tke4Pnpja7X4")
                expect(response.body).to.have.keys
                ('id', 'token')
            })
    })

    it('Post register unsuccessful', () => {
        let url = headUrl + `/api/register`
        let body = {
            "email": "eve.holt@reqres.in",
        }
        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Missing password')
            })
    })

    it('Post Login - successful ', () => {
        let url = headUrl + `/api/login`
        let body = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.token).to.eq("QpwL5tke4Pnpja7X4")
            })
    })

    it('Post Login - unsuccessful ', () => {
        let url = headUrl + `/api/login`
        let body = {
            "email": "eve.holt@reqres.in",
        }
        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Missing password')
            })
    })

    it('Get Delayed response ', () => {
        let delay = 3
        let url = headUrl + `/api/users?delay=${delay}`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.data[length]).to.have.keys
                ('avatar', 'email', 'first_name', 'id', 'last_name')
            })
    })

})