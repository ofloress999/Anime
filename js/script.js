document.addEventListener("DOMContentLoaded", function() {
    const buttonLogin = document.querySelector(".button-login");
    const registerForm = document.querySelector(".register-form");
    const loginForm = document.querySelector(".login-form");
    const buttonRegister = document.querySelector(".button-register");

    buttonLogin.addEventListener("click", function (e) {
        e.preventDefault();

        if(registerForm.style.display === "flex") {
            registerForm.style.display = "none";
            loginForm.style.display = "block";
        } else {
            registerForm.style.display = "flex";
            loginForm.style.display = "none";
        }

    });
});