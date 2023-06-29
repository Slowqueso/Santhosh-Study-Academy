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

startSlideShow();

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



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var phoneError = document.getElementById('phone-error');
    var messageError = document.getElementById('message-error');

    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    messageError.textContent = '';

    if (name.trim() === '') {
        nameError.textContent = 'Please enter your name';
    }

    if (email.trim() === '') {
        emailError.textContent = 'Please enter your email';
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
    }

    if (!validatePhone(phone)) {
        phoneError.textContent = 'Please enter a valid phone number';
        if (phone.trim() === '') {
            phoneError.textContent = '';
        }
    }

    if (message.trim() === '') {
        messageError.textContent = 'Please enter your message';
    }

    if(nameError.textContent === '' && emailError.textContent === '' && phoneError.textContent === '' && messageError.textContent === '') {
        event.target.submit();
    } else {
        return false;
    }

    return true;
}


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^[0-9]{10}$/;
    return re.test(phone);
}
