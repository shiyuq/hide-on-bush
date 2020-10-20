/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1000) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.getElementById(id).remove()
  }, timeout)
}
