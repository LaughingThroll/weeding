import './utils/modernizr'
import Swiper, { Pagination, Navigation } from 'swiper'
import WOW from 'wow.js'
// Const && configurations
import { servicesSliderOptions } from './configuration/servicesSlider'
import { coachesSliderOptions } from './configuration/coachesSlider'
import { ARRAY_EVENTS_FOR_MOBILE, SERVICES_ITEMS, COACHES_ITEMS } from './configuration/const'
// Utils
import toggler from './utils/toggler'
import scrollHiddenBody from './utils/scrollHiddenBody'
import { addClassOnSwiper } from './utils/fnForSwiper'
import adaptive from './utils/adaptive'
import counterInElement from './utils/counterInElement'
// Modules
import { maxWidthHeader, minWidthHeader } from './modules/header'
import { initServicesSlider, destroyServicesSlider } from './modules/services'
import { minWidthCoachesSlider, maxWidthCoachesSlider, coachesSliderChange } from './modules/coaches/coachesSlider'
import { createBulletPaginationForCoaches, createFractionPaginationForCoaches } from './modules/coaches/coachesPagination'
import { createCircleButton, destroyCircleButton } from './modules/circleButton'


window.addEventListener('DOMContentLoaded', function () {

  Swiper.use([Navigation, Pagination])

  new WOW().init()

  const $header = document.querySelector('.header')
  const $headerContainer = $header.querySelector('.header__container')
  const $mainMenu = $header.querySelector('.main-menu')
  const $headerBtn = $header.querySelector('.header__button')
  const $burgerBtn = $header.querySelector('.burger-btn')
  const $mobileMenu = document.querySelector('.mobile-menu')
  const $servicesItems = document.querySelector('.services-items')
  const $coachesButtons = document.querySelectorAll('.coaches-item__button')
  const $coachesPagination = document.querySelector(`.${COACHES_ITEMS}__pagination`)
  let servicesSlider
  
  
  const childrenForAppendArray = [$mainMenu, $headerBtn]

  const toggleClasses = {
    'header--active': $header,
    'burger-btn--active': $burgerBtn,
    'mobile-menu--active': $mobileMenu
  }

  const adaptiveHeader = adaptive(
    maxWidthHeader.bind(this, $mainMenu, childrenForAppendArray, $headerBtn),
    minWidthHeader.bind(this, $headerContainer, $mainMenu, childrenForAppendArray, $headerBtn),
    768
  )

  if ($servicesItems.children[0].children.length >= 4) {
    $servicesItems.classList.add('services-items--disable-flex')
    servicesSlider = new Swiper(`.${SERVICES_ITEMS} `, servicesSliderOptions)
  }

  const adaptiveServices = adaptive(
    initServicesSlider.bind(this, servicesSlider, `.${SERVICES_ITEMS}`, servicesSliderOptions),
    destroyServicesSlider.bind(this, servicesSlider, `.${SERVICES_ITEMS}`),
    920
  )

  const coachesSlider = new Swiper(`.${COACHES_ITEMS}`, coachesSliderOptions)

  counterInElement(`.${COACHES_ITEMS} [data-counter]`)

  if (window.innerWidth > 768) coachesSlider.on('init slideChange', coachesSliderChange)

  const adaptiveCoachesButton = adaptive(
    createCircleButton.bind(this, $coachesButtons),
    destroyCircleButton.bind(this, $coachesButtons),
    768)

  const adaptiveCoachesSlider = adaptive(
    maxWidthCoachesSlider.bind(this, coachesSlider, coachesSliderChange),
    minWidthCoachesSlider.bind(this, coachesSlider, coachesSliderChange),
    1024)
    
  const adaptiveCoachesPagination = adaptive(
    createBulletPaginationForCoaches.bind(this, coachesSlider, $coachesPagination),
    createFractionPaginationForCoaches.bind(this, coachesSlider, $coachesPagination),
    768)

  adaptiveCoachesPagination()
  coachesSlider.init()

  if (window.innerWidth <= 768) {
    addClassOnSwiper(coachesSlider.slides, 'shadow-for-item')
    addClassOnSwiper(coachesSlider.slides, 'border-for-item')
  }

  adaptiveServices()
  adaptiveHeader()
  adaptiveCoachesButton()

  ARRAY_EVENTS_FOR_MOBILE.forEach(e => window.addEventListener(e, () => {
    adaptiveHeader()
    adaptiveServices()
    adaptiveCoachesSlider()
    adaptiveCoachesButton()
    adaptiveCoachesPagination()
  }))

  $burgerBtn.addEventListener('click', () => {
    scrollHiddenBody()
    toggler(toggleClasses)
  })
})
