import Requests from "../support/requests";
import method from  "../fixtures/methodRequest/method.json"


const request = new Requests()


describe('Website Dummy, API testing', () => {

    let headUrl = 'http://users.bugred.ru/'


    it('Delete task', () => {
        let url = headUrl + `tasks/rest/deletetask`
        let body = {
            'email_owner': 'apral14764@gmail.com',
            'task_id': '5335'
        }

        request.request(method.delete, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

    it('Add task incron', () => {
        let url = headUrl + `tasks/rest/addtaskincron`
        let body = {
            'email_owner': 'apral14764@gmail.com',
            'task_id': '5335'
        }
        request.request(method.get, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

    it('Update task', () => {
        let url = headUrl + `tasks/rest/updatetask`
        let body = {
            'email_owner': 'apral14764@gmail.com',
            'email_assign': 'romixon',
            'id_task': '564470',
            'task_title': 'Lool',
            'task_description': 'LOL'
        }
        request.request(method.put, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

    it('Create task', () => {
        let url = headUrl + `tasks/rest/createtask`
        let body = {
            'task_title': 'UKR',
            'task_description': 'UR',
            'email_owner': 'apral14764@gmail.com',
            'email_assign': 'romixon'
        }
        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })


    it('Delete user', () => {
        let url = headUrl + `tasks/rest/deleteuser`
        let body = {
            'email': 'apral14764@gmail.com'
        }
        request.request(method.delete, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

    it('Update full user', () => {
        let url = headUrl + `tasks/rest/fullupdateuser`
        let body = {
            'email': 'apral14764@gmail.com',
            'hobby ': 'hobby'
        }
        request.request(method.put, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })

    it('Do login', () => {
        let url = headUrl + `tasks/rest/dologin`
        let body = {
            'email': 'apral14764@gmail.com',
            'password ': 'Apral14764@gmail'
        }
        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })


    it('Get user', () => {
        let url = headUrl + `tasks/rest/getuser`
        let body = {
           'email' : 'apral14764@gmail.com'
        }
        request.request(method.post, url, body)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
            })
    })
})