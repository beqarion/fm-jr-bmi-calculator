export function throttle(func, delay) {
  let lastCall = 0
  return function (...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    func(...args)
  }
}

export function debounce(func, delay) {
  let timerId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timerId)
    timerId = setTimeout(function () {
      func.apply(context, args)
    }, delay)
  }
}
