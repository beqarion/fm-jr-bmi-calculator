import get from "./utils/getElement.js"
import {
  clearAllInputs,
  selectMetric,
  selectImperial,
  initialUnitUI,
  handleKeyUp,
  throttledKeyUpHandler,
} from "./utils/domManip.js"
import { startingAnimations } from "./animations/initialAnim.js"
import { throttledScrollAnimation } from "./animations/functions/scrollAnimation.js"
// unit switch elements
const metricRadioDOM = get("#metric-btn")
const imperialRadioDOM = get("#imperial-btn")

const formDOM = get("#bmi-form")

// events
metricRadioDOM.addEventListener("click", () => {
  selectMetric()
  clearAllInputs()
})
imperialRadioDOM.addEventListener("click", () => {
  selectImperial()
  clearAllInputs()
})

window.addEventListener("DOMContentLoaded", () => {
  initialUnitUI()
  startingAnimations()
  window.addEventListener("scroll", throttledScrollAnimation)
})
formDOM.addEventListener("keyup", handleKeyUp)
formDOM.addEventListener("click", handleKeyUp)
