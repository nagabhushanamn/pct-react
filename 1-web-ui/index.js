
console.log('-index.js-')


//---------------------------------------------
// using DOM API
//---------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

    let box = document.querySelector('.alert')
    let showBtn = document.querySelector('.btn-primary')
    let hideBtn = document.querySelector('.btn-danger')
    let greetBtn = document.querySelector('.btn-success')

    showBtn.addEventListener('click', e => {
        box.style.display = ''
    })
    hideBtn.addEventListener('click', e => {
        box.style.display = 'none'
    })
    greetBtn.addEventListener('click', e => {
        box.innerHTML = "greetings"
    })


})


//---------------------------------------------
// using XHR/Fetch API + DOM API
//---------------------------------------------

let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {
    //..
    let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    let promise = fetch(apiUrl)
    document.getElementById('progress').innerHTML = "Loading todos..";
    promise
        .then(response => response.json())
        .then(todos => {
            document.getElementById('progress').innerHTML = "";
            let arr = todos.map((todo, idx) => {
                return `
                    <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">${todo.id} - ${todo.title} - ${todo.completed}</li>
                `
            })
            document.getElementById('todos-list').innerHTML = arr.join(" ");
        })

})


//---------------------------------------------
// using Timer API + DOM API
//---------------------------------------------
let timeEle=document.querySelector('.badge-danger');
setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
}, 1000)