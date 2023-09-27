import get from "./getElement.js"

// unit UI switch
const metricInputsDOM = get("#metric")
const imperialInputsDOM = get("#imperial")
const metricRadioDOM = get("#metric-btn")
const imperialRadioDOM = get("#imperial-btn")

// inputs DOM
const cmDOM = get("#cm")
const gkDOM = get("#kg")
const ftDOM = get("#feets")
const inDOM = get("#inches")
const stDOM = get("#stones")
const lbsDOM = get("#pounds")

export const clearAllInputs = () => {
  ;[cmDOM, gkDOM, ftDOM, inDOM, stDOM, lbsDOM].forEach((el) => {
    el.value = ""
  })
}

export const selectMetric = () => {
  metricRadioDOM.checked = true
  imperialInputsDOM.classList.add("hidden")
  metricInputsDOM.classList.remove("hidden")
  localStorage.setItem("unitsBMI", "metric")
}

export const selectImperial = () => {
  imperialRadioDOM.checked = true
  imperialInputsDOM.classList.remove("hidden")
  metricInputsDOM.classList.add("hidden")
  localStorage.setItem("unitsBMI", "imperial")
}

export const whichUnitChosen = () => {
  const storageUnit = localStorage.getItem("unitsBMI")
  const domUnit = [metricRadioDOM, imperialRadioDOM].reduce((acc, el) => {
    if (el.checked) {
      acc = el.value
    }
    return acc
  }, "")
  return storageUnit ? storageUnit : domUnit
}
export const initialUnitUI = () => {
  const unit = whichUnitChosen()
  if (unit) {
    switch (unit) {
      case "metric":
        selectMetric()
        break
      case "imperial":
        selectImperial()
        break
    }
  }
}
