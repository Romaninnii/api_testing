class Requests {
    request(method, url, body) {
        return cy.request({
            method: method,
            url: url,
            body: body,
            failOnStatusCode: false
        })
    }
}

export default Requests
