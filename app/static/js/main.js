import './utils/modernizr'
import { createMobileMenu, destroyMobileMenu } from './modules/mobileMenu'
import toggler from './utils/toggler'
import scrollHiddenBody from './utils/scrollHiddenBody'
import { debounce } from './utils/debounce'

window.addEventListener('DOMContentLoaded', function () {

  const $header = document.querySelector('.header')
  const $headerContainer = $header.querySelector('.header__container')
  const $mainMenu = $header.querySelector('.main-menu')
  const $headerBtn = $header.querySelector('.header__button')
  const $burgerBtn = $header.querySelector('.burger-btn')
 
  const childrenForAppendArray = [$mainMenu, $headerBtn]
  
  const toggleClass = {
    'header--active': $header,
    'burger-btn--active': $burgerBtn
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

  adaptiveHeader($headerContainer, childrenForAppendArray)
  ;['resize', 'orientationchange'].forEach(e => window.addEventListener(e, adaptiveHeader.bind(this, $headerContainer, childrenForAppendArray)))
  
  $burgerBtn.addEventListener('click', () => {
    scrollHiddenBody()
    toggler(toggleClass)
  })

})