import anime from "animejs/lib/anime.es.js"

const sections = document.querySelectorAll(".section")

export function handleScroll() {
  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect()

    if (sectionRect.bottom >= 0 && sectionRect.top <= window.innerHeight) {
      // anime({
      //   targets: section,
      //   opacity: [0, 1],
      //   translateY: ["-50px", 0],
      // })
    } else {
      // section.classList.add("invisible")
    }
  })
}
