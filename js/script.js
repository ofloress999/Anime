document.addEventListener("DOMContentLoaded", function() {
    const buttonLogin = document.querySelector(".button-login");
    const registerForm = document.querySelector(".register-form");
    const loginForm = document.querySelector(".login-form");
    const buttonRegister = document.querySelector(".button-register");
    const infoLeft = document.querySelector(".leftside");
    const infoLeftR = document.querySelector(".leftside-r");
    const rightContainer = document.querySelector(".right-container");

    buttonLogin.addEventListener("click", function (e) {
        e.preventDefault();

        if(registerForm.style.display === "flex") {
            registerForm.style.display = "none";
            rightContainer.style.backgroundColor = "#000";
            infoLeft.style.display = "none"
            infoLeftR.style.display = "Flex"
            loginForm.style.display = "block";
        } else {
            registerForm.style.display = "flex";
            loginForm.style.display = "none";
        }

    });

    buttonRegister.addEventListener("click", function (e) {
        e.preventDefault();

        if(registerForm.style.display === "none") {
            registerForm.style.display = "flex";
            rightContainer.style.backgroundColor = "#fff";
            infoLeft.style.display = "flex"
            infoLeftR.style.display = "none"
            loginForm.style.display = "none";
        } else {
            registerForm.style.display = "none";
            loginForm.style.display = "flex";
        }
    }); 
});