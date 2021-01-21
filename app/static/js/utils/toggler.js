// eslint-disable-next-line no-unused-vars
const toggler = object/* { [class]: HTMLElement } */ => e /* Event */ =>  { /* Event */
  const classes = Object.keys(object)
  Object.values(object).forEach((el, i) => el.classList.toggle(classes[i]))
}

export default toggler