export default function writeCounterInElement(selector /* string */) {
  document.querySelectorAll(selector).forEach((el, i) => el.textContent = `0${i + 1}`)
}

