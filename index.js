const emailDiv = document.querySelector(".email_div");
const phoneDiv = document.querySelector(".phone_number");
const email_login = document.querySelector(".email");
const phone_login = document.querySelector(".phone");

email_login.addEventListener("click", (e) => {
  e.preventDefault();
  phoneDiv.style.display = "none";
  emailDiv.style.display = "block";
  email_login.style.display = "none";
  phone_login.style.display = "flex";
});
phone_login.addEventListener("click", (e) => {
  e.preventDefault();
  phoneDiv.style.display = "block";
  emailDiv.style.display = "none";
  email_login.style.display = "flex";
  phone_login.style.display = "none";
});

const signup_btn = document.getElementById("signup_btn");
const login_btn = document.getElementById("login_btn");
const signup_btn_wave = document.querySelector(".signup_btn_wave");
const LoginModal = document.querySelector(".login_modal_bg");
const modal_cross = document.getElementById("cross_btn");
const signup_btn_mobile = document.querySelector(".signup_btn_wave_mobile");
const signup_btn_tab = document.querySelector(".signup_btn_wave_tab");

login_btn.addEventListener("click", (e) => {
  e.preventDefault();
  LoginModal.classList.add("bg-active");
});
signup_btn.addEventListener("click", (e) => {
  e.preventDefault();
  LoginModal.classList.add("bg-active");
});
signup_btn_mobile.addEventListener("click", (e) => {
  e.preventDefault();
  LoginModal.classList.add("bg-active");
});
signup_btn_tab.addEventListener("click", (e) => {
  e.preventDefault();
  LoginModal.classList.add("bg-active");
});
signup_btn_wave.addEventListener("click", (e) => {
  e.preventDefault();
  LoginModal.classList.add("bg-active");
});
modal_cross.addEventListener("click", (e) => {
  e.preventDefault();
  LoginModal.classList.remove("bg-active");
});
