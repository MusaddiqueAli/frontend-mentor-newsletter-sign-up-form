"use strict";

const main = document.querySelector("main");
const success = document.querySelector("#success");
const form = document.querySelector("#form");
const email = form.querySelector("#email");
// const input = document.querySelector("#email");
const invalidEmail = document.querySelector("#invalid-email");
const submitButton = document.querySelector("#submit-btn");
const submittedEmail = document.querySelector("#submitted-email");
const dismissButton = document.querySelector("#dismiss");

form.addEventListener('submit', (e) => {
    e.preventDefault();    // Call the preventDefault() method of the event object to avoid form submission. This avoids you to go to other page after submit event.
    submitAction();
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitAction();
});

dismissButton.addEventListener('click', () => {
    main.classList.remove('hide');
    success.classList.add('hide');
    email.value = "";                // Reset the email input value
});

email.addEventListener("input", function () {
    if (email.value === "" || validateEmail(email.value)) {
        invalidEmail.classList.add('hide');

        // Reset the input styles when email is valid
        email.style.backgroundColor = "";
        email.style.border = "";
    }
});

email.addEventListener("animationend", (e) => {
    email.classList.remove("apply-shake");
});

const validateEmail = function (email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

const submitAction = function () {
    if (email.value === "") {
        email.classList.add("apply-shake");
    }
    else if (validateEmail(email.value)) {
        main.classList.add('hide');
        success.classList.remove('hide');
        submittedEmail.textContent = email.value;
    } else {
        invalidEmail.classList.remove('hide');
        // Apply red background and border for incorrect email
        email.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
        email.style.border = "1px solid hsl(4, 100%, 67%)";
    }
}