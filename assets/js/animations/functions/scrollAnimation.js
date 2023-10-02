import anime from "animejs/lib/anime.es.js"
import { throttle } from "../../utils/throttlDebounce.js"

const sections = document.querySelectorAll(".section")
sections.forEach((section) => {
  section.style.opacity = 0
})

export function handleScrollAnimated() {
  sections.forEach((section) => {
    const windowHeight = window.innerHeight
    const offsetTop = section.getBoundingClientRect().top
    const appearPoint = 150
    if (offsetTop < windowHeight - appearPoint) {
      anime({
        targets: section,
        opacity: 1,
        translateY: 0,
      })
    } else {
      anime({
        targets: section,
        opacity: 0,
        translateY: "20%",
      })
    }
  })
}

export const throttledScrollAnimation = throttle(handleScrollAnimated, 300)
