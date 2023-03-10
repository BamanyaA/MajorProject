const form = document.getElementById("profileForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const oldPassword = document.getElementById("oldPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const oldPasswordError = document.getElementById("oldPasswordError");
const newPasswordError = document.getElementById("newPasswordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!oldPassword.value) {
    oldPasswordError.textContent = "Old password is required";
    oldPasswordError.style.display = "block";
  } else {
    oldPasswordError.style.display = "none";
  }
  if (newPassword.value !== confirmPassword.value) {
    alert("New password and confirm password do not match");
    return;
  }

});

/* js for visa page*/

const btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
  fetch("visa.html")
    .then(response => response.text())
    .then(data => document.querySelector("body").innerHTML = data);
});