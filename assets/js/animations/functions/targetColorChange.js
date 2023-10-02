import anime from "animejs/lib/anime.es.js"

export const targetColorChange = (el, fromColor) => {
  const ownColor = window.getComputedStyle(el).getPropertyValue("color")

  anime({
    targets: el,
    color: [fromColor, ownColor],
    easing: "easeOutInBounce",
    duration: 1000,
  })
}
