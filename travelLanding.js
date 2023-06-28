// window.addEventListener("load", alert("Welcome from Travel Vista"));
const modal = document.getElementById("modalBox");
const subscribe = document.querySelector("#Subscribe");
const cancel = document.querySelector("#Cancel");
const email = document.querySelector("#email");
const formSubmit = document.querySelector("#formSubmit");
const hamBtn = document.querySelector("#hamBtn");
const headNoDisplay = document.querySelector(".headNoDisplay");
// modal Pop Up
window.addEventListener("load", () => {
  modal.style.display = "block";
  console.log("Modal");
});
const modalNone = () => (modal.style.display = "none");
subscribe.addEventListener("click", () => {
  if (email.value && email.value.trim) {
    modalNone;
  } else {
    window.alert("The email is empty!");
  }
});
cancel.addEventListener("click", modalNone);

hamBtn.addEventListener("click", () => (headNoDisplay.style.display = "none"));
