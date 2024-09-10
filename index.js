document.addEventListener("DOMContentLoaded", () => {
  // new Swiper(".swiper", {
  //   direction: "vertical",
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   mousewheel: true,
  //   freeMode: true,
  // });

  gsap.utils.toArray(".swiper-slide").forEach(function (pin, index) {
    ScrollTrigger.create({
      trigger: pin,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });
});
