// riadesu, rahasiabanget12
const container = document.getElementById('container');
container.addEventListener('submit', function (el) {
    el.preventDefault();
    if (el.target.id == "login") {
        const username = document.getElementById('floatingInput');
        const password = document.getElementById('floatingPassword');
        console.log(username.value);
        console.log(password.value);

        // Rules
        if (username.value == 'riadesu' && password.value == 'rahasiabanget12') {
            window.location.href = "konten.html";
        } else {
            if (!(username.classList.contains('is-valid') && password.classList.contains('is-valid')))
                username.classList.add("is-invalid");
        }
    }
});