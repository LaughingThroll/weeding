import './utils/modernizr'
import { createMobileMenu, destroyMobileMenu } from './modules/mobileMenu'

window.addEventListener('DOMContentLoaded', function() {
  
  const $content = document.querySelector('.content')
  const $headerContainer = document.querySelector('.header__container')
  const $mainMenu = document.querySelector('.main-menu')
  const $headerBtn = document.querySelector('.header__button')

  function adaptiveMobileMenu( parentTo /* HTMLElement */, parentFrom /* HTMLElement */, ...children /* HTMLElement */) {
    if (window.innerWidth <= 768) createMobileMenu(parentTo, ...children) 
    if (window.innerWidth > 768) destroyMobileMenu(parentFrom, ...children)
  }

  adaptiveMobileMenu($content, $headerContainer, $mainMenu, $headerBtn)
  window.addEventListener('resize', adaptiveMobileMenu.bind(this, $content, $headerContainer, $mainMenu, $headerBtn))

})






