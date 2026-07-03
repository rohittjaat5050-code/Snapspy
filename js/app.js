document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector("button");

const input = document.querySelector("input");

button.addEventListener("click", () => {

const username = input.value.trim();

if(username === ""){

alert("Please enter a username.");

return;

}

localStorage.setItem("username", username);

window.location.href = "report.html";

});

});