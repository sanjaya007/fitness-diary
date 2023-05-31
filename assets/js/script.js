const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

if (document.title === "Fitness Diary") {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });
}

const allModalWrapper = document.querySelectorAll(".modal-wrapper");
const modalWrapper = document.getElementById("modalWrapper");
const modalBox = document.getElementById("modalBox");

const formModalWrapper = document.getElementById("formModalWrapper");
const formModal = document.querySelectorAll(".form-modal");
const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");
const openLoginLink = document.querySelectorAll(".open-login-link");
const openSignupLink = document.querySelectorAll(".open-signup-link");

const getStartedBtns = document.querySelectorAll(".get-started-btn");

allModalWrapper.forEach(function (wrapper) {
  wrapper.addEventListener("click", function (e) {
    const elTarget = e.target;
    const elClass = elTarget.classList[0];

    if (elClass === "modal-container") {
      elTarget.parentNode.classList.add("hidden");
    }
  });
});

if (getStartedBtns) {
  getStartedBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      formModalWrapper.classList.remove("hidden");
    });
  });
}

if (openLoginLink) {
  openLoginLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      console.log("hello");

      formModal.forEach(function (modal) {
        modal.classList.add("hidden");
      });
      loginModal.classList.remove("hidden");
    });
  });
}

if (openSignupLink) {
  openSignupLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      formModal.forEach(function (modal) {
        modal.classList.add("hidden");
      });
      signupModal.classList.remove("hidden");
    });
  });
}
