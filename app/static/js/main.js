import './utils/modernizr'
import insertChildrens from './utils/insertChildrens'
import toggler from './utils/toggler'

window.addEventListener('DOMContentLoaded', function () {

  // const $content = document.querySelector('.content')
  const $mobileMenu = document.querySelector('.mobile-menu')
  const $header = document.querySelector('.header')
  const $headerContainer = $header.querySelector('.header__container')
  const $mainMenu = $header.querySelector('.main-menu')
  const $headerBtn = $header.querySelector('.header__button')
  const $burgerBtn = $header.querySelector('.burger-btn')

  
  const childrenForAppendArray = [$mainMenu, $headerBtn]
  const toggleClass = {
    'header--active': $header,
    'burger-btn--active': $burgerBtn,
    'mobile-menu--active': $mobileMenu
  }


  function adaptiveHeader() {
    if (window.innerWidth <= 768) {
      
      if (Array.from($mobileMenu.children).includes($mainMenu)) return
      childrenForAppendArray[1].classList.add('mobile-menu__button')
      insertChildrens($mobileMenu, childrenForAppendArray)
    
    } else if (window.innerWidth > 768) {

      if (!Array.from($mobileMenu.children).includes($mainMenu)) return
      childrenForAppendArray[1].classList.remove('mobile-menu__button')
      insertChildrens($headerContainer, childrenForAppendArray)
    
    }
  }


  adaptiveHeader()
  window.addEventListener('resize', adaptiveHeader)
  $burgerBtn.addEventListener('click', toggler(toggleClass))


})