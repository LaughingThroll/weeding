import { removeClassOnSwiper, addClassOnSwiper } from '../../utils/fnForSwiper' 

function coachesSliderChange({ slides }) {
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

function maxWidthCoachesSlider(slider, slideChangeFn) {
  if (slider.eventsListeners?.slideChange?.length) {
    slider.off('slideChange', slideChangeFn)
    addClassOnSwiper(slider.slides, 'border-for-item')
    addClassOnSwiper(slider.slides, 'shadow-for-item')
  } 
}

function minWidthCoachesSlider(slider, slideChangeFn) {
  if (!slider.eventsListeners?.slideChange?.length) slider.on('slideChange', slideChangeFn)
}

export { coachesSliderChange, maxWidthCoachesSlider, minWidthCoachesSlider }