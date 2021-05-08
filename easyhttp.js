class easyHTTP {
    // get http request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    // get http request
    getTxt(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.text())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    // post http request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then (data => resolve(data))
            .catch(err => reject(err))
        })
    }

    // put http request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then (data => resolve(data))
            .catch(err => reject(err))
        })
    }

    // delete http request
    delete(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {'Content-type' : 'application/json'}
            })
            .then(res => res.json())
            .then (() => resolve('record deleted ...'))
            .catch(err => reject(err))
        })
    }
}