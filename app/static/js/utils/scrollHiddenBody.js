 const scrollHiddenBody = () => {
  let scrollY = window.scrollY

  if (!document.body.classList.contains('overflow-hidden')) {
    
    document.body.classList.add('overflow-hidden')
    document.body.dataset.position = scrollY
    document.body.style.top = -scrollY + 'px'

  } else {
    let position = parseInt(document.body.dataset.position)
    document.body.classList.remove('overflow-hidden')
    document.body.style.top = 'auto'
    window.scroll({
      top: position,
      left: 0
    })
    document.body.removeAttribute('data-position')
  }



}
export default scrollHiddenBody