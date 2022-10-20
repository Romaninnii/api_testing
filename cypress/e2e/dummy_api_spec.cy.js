import Requests from "../support/requests";
import method from  "../fixtures/methodRequest/method.json"


const request = new Requests()


describe('Website Dummy, API testing', () => {

    let headUrl = 'https://dummy.restapiexample.com'


    it('Get all employee data', () => {
        let url = headUrl + `/api/v1/employees`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.message).to.eq('Successfully! All records has been fetched.')
                expect(response.body.status).to.eq('success')
                expect(response.body.data[length]).to.have.keys
                ('employee_age', 'employee_name', 'employee_salary', 'id', 'profile_image')
            })
    })

    it('Get a single employee data', () => {
        let employee = 3
        let url = headUrl + `/api/v1/employee/${employee}`
        request.request(method.get, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.message).to.eq('Successfully! Record has been fetched.')
                expect(response.body.status).to.eq('success')
                expect(response.body.data.id).to.eq(employee)
                expect(response.body.data).to.have.keys
                ('employee_age', 'employee_name', 'employee_salary', 'id', 'profile_image')
            })
    })

    it('Create new record in database', () => {
        let url = headUrl + `/api/v1/create`
        let body = {
            'name': 'Stepan',
            'salary': '100',
            'age': '20'
        }

        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.message).to.eq('Successfully! Record has been added.')
                expect(response.body.status).to.eq('success')
                expect(response.body.data.name).to.eq(body.name)
                expect(response.body.data.salary).to.eq(body.salary)
                expect(response.body.data.age).to.eq(body.age)
                expect(response.body.data).to.have.keys
                ('age', 'name', 'id', 'salary')
            })
    })


    it('Update an employee record', () => {
        let employee = 21
        let url = headUrl + `/api/v1/update/${employee}`
        let body = {
            'name': 'Stepan',
            'salary': '100',
            'age': '20'
        }

        request.request(method.put, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.message).to.eq('Successfully! Record has been updated.')
                expect(response.body.status).to.eq('success')
                expect(response.body.data.name).to.eq(body.name)
                expect(response.body.data.salary).to.eq(body.salary)
                expect(response.body.data.age).to.eq(body.age)
                expect(response.body.data).to.have.keys
                ('age', 'name', 'salary')
            })
    })

    it('Update an employee record', () => {
        let employee = '2'
        let url = headUrl + `/api/v1/delete/${employee}`

        request.request(method.delete, url)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data).to.eq(employee)
                expect(response.statusText).to.eq("OK")
                expect(response.body.message).to.eq('Successfully! Record has been deleted')
                expect(response.body.status).to.eq('success')
            })
    })
})