
const checkLastEventInArray = arr => arr[arr.length - 1].isTrusted

function createMobileMenu( parent /* HTMLElement */, ...children /* HTMLElements */) {
    
  if (document.querySelector('.mobile-menu')) return

  const mobileMenu = document.createElement('div')
  const menu = document.createElement('div')
  const menuBackground =  document.createElement('div')
  const word = 'menu'
  
  mobileMenu.classList.add('mobile-menu')
  menu.classList.add('mobile-menu__menu')
  menuBackground.classList.add('mobile-menu__background')
  
  menu.textContent = menuBackground.textContent = word
  
  mobileMenu.appendChild(menu)
  mobileMenu.appendChild(menuBackground)
  
  checkLastEventInArray(children) && children.pop()

  children.forEach(child => mobileMenu.appendChild(child))
  
  parent.insertAdjacentElement('afterbegin', mobileMenu)
}

function destroyMobileMenu(parent/* HTMLElement */, ...children/* HTMLElements */) {
  const mobileMenu = document.querySelector('.mobile-menu')
  if (mobileMenu) {

    checkLastEventInArray(children) && children.pop()

    children.forEach(child => parent.appendChild(child))
    mobileMenu.remove()
  }
}

export { createMobileMenu, destroyMobileMenu }