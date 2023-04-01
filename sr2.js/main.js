function register(){
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value;
    
    if(name.length<3){
    showError("Ім'я надто коротке");
    return;
    }

    if(email.length<6){
    showError("Email надто короткий")
    return;
    }

    if(password.length<6){
    showError("Пароль надто короткий")
    return;
    }

showSuccess("Успішно зареєстровано")

let user = {
    name: name,
    email: email,
    password: password
}

let user_json = JSON.stringify(user);
localStorage.setItem("user", user_json)
console.log(name, email, password)
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
