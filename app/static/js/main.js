import './utils/modernizr'
import Swiper, { Pagination } from 'swiper'


import { createMobileMenu, destroyMobileMenu } from './modules/mobileMenu'
import toggler from './utils/toggler'
import scrollHiddenBody from './utils/scrollHiddenBody'

window.addEventListener('DOMContentLoaded', function () {

  Swiper.use(Pagination)

  const $header = document.querySelector('.header')
  const $headerContainer = $header.querySelector('.header__container')
  const $mainMenu = $header.querySelector('.main-menu')
  const $headerBtn = $header.querySelector('.header__button')
  const $burgerBtn = $header.querySelector('.burger-btn')
  const $servicesItems = document.querySelector('.services-items')

  const ARRAY_EVENTS_FOR_MOBILE = ['resize', 'orientationchange']
  const SERVICES_ITEMS = 'services-items'
  // 
  const childrenForAppendArray = [$mainMenu, $headerBtn]
  const toggleClass = {
    'header--active': $header,
    'burger-btn--active': $burgerBtn
  }
  
  let servicesSlider

  const servicesSliderOptions = {
    slidesPerView: 'auto',
    slideClass: `${SERVICES_ITEMS}__item`,
    spaceBetween: 12,
    breakpoints: {
      920: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement: 'button',
      bulletClass: 'pagination__bullet',
      bulletActiveClass: 'pagination__bullet--active',
      clickable: true
    }
  }

  function adaptiveHeader(parent, childrens) {
    if (window.innerWidth <= 768) {
      createMobileMenu(parent, childrens)
      if (!$headerBtn.classList.contains('mobile-menu__button')) $headerBtn.classList.add('mobile-menu__button')
    }

    if (window.innerWidth > 768) {
      destroyMobileMenu(parent, childrens)
      if ($headerBtn.classList.contains('mobile-menu__button')) $headerBtn.classList.remove('mobile-menu__button')
    }
  }

  if ($servicesItems.children[0].children.length >= 4) {
    document.querySelector(`.${SERVICES_ITEMS}`).classList.add('services-items--disable-flex')
    servicesSlider = new Swiper(`.${SERVICES_ITEMS}`, servicesSliderOptions) 
  }

  function initServicesSliderOnAdaptive(breakpoint /* number */, sliderSwiper /* string selector */, options /* object SwiperOptions*/) {
    if (window.innerWidth <= breakpoint && (!servicesSlider || servicesSlider?.destroyed)) servicesSlider = new Swiper(sliderSwiper, options)
    if (window.innerWidth > breakpoint && servicesSlider?.initialized && document.querySelector(sliderSwiper).children[0].children.length < 4) servicesSlider.destroy()
  }

  initServicesSliderOnAdaptive(920, `.${SERVICES_ITEMS}`, servicesSliderOptions)
  adaptiveHeader($headerContainer, childrenForAppendArray)

  ARRAY_EVENTS_FOR_MOBILE.forEach(e => window.addEventListener(e, () => {
    adaptiveHeader($headerContainer, childrenForAppendArray)
    initServicesSliderOnAdaptive(920, `.${SERVICES_ITEMS}`, servicesSliderOptions)
  }))

  $burgerBtn.addEventListener('click', () => {
    scrollHiddenBody()
    toggler(toggleClass)
  })

})