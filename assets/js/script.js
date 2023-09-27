import get from "./utils/getElement.js"
import {
  clearAllInputs,
  selectMetric,
  selectImperial,
  initialUnitUI,
} from "./utils/domManip.js"

// unit switch elements
const metricRadioDOM = get("#metric-btn")
const imperialRadioDOM = get("#imperial-btn")

const unit = localStorage.getItem("unit")

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
})
