import { createMobileMenu, destroyMobileMenu } from './mobileMenu'

// this procedures only for this header need refactoring
function maxWidthHeader(parent /*HTML Element */, childrens /* Array[HTMLElement] */, headerBtn /* $headerBtn */) {
  createMobileMenu(parent, childrens)
  if (!headerBtn.classList.contains('mobile-menu__button')) headerBtn.classList.add('mobile-menu__button')
}

function minWidthHeader(parent /*HTML Element */, childrens /* Array[HTMLElement] */, headerBtn /* $headerBtn */) {
  destroyMobileMenu(parent, childrens)
  if (headerBtn.classList.contains('mobile-menu__button')) headerBtn.classList.remove('mobile-menu__button')
}


export { maxWidthHeader, minWidthHeader }
