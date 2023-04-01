let user = JSON.parse(localStorage.getItem("user"));


function enter(){
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    if(email != user.email){
        showError("Невірний Email")
    }

    if(password != user.password){
        showError("Невірний пароль")  
    }
    if(email === user.email && password === user.password){
        user.loged = true;
        let new_user = JSON.stringify(user);
        localStorage.setItem("user", new_user)
        showSuccess("Вхід виконано")
        window.location = "z3.html"
    }
}

function showError(error){
    let error_text = `<div class="alert alert-danger col-6">${error}</div>`;
    document.getElementById('message').innerHTML = error_text;

    setTimeout(function(){
        document.getElementById('message').innerHTML = '';
    }, 4000)
}

function showSuccess(text){
    let success_text = `<div class="alert alert-success col-6">${text}</div>`;

    document.getElementById('message').innerHTML = success_text;

    setTimeout(function(){
        document.getElementById('message').innerHTML = '';
    }, 4000)
}