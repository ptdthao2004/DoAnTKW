document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const scrollTop = document.querySelector(".scroll-top");
  const form = document.querySelector(".contact-form");

  function updateScrollState() {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }

    if (scrollTop) {
      scrollTop.classList.toggle("show", window.scrollY > 400);
    }
  }

  window.addEventListener("scroll", updateScrollState);
  updateScrollState();

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Gửi thông tin thành công!");
    });
  }
});
