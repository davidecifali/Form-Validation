const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
  
    if (usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
      } else if (!validUsername(usernameValue)) {
        setErrorFor(username, "Username must be between three and ten characters");
      } else {
        setSuccessFor(username);
      }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
      } else if (!validEmail(emailValue)) {
        setErrorFor(email, "Invalid email");
      } else {
        setSuccessFor(email);
      }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
      } else if (!validPassword(passwordValue)) {
        setErrorFor(
          password,
          "Password must be at least eight  characters, one uppercase letter, one lowercase letter and one number"
        );
      } else {
        setSuccessFor(password);
      }

    if (password2Value === "") {
        setErrorFor(password2, "Confirm Password cannot be blank");
      } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords do not match");
      } else if (!validPassword(password2Value)) {
        setErrorFor(
          password2,
          "Confirm Password must be at least eight characters, one uppercase letter, one lowercase letter and one number"
        );
      } else {
        setSuccessFor(password2);
      }
    }  

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerText = message;
      }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
      }
      
    function validUsername(username) {
        return /^[a-zA-Z0-9.\-_$@*!]{3,10}$/.test(username);
      }

    function validEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
      }

    function validPassword(password) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
      }
      


