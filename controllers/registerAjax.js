// let callApiRegister = () => {
//     let promise = axios({
//         url: '',
//         method: ''
//     })
//     promise.then((result) => {

//     })
//     promise.catch((error) => {

//     })
// }


function create() {
    pwcf()
    let user = new userRegister();
    user.email = document.querySelector('#email').value
    user.password = document.querySelector('#password').value
    user.name = document.querySelector('#name').value
    user.gender = document.querySelector('#true').checked
    user.phone = document.querySelector('#phone').value
    console.log(user);
}

function pwcf() {
    let password = document.querySelector('#password').value
    let pwcf = document.querySelector('#cfpw').value
    if (password !== pwcf) {
        alert('2 password không giống nhau');
    }
}