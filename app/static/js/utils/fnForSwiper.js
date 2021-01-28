export function removeClassOnSwiper(slides /* Array[HTMLElement] with Swiper slider only */, className /* string */) {
  if (slides.hasClass(className)) slides.removeClass(className)
}

export function addClassOnSwiper(slides /* Array[HTMLElement] with Swiper slider only */, className /* string */) {
  slides.forEach(slide => {
    if (!slide.classList.contains(className)) slide.classList.add(className)
  })
}

export function updateForSwiper(swiperSlider /* @Swiper */, module /* string navigation | pagination */) {
  swiperSlider[module].destroy()
  if (module === 'pagination') swiperSlider[module].render()
  swiperSlider[module].init()
  swiperSlider[module].update() 
}
 
