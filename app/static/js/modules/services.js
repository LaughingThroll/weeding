import Swiper, { Pagination, Navigation } from 'swiper'

export function initServicesSlider(sliderSwiper /* Swiper */, selectorSwiper /* string selector */, options /* object SwiperOptions*/) {
    if (!sliderSwiper || sliderSwiper?.destroyed) sliderSwiper = new Swiper(selectorSwiper, options)
  }

export function destroyServicesSlider(sliderSwiper /* Swiper */, selectorSwiper /* string selector */) {
    sliderSwiper?.initialized && document.querySelector(selectorSwiper).children[0].children.length < 4 && sliderSwiper.destroy()
  }
