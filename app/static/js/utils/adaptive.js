export default function adaptive(maxWidthFn, minWidthFn, breakpoint) {
  return function() {
    if (window.innerWidth <= breakpoint) maxWidthFn()
    if (window.innerWidth > breakpoint) minWidthFn()
  }
}