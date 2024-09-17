var swiper = new Swiper(".profile__review_swiper", {
  navigation: {
    nextEl: ".review-button-next",
    prevEl: ".review-button-prev",
  },
  breakpoints: {
    340: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".profile__listing_swiper", {
  navigation: {
    nextEl: ".listing-button-next",
    prevEl: ".listing-button-prev",
  },
  breakpoints: {
    340: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
