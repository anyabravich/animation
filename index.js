document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    effect: "creative",
    speed: 500,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, "-20%", -1],
      },
      next: {
        translate: [0, "100%", 0],
      },
    },
    on: {
      slideChangeTransitionStart(swiper) {
        let currentSlide = swiper.slides[swiper.activeIndex];
            prevSlide = swiper.slides[swiper.previousIndex];

        animationSlide(currentSlide, prevSlide);
      },
      afterInit(swiper) {
        let currentSlide = swiper.slides[swiper.activeIndex];
            prevSlide = swiper.slides[swiper.previousIndex];

        animationSlide(currentSlide, prevSlide);
      }
    }
  });

  // gsap.utils.toArray(".swiper-slide").forEach(function (pin, index) {
  //   ScrollTrigger.create({
  //     trigger: pin,
  //     start: "top top",
  //     pin: true,
  //     pinSpacing: false,
  //   });
  // });

  function animationSlide(slideActiveItem, slidePrevItem) {

    const tl = gsap.timeline({
    });

    tl.fromTo(slidePrevItem.querySelector('img'), {
      opacity:1
    }, {
      opacity: 0,
      duration: 0.5,
    }, 0)


    tl.fromTo(slideActiveItem.querySelector('img'), {
      opacity:0
    }, {
      opacity: 1,
      duration: 0.5,
    }, 0)

    return tl;
  }

});

