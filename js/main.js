// Modal Tickets

document.addEventListener("DOMContentLoaded", () => {
  let callBackButton = document.getElementById("getticket");

  let modal1 = document.getElementById("modal-1");

  let closeButton = modal1.getElementsByClassName("modal__close-button")[0];

  let tagBody = document.getElementsByTagName("body");

  callBackButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add("modal_active");
    tagBody.classList.add("hidden");
  };

  closeButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.remove("modal_active");
    tagBody.classList.remove("hidden");
  };

  modal1.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName("modal__content")[0];
    if (e.target.closest("." + modalContent.className) === null) {
      this.classList.remove("modal_active");
      tagBody.classList.remove("hidden");
    }
  };

  // more than one button
  let buttonOpenModal1 = document.getElementsByClassName("get-modal_1");

  for (let button of buttonOpenModal1) {
    button.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add("modal_active");
      tagBody.classList.add("hidden");
    };
  }
});

// Modal Tickets end

// Animation

AOS.init();

// Timer

const countdown = document.querySelector(".timer-item");
const targetDate = new Date("2025-01-10T00:00:00");

function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
}

setInterval(updateCountdown, 1000);

// Timer end

// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("body__artists_main");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // slides[slideIndex - 1].style.display.flexWrap = "Wrap";
  slides[slideIndex - 1].style.display = "flex";
}

// Sleder end
