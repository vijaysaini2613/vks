// Floating images appear one at a time every 2 seconds
const floatImgs = document.querySelectorAll('.float-img');
let floatIndex = 0;

// Initially show the first image
if (floatImgs.length > 0) {
  floatImgs[floatIndex].style.opacity = '1';
}

// Initialize Swiper Carousel
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


// Cycle through images every 2 seconds
setInterval(() => {
  floatImgs.forEach(img => img.style.opacity = '0');
  floatImgs[floatIndex].style.opacity = '1';
  floatIndex = (floatIndex + 1) % floatImgs.length;
}, 2000);

// Optional GSAP animation if added
if (typeof gsap !== 'undefined') {
  gsap.from(".animated-heading", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });
}
