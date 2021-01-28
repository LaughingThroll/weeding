import { COACHES_ITEMS } from './const'

const coachesNavigate = {
  pagination: {
    el: `.${COACHES_ITEMS}__pagination`,
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return `<span class="pagination__frag pagination__current">${current}</span>  of  <span class="pagination__frag pagination__total">${total}</span>`
    }
  },
  navigation: {
    nextEl: '.slider-arrow--right',
    prevEl: '.slider-arrow--left',
    disabledClass: 'slider-arrow--disabled'
  },
}

export const coachesSliderOptions = {
  slidesPerView: 1.2,
  spaceBetween: 16,
  init: false,
  pagination: {
    el: `.${COACHES_ITEMS}__pagination`,
    type: 'bullets',
    bulletElement: 'button',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active',
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 28,
      ...coachesNavigate
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 26,
      ...coachesNavigate
    },
  }
}