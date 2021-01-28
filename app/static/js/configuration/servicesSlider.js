import { SERVICES_ITEMS } from './const'

export const servicesSliderOptions = {
  slidesPerView: 'auto',
  spaceBetween: 12,
  breakpoints: {
    920: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  },
  pagination: {
    el: `.${SERVICES_ITEMS}__pagination`,
    type: 'bullets',
    bulletElement: 'button',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active',
    clickable: true
  }
}