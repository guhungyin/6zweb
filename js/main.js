const bannerSwiper = new Swiper('.bannerSwiper', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.bannerSwiper-pagination',
    clickable: true,
  },
});
const recentListSwiper = new Swiper(".recentListSwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints:{
    768:{
      slidesPerView: 4,
    },
    992:{
      slidesPerView: 5,
      spaceBetween: 20
    },
    1200:{
      slidesPerView: 6
    },
    1400:{
      slidesPerView: 8
    }
  }
});
const quenteGameListSwiper = new Swiper(".quenteGameListSwiper", {
  loop: true,
  navigation: {
    nextEl: ".quenteGameListSwiper-button-next",
    prevEl: ".quenteGameListSwiper-button-prev",
  }
});
const pgGameListSwiper = new Swiper(".pgGameListSwiper", {
  loop: true,
  navigation: {
    nextEl: ".pgGameListSwiper-button-next",
    prevEl: ".pgGameListSwiper-button-prev",
  },
});
const sixzGameListSwiper = new Swiper(".sixzGameListSwiper", {
  loop: true,
  navigation: {
    nextEl: ".sixzGameListSwiper-button-next",
    prevEl: ".sixzGameListSwiper-button-prev",
  },
});
const liveGameListSwiper = new Swiper(".liveGameListSwiper", {
  loop: true,
  navigation: {
    nextEl: ".liveGameListSwiper-button-next",
    prevEl: ".liveGameListSwiper-button-prev",
  },
});
