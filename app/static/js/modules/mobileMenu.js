import insertChildrens from '../utils/insertChildrens'

function createMobileMenu(parent /* HTMLElement */, childrens /* Array[HTMLElement] */) {
  if (document.querySelector('.mobile-menu')) return

  const $mobileMenu = document.createElement('div')
  const $mobileTitle = document.createElement('div')
  const $mobileBackground = document.createElement('div')

  $mobileMenu.classList.add('mobile-menu')
  $mobileTitle.classList.add('mobile-menu__title')
  $mobileBackground.classList.add('mobile-menu__background')

  $mobileTitle.textContent = $mobileBackground.textContent = document.querySelector('[data-mobile-word]').dataset.mobileWord

  $mobileMenu.appendChild($mobileTitle)
  $mobileMenu.appendChild($mobileBackground)

  insertChildrens($mobileMenu, childrens)

  parent.appendChild($mobileMenu)
}

function destroyMobileMenu(parent /*HTML Element */, childrens /* Array[HTMLElement] */) {
  const $mobileMenu = document.querySelector('.mobile-menu')
  if (!$mobileMenu) return
  insertChildrens(parent, childrens)

  $mobileMenu.remove()
}


export { createMobileMenu, destroyMobileMenu }