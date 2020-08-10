var instance = new vidbg('.video', {
  mp4: 'img/video/Planet4077.mp4', // URL or relative path to MP4 video
  webm: 'img/video/Planet4077.webm', // URL or relative path to webm video
  poster: 'img/video/earth.png', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
  overlayColor: '#000', // The overlay color as a HEX
  overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
}, {
  // Attributes
});

var rellax = new Rellax('.rocket');

if(document.body.clientWidth < 768) {
  rellax.destroy();
}

AOS.init();

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

// var mySwiper = new Swiper('.swiper-container', {
  var galleryTop = new Swiper('.gallery-top', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  autoplay: {
    delay: 3000,
  },
  // slidesPerView: 3,
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 640px
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   992: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   }
  // },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})