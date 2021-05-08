const http = new easyHTTP();

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);
document.getElementById('button4').addEventListener('click', postRequest);
document.getElementById('button5').addEventListener('click', putRequest);
document.getElementById('button6').addEventListener('click', deleteRequest);


// get text data
function getText(){
    http.getTxt('test.txt').then(data => document.querySelector('#output').innerHTML = data)
}

// get json local data
function getJson(){
    http.get('posts.json').then(data => {
        let output = '';
        data.forEach(element => {
            output += `<li>${element.title} ${element.body}</li>`;
        });
        document.querySelector('#output').innerHTML = output;
    })
}

// get json external data
function getExternal(){
    http.get('https://jsonplaceholder.typicode.com/users').then(data => {
        let output = '';
        data.forEach(element => {
            output += `<li>${element.name} - ${element.email}</li>`;
        });
        document.querySelector('#output').innerHTML = output;
    })
}

let user = {
    name: 'Sameh Soliman',
    email: 'sameh@erpbright.com'
}

// post request
function postRequest(){
    http.post('https://jsonplaceholder.typicode.com/users', user).then(data => {
        console.log(data);
        let output = '';
        output += `<li>id = ${data.id}</li>`;
        output += `<li>name = ${data.name}</li>`;
        output += `<li>email = ${data.email}</li>`;
        document.querySelector('#output').innerHTML = output;
    })
}

// put request
function putRequest(){
    http.put('https://jsonplaceholder.typicode.com/users/2', user).then(data => {
        console.log(data);
        let output = '';
        output += `<li>id = ${data.id}</li>`;
        output += `<li>name = ${data.name}</li>`;
        output += `<li>email = ${data.email}</li>`;
        document.querySelector('#output').innerHTML = output;
    })
}

// delete request
function deleteRequest(){
    http.delete('https://jsonplaceholder.typicode.com/users/2', user).then(data => {
        console.log(data);
        document.querySelector('#output').innerHTML = data;
    })
}

