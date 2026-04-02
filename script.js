const wrapper = document.getElementById("headline-wrapper");
const headlines = document.querySelectorAll(".headline");
let currentIndex = 0;

function slideHeadlines() {
  currentIndex++;

  if (currentIndex >= headlines.length) {
    currentIndex = 0;
  }
  const stepHeight = headlines[0].offsetHeight;
  wrapper.style.transform = `translateY(-${currentIndex * stepHeight}px)`;
}

setInterval(slideHeadlines, 3000);

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".collectionWrapper");

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "-10% 0px -25% 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 150);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });
});

window.addEventListener("scroll", () => {
  const searchInput = document.getElementById("searchInput");

  if (searchInput.classList.contains("active")) {
    searchInput.classList.remove("active");
    searchInput.querySelector("input").blur();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("user");
  const loginSection = document.getElementById("loginSection");
  const closeLogin = document.getElementById("closeLogin");

  if (userIcon && loginSection) {
    userIcon.addEventListener("click", (e) => {
      e.preventDefault();
      loginSection.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  } else {
    console.error("Login elements not found. Check your IDs in HTML!");
  }

  if (closeLogin) {
    closeLogin.addEventListener("click", () => {
      loginSection.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === loginSection) {
      loginSection.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});

const bars = document.getElementById("bars");
const mobileMenu = document.getElementById("mobileMenu");

bars.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const cartIcon = document.querySelector("#cart");
const cart = document.querySelector(".cart-wrapper");
const closeCart = document.querySelector(".close-cart");

cartIcon.addEventListener("click", () => {
  cart.classList.add("cart-wrapper-active");
});
closeCart.addEventListener("click", () => {
  cart.classList.remove("cart-wrapper-active");
});

document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");

  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", (e) => {
      e.stopPropagation();

      searchInput.classList.toggle("active");
      console.log("Search icon clicked!");
    });
  } else {
    console.error("Elements not found. Check your IDs!");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const checkoutSection = document.getElementById("checkoutSection");
  const closeCheckout = document.getElementById("closeCheckout");

  const checkoutTriggers = document.querySelectorAll(".checkout-btn, .pay-now");

  checkoutTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      checkoutSection.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  if (closeCheckout) {
    closeCheckout.addEventListener("click", () => {
      checkoutSection.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === checkoutSection) {
      checkoutSection.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // 1. Show/Hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});





window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
});