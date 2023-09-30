import get from "./utils/getElement.js"
import {
  clearAllInputs,
  selectMetric,
  selectImperial,
  initialUnitUI,
  handleKeyUp,
} from "./utils/domManip.js"
import { startingAnimations } from "./animations/initialAnim.js"

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
})
formDOM.addEventListener("keyup", handleKeyUp)
formDOM.addEventListener("click", handleKeyUp)
