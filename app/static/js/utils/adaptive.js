export default function adaptive(maxWidthFn /* typeof Function */, minWidthFn /* typeof Function */, breakpoint /* number */) {
  return function() {
    if (window.innerWidth <= breakpoint) maxWidthFn()
    if (window.innerWidth > breakpoint) minWidthFn()
  }
}