// you must add data-counter in html element in file.html
export default function writeCounterInElement(selector /* string */) {
  document.querySelectorAll(selector).forEach((el, i) => el.textContent = `0${i + 1}`)
}

