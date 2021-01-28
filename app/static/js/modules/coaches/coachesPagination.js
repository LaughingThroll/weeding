import { updateForSwiper } from '../../utils/fnForSwiper'

// this functions need refactoring and splitting logics 
export function createBulletPaginationForCoaches(swiperSlider /* Swiper */, paginationElement /* HTMLElement */) {
  if (paginationElement.classList.contains('pagination--fraction')) {
    paginationElement.classList.add('pagination--bullet')
    paginationElement.classList.remove('pagination--fraction', 'swiper-pagination-custom')
    updateForSwiper(swiperSlider, 'pagination')
  }
}

export function createFractionPaginationForCoaches(swiperSlider /* Swiper */, paginationElement /* HTMLElement */) {
  if (paginationElement.classList.contains('pagination--bullet')) {
    paginationElement.classList.add('pagination--fraction')
    paginationElement.classList.remove('pagination--bullet')
    updateForSwiper(swiperSlider, 'pagination')
    updateForSwiper(swiperSlider, 'navigation')
  }
}

