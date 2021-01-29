
import insertChildrens from '../utils/insertChildrens'
// this procedures only for this header need refactoring
function maxWidthHeader(menu /*HTML Element */, childrens /* Array[HTMLElement] */, headerBtn /* $headerBtn */) {
  const $mobileMenu = document.querySelector('.mobile-menu')
  if (Array.from($mobileMenu.children).includes(menu)) return
  if (!headerBtn.classList.contains('mobile-menu__button')) headerBtn.classList.add('mobile-menu__button')
  insertChildrens($mobileMenu, childrens)
}

function minWidthHeader(parentTo /*HTML Element */, menu /*HTML Element */,  childrens /* Array[HTMLElement] */, headerBtn /* $headerBtn */) {
  const $mobileMenu = document.querySelector('.mobile-menu')
  if (!Array.from($mobileMenu.children).includes(menu)) return
  if (headerBtn.classList.contains('mobile-menu__button')) headerBtn.classList.remove('mobile-menu__button')
  insertChildrens(parentTo, childrens)
}


export { maxWidthHeader, minWidthHeader }
