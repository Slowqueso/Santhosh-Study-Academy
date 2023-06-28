const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-slides]");
const slideDuration = 5000; // Change slide every 3 seconds

let currentIndex = 0;
let timerId = null;

function changeSlide(index) {
  const activeSlide = slides.querySelector("[data-active]");
  if (activeSlide) {
    delete activeSlide.dataset.active;
  }

  slides.children[index].dataset.active = true;
}

function startSlideShow() {
  timerId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    changeSlide(currentIndex);
  }, slideDuration);
}

function stopSlideShow() {
  clearInterval(timerId);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    currentIndex = (currentIndex + offset + slides.children.length) % slides.children.length;
    changeSlide(currentIndex);
    stopSlideShow();
    startSlideShow();
  });
});

startSlideShow();