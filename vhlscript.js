const header = document.getElementById("header");
const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (window.scrollY > 400) {
    scrollTop.style.opacity = "1";
    scrollTop.style.pointerEvents = "auto";
  } else {
    scrollTop.style.opacity = "0";
    scrollTop.style.pointerEvents = "none";
  }
});

/* ===== CONTACT FORM ===== */

const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Gửi thông tin thành công!");
});
