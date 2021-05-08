class easyHTTP {
    // get http request
    async get(url){        
        let res = await fetch(url);
        let resData = await res.json();
        return (resData);    
    }

    // get http request
    async getTxt(url){
        let res = await fetch(url);
        let resData = await res.text();
        return (resData);
    }

    // post http request
    async post(url, data){
        let res = await fetch(url, {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(data)
            });
        let resData = await res.json();
        return (resData);
    }

    // put http request
    async put(url, data){
        let res = await fetch(url, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(data)
            });
        let resData = await res.json();
        return (resData);
    }

    // delete http request
    async delete(url, data){
        let res = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-type' : 'application/json'}
            });
        let resData = await res.json();
        return ('record deleted ...');    
    }

}

