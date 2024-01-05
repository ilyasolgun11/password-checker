let password = document.getElementById("password");
let sixLetters = document.getElementById("six-letters");
let specialCharacter = document.getElementById("special-character");
let number = document.getElementById("number");
let confirmPasswordFieldset = document.getElementById(
  "confirm-password-fieldset"
);
let passwordConfirm = document.getElementById("password-confirm");
let passwordChecker = document.getElementById("password-checker");
let form = document.getElementById("sign-up-form");
let submitBtn = document.getElementById("submit-btn");
let usernameFieldset = document.getElementById("username-fieldset");
let username = document.getElementById("username");
let takenUsernameContainer = document.getElementById(
  "taken-username-container"
);

let takenUsernames = [
  "Sophia",
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Jackson",
  "Ava",
  "Aiden",
  "Isabella",
  "Lucas",
  "Mia",
  "Ethan",
  "Charlotte",
  "Oliver",
  "Amelia",
  "Elijah",
  "Harper",
  "Benjamin",
  "Evelyn",
  "William",
];

password.addEventListener("input", function () {
  //  Checking to see if there is any special characters in password.value
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value)) {
    specialCharacter.style.backgroundColor = "#90ee90";
    specialCharacter.style.order = "0";
  } else {
    specialCharacter.style.backgroundColor = "";
    specialCharacter.style.order = "";
  }

  if (password.value.length >= 6) {
    sixLetters.style.backgroundColor = "#90ee90";
    sixLetters.style.order = "0";
  } else {
    sixLetters.style.backgroundColor = "";
    sixLetters.style.order = "";
  }

  if (/[0-9]/.test(password.value)) {
    number.style.backgroundColor = "#90ee90";
    number.style.order = "0";
  } else {
    number.style.backgroundColor = "";
    number.style.order = "";
  }
});

form.addEventListener("submit", function (event) {
  passwordChecker.innerHTML = "";
  takenUsernameContainer.innerHTML = "";
  confirmPasswordFieldset.style.borderColor = "#929292";
  usernameFieldset.style.borderColor = "#929292";
  event.preventDefault();
  if (password.value !== passwordConfirm.value) {
    console.log(takenUsernames.includes(username.value));
    let passwordCheck = document.createElement("span");
    passwordCheck.textContent = "Password does not match";
    passwordCheck.className = "password-check";
    passwordChecker.append(passwordCheck);
    passwordChecker.style.marginBottom = "18px";
    confirmPasswordFieldset.style.borderColor = "#c20000";
  } else if (takenUsernames.includes(username.value)) {
    let takenMessage = document.createElement("span");
    takenMessage.textContent = "This username is taken";
    takenMessage.className = "taken-message";
    takenUsernameContainer.append(takenMessage);
    takenUsernameContainer.style.marginBottom = "15px";
    takenUsernameContainer.style.paddingLeft = "4px";
    usernameFieldset.style.borderColor = "#c20000";
  } else {
    confirmPasswordFieldset.style.borderColor = "#929292";
    usernameFieldset.style.borderColor = "#929292";
    passwordChecker.innerHTML = "";
    takenUsernameContainer.innerHTML = "";
    submitBtn.style.marginTop = "0px";
    password.style.marginTop = "0px";
    form.submit();
  }
});

// let words = "hello!";
// console.log(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(words));
