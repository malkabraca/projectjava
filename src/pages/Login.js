import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import PAGES from "../models/pageModel.js";
import handlePageChange from "../routes/router.js";

const loginEmailInput = document.getElementById("login-input-email");
const loginPasswordInput = document.getElementById("login-input-password");
const loginBtn = document.getElementById("login-btn");
const clickHereLogin = document.getElementById("click-here-login");

clickHereLogin.addEventListener("click", () => {
  handlePageChange(PAGES.SIGNUP);
});

loginEmailInput.addEventListener("input", () => {
  let errorArr = validateEmail(loginEmailInput.value);
  if (errorArr.length === 0) {
    //the text is ok
    loginEmailInput.classList.remove("is-invalid");
    document.getElementById("login-alert-email").classList.add("d-none");
    //emailOk = true;
  } else {
    //the text is not ok
    loginEmailInput.classList.add("is-invalid");
    document.getElementById("login-alert-email").classList.remove("d-none");
  }
});


loginPasswordInput.addEventListener("input", () => {
  let errorArr = validatePassword(loginPasswordInput.value);
  if (errorArr.length === 0) {
    //the text is ok
    loginPasswordInput.classList.remove("is-invalid");
    document.getElementById("login-alert-password").classList.add("d-none");
    passwordOk = true;
  } else {
    //the text is not ok
    loginPasswordInput.classList.add("is-invalid");
    document.getElementById("login-alert-password").classList.remove("d-none");
  }
});

loginBtn.addEventListener("click", () => {
  if (validateEmail(loginEmailInput.value).length) {
    return;
  }
  if (validatePassword(loginPasswordInput.value).length) {
    return;
  }
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    return;
  }
  let user = users.find(
    (item) =>
      item.email === loginEmailInput.value &&
      item.password === loginPasswordInput.value
  );
  if (!user) {
    return;
  }
  //remember who connected
  localStorage.setItem(
    "token",
    JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.btnBusinessClient,
    })
  );
  location.reload(); // refresh the page
});
