const password = document.getElementById("password");
const repPassword = document.getElementById("repPass");
const inputbox = document.querySelector(".inputBox");
const signUpBtn = document.querySelector(".inp_signUp");

signUpBtn.addEventListener("click", () => {
    if (password !== repPassword) {
        password.removeAttribute("style", "border-bottom");
        password.setAttribute("style", "border-bottom: 1px solid red");
        repPassword.removeAttribute("style", "border-bottom");
        repPassword.setAttribute("style", "border-bottom: 1px solid red");
    }
});