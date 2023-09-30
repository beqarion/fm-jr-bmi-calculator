import anime from "animejs/lib/anime.es.js"

export const startingAnimations = () => {
  anime
    .timeline({
      easing: "easeOutExpo",
    })
    .add({
      targets: "#nav-logo",
      translateX: ["-200px", 0],
      opacity: [0, 1],
      rotate: [-360, 360],
      duration: 1500,
    })
    .add(
      {
        targets: "#bmi-form",
        translateY: ["-30vh", 0],
        opacity: [0, 1],
        easing: "easeOutElastic",
      },
      "-=700"
    )
    .add(
      {
        targets: "#hero-info",
        opacity: [0, 1],
        translateX: ["-400px", 0],
      },
      "-=700"
    )
    .add(
      {
        targets: "#hero-bg-absolute",
        opacity: [0, 1],
        translateX: ["-100%", 0],
        translateY: ["-100%", 0],
        easing:"easeInOutSine"
      },
      "-=500"
    )
}
