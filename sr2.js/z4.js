let user2 = JSON.parse(localStorage.getItem("user"));

if(user2 && user2.loged){
    console.log('Користувач залогований');


document.getElementById('nav_left').innerHTML = `
<li class="nav-item">
	<a class="nav-link" href="main.html">Головна</a>
</li>`

document.getElementById('nav_right').innerHTML = `
<ul class="navbar-nav ml-auto">
	<li class="nav-item">
	<a class="nav-link" href="index.html" onclick ="logOut ()">Вийти</a>
	</li>
</ul>
`
}

function logOut(){
    localStorage.clear();
}