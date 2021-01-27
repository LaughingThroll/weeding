import './utils/modernizr'
import Swiper, { Pagination, Navigation } from 'swiper'

import { createMobileMenu, destroyMobileMenu } from './modules/mobileMenu'
import toggler from './utils/toggler'
import scrollHiddenBody from './utils/scrollHiddenBody'
import { removeClassOnSwiper, addClassOnSwiper, updateForSwiper } from './utils/fnForSwiper'
import writeCounterInElement from './utils/writeCounterInElement'

window.addEventListener('DOMContentLoaded', function () {

  Swiper.use([Navigation, Pagination])

  const $header = document.querySelector('.header')
  const $headerContainer = $header.querySelector('.header__container')
  const $mainMenu = $header.querySelector('.main-menu')
  const $headerBtn = $header.querySelector('.header__button')
  const $burgerBtn = $header.querySelector('.burger-btn')
  const $servicesItems = document.querySelector('.services-items')

  const ARRAY_EVENTS_FOR_MOBILE = ['resize', 'orientationchange']
  const SERVICES_ITEMS = 'services-items'
  const COACHES_ITEMS = 'coaches-items'

  // Header
  const childrenForAppendArray = [$mainMenu, $headerBtn]
  const toggleClass = {
    'header--active': $header,
    'burger-btn--active': $burgerBtn
  }

  // Services
  let servicesSlider
  const servicesSliderOptions = {
    slidesPerView: 'auto',
    spaceBetween: 12,
    breakpoints: {
      920: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    },
    pagination: {
      el: `.${SERVICES_ITEMS}__pagination`,
      type: 'bullets',
      bulletElement: 'button',
      bulletClass: 'pagination__bullet',
      bulletActiveClass: 'pagination__bullet--active',
      clickable: true
    }
  }

  // Coaches 
  const coachesNavigate = {
    pagination: {
      el: `.${COACHES_ITEMS}__pagination`,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return `<span class="pagination__frag pagination__current">${current}</span>  of  <span class="pagination__frag pagination__total">${total}</span>`
      }
    },
    navigation: {
      nextEl: '.slider-arrow--right',
      prevEl: '.slider-arrow--left',
      disabledClass: 'slider-arrow--disabled'
    },
  }
  
  const coachesSliderOptions = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    init: false,
    pagination: {
      el: `.${COACHES_ITEMS}__pagination`,
      type: 'bullets',
      bulletElement: 'button',
      bulletClass: 'pagination__bullet',
      bulletActiveClass: 'pagination__bullet--active',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 26,
        ...coachesNavigate
      },
      768: {
        slidesPerView: 1.3,
        spaceBetween: 26,
        ...coachesNavigate
      },
      // 600: {
        // slidesPerView: 1.3,
        // spaceBetween: 16,
      // }
    }
  }
  const coachesSlider = new Swiper(`.${COACHES_ITEMS}`, coachesSliderOptions)

  writeCounterInElement(`.${COACHES_ITEMS} [data-counter]`)

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

  if (window.innerWidth > 768) coachesSlider.on('init slideChange', coachesSliderChange)

  function adaptiveForSliderCoaches() {
    if (window.innerWidth <= 1024 && coachesSlider.eventsListeners?.slideChange?.length) {
      coachesSlider.off('slideChange', coachesSliderChange)
      addClassOnSwiper(coachesSlider.slides, 'border-for-item')
      addClassOnSwiper(coachesSlider.slides, 'shadow-for-item')
    } else if (window.innerWidth > 1024 && !coachesSlider.eventsListeners?.slideChange?.length) {
      coachesSlider.on('slideChange', coachesSliderChange)
    }
  }

  function adaptiveForCoachesButton() {

    const coachesButtons = document.querySelectorAll('.coaches-item__button')

    if (window.innerWidth <= 768 && !coachesButtons[0].classList.contains('button--circle')) {
      coachesButtons.forEach((button, i) => {
        window.localStorage.setItem(i, button.textContent)
        button.textContent = ''
        button.classList.add('button--circle', 'icon', 'icon-arrow')
      })
    } else if (window.innerWidth > 768 && coachesButtons[0].classList.contains('button--circle')) {
      coachesButtons.forEach((button, i) => {
        button.textContent = window.localStorage.getItem(i) !== '' && window.localStorage.getItem(i)
        button.classList.remove('button--circle', 'icon', 'icon-arrow')
      })
    }
  }



  function adaptiveCoachesPagination() {
    const coachesPagination = document.querySelector(`.${COACHES_ITEMS}__pagination`)
    if (window.innerWidth <= 768 && coachesPagination.classList.contains('pagination--fraction')) {
      coachesPagination.classList.add('pagination--bullet')
      coachesPagination.classList.remove('pagination--fraction', 'swiper-pagination-custom')
      updateForSwiper(coachesSlider, 'pagination')



    } else if (window.innerWidth > 768 && coachesPagination.classList.contains('pagination--bullet')) {
      coachesPagination.classList.add('pagination--fraction')
      coachesPagination.classList.remove('pagination--bullet')
      updateForSwiper(coachesSlider, 'pagination')
      updateForSwiper(coachesSlider, 'navigation')
    }

  }
  adaptiveCoachesPagination()
  coachesSlider.init()

  if (window.innerWidth <= 768) {
    addClassOnSwiper(coachesSlider.slides, 'shadow-for-item')
    addClassOnSwiper(coachesSlider.slides, 'border-for-item')
  }

  // Main 
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
    $servicesItems.classList.add('services-items--disable-flex')
    servicesSlider = new Swiper(`.${SERVICES_ITEMS} `, servicesSliderOptions)
  }

  function initServicesSliderOnAdaptive(breakpoint /* number */, sliderSwiper /* string selector */, options /* object SwiperOptions*/) {
    if (window.innerWidth <= breakpoint && (!servicesSlider || servicesSlider?.destroyed)) servicesSlider = new Swiper(sliderSwiper, options)
    if (window.innerWidth > breakpoint && servicesSlider?.initialized && document.querySelector(sliderSwiper).children[0].children.length < 4) servicesSlider.destroy()
  }

  adaptiveForCoachesButton()
  initServicesSliderOnAdaptive(920, `.${SERVICES_ITEMS} `, servicesSliderOptions)
  adaptiveHeader($headerContainer, childrenForAppendArray)

  ARRAY_EVENTS_FOR_MOBILE.forEach(e => window.addEventListener(e, () => {
    adaptiveHeader($headerContainer, childrenForAppendArray)
    initServicesSliderOnAdaptive(920, `.${SERVICES_ITEMS} `, servicesSliderOptions)
    adaptiveForSliderCoaches()
    adaptiveForCoachesButton()
    adaptiveCoachesPagination()

  }))

  $burgerBtn.addEventListener('click', () => {
    scrollHiddenBody()
    toggler(toggleClass)
  })

})