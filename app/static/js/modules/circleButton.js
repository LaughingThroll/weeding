function createCircleButton(elements /* Array[HTMLElements] */) {
  if (!elements[0].classList.contains('button--circle')) {
    elements.forEach((button, i) => {
      window.localStorage.setItem(i, button.textContent)
      button.textContent = ''
      button.classList.add('button--circle', 'icon', 'icon-arrow')
    })
  }
}

function destroyCircleButton(elements /* Array[HTMLElements] */) {
  if (elements[0].classList.contains('button--circle')) {
    elements.forEach((button, i) => {
      button.textContent = window.localStorage.getItem(i) !== '' && window.localStorage.getItem(i)
      button.classList.remove('button--circle', 'icon', 'icon-arrow')
    })
  }
}

export { createCircleButton, destroyCircleButton }