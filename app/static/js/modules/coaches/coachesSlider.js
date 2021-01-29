import { removeClassOnSwiper, addClassOnSwiper } from '../../utils/fnForSwiper'

function coachesSliderChange({ slides } /* Swiper Event*/) {
  window.setTimeout(() => {

    removeClassOnSwiper(slides, 'shadow-for-item')
    removeClassOnSwiper(slides, 'border-for-item')

    slides.forEach(slide => {
      if (slide.classList.contains('swiper-slide-active') || slide.classList.contains('swiper-slide-next')) {
        slide.classList.add('shadow-for-item')
      }
      if (!slide.classList.contains('swiper-slide-prev')) slide.classList.add('border-for-item')
    })

  }, 0)
}

function maxWidthCoachesSlider(slider /*Swiper Slider*/, slideChangeFn /* typeof Function */) {
  if (slider.eventsListeners?.slideChange?.length) {
    slider.off('slideChange', slideChangeFn)
    
    window.setTimeout(() => {
      addClassOnSwiper(slider.slides, 'border-for-item')
      addClassOnSwiper(slider.slides, 'shadow-for-item')
    }, 0)

  }
}

function minWidthCoachesSlider(slider /*Swiper Slider*/, slideChangeFn /* typeof Function */) {
  if (!slider.eventsListeners.slideChange?.length) {
    slider.on('slideChange', slideChangeFn)
  }
}

export { coachesSliderChange, maxWidthCoachesSlider, minWidthCoachesSlider }