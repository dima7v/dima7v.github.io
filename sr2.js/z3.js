let user = JSON.parse(localStorage.getItem("user"));

let hello = document.getElementById('hello');

hello.innerText = `Вітаю ${user.name}!`

let message = document.getElementById('message');

message.innerText = `На вашу поштову скриньку - ${user.email}надіслано лист із підтвердженням вашої адреси.`