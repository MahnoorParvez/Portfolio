// ----- hamburger menu -----
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  // open or close the menu
  navLinks.classList.toggle("open");
});

// close the menu when a link is clicked
const allLinks = navLinks.querySelectorAll("a");
allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// ----- dark / light mode -----
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // change the icon
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// ----- contact form validation -----
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMsg = document.getElementById("form-success");

// checks if the email looks right (something@something.something)
function checkEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// show error under the field
function showError(input, errorId, text) {
  document.getElementById(errorId).textContent = text;
  input.classList.add("invalid");
}

// remove the error
function clearError(input, errorId) {
  document.getElementById(errorId).textContent = "";
  input.classList.remove("invalid");
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // don't reload the page
  successMsg.textContent = "";

  let allGood = true;

  // name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "name-error", "Please enter your name.");
    allGood = false;
  } else {
    clearError(nameInput, "name-error");
  }

  // email (first check empty, then check format)
  if (emailInput.value.trim() === "") {
    showError(emailInput, "email-error", "Please enter your email.");
    allGood = false;
  } else if (!checkEmail(emailInput.value.trim())) {
    showError(emailInput, "email-error", "That email doesn't look right.");
    allGood = false;
  } else {
    clearError(emailInput, "email-error");
  }

  // message
  if (messageInput.value.trim() === "") {
    showError(messageInput, "message-error", "Please write a message.");
    allGood = false;
  } else {
    clearError(messageInput, "message-error");
  }

  // if everything is fine
  if (allGood) {
    successMsg.textContent = "Thanks! Your message was sent.";
    form.reset();
  }
});
