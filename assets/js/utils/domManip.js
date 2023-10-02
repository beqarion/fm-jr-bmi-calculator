import get from "./getElement.js"
import numFromStr from "./extractNum.js"
import { debounce } from "./throttlDebounce.js"
import { targetColorChange } from "../animations/initialAnim.js"
import {
  calcBmiMetric,
  calcBmiImperial,
  bmiStatus,
  healthyRangeMetric,
  healthyRangeImperial,
} from "./calculations.js"

// unit UI switch [hide/show, etc.]
const metricInputsDOM = get("#metric")
const imperialInputsDOM = get("#imperial")
const metricRadioDOM = get("#metric-btn")
const imperialRadioDOM = get("#imperial-btn")

// inputs DOM
const cmDOM = get("#cm")
const kgDOM = get("#kg")
const ftDOM = get("#feets")
const inDOM = get("#inches")
const stDOM = get("#stones")
const lbsDOM = get("#pounds")

// results container
const results = get("#result")

export const clearAllInputs = () => {
  ;[cmDOM, kgDOM, ftDOM, inDOM, stDOM, lbsDOM].forEach((el) => {
    el.value = ""
  })
}

// select metric UI unit system
export const selectMetric = () => {
  metricRadioDOM.checked = true
  imperialInputsDOM.classList.add("hidden")
  metricInputsDOM.classList.remove("hidden")
  localStorage.setItem("unitsBMI", "metric")
}

// select imperial UI unit system
export const selectImperial = () => {
  imperialRadioDOM.checked = true
  imperialInputsDOM.classList.remove("hidden")
  metricInputsDOM.classList.add("hidden")
  localStorage.setItem("unitsBMI", "imperial")
}

// define which unit is chosen, first checking the 'localStorage' then radio UI button
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
export function handleKeyUp() {
  let bmi
  let status
  const unit = whichUnitChosen()
  if (unit === "metric") {
    // CASE: Metric
    const cm = numFromStr(cmDOM.value)
    const kg = numFromStr(kgDOM.value)
    bmi = calcBmiMetric(cm, kg)
    status = bmiStatus(bmi)
    const range = healthyRangeMetric(cm)

    updateResults(bmi, status, range)
  } else if (unit === "imperial") {
    // CASE: Imperial
    const ft = numFromStr(ftDOM.value) || 0
    const inch = numFromStr(inDOM.value) || 0
    const st = numFromStr(stDOM.value) || 0
    const lbs = numFromStr(lbsDOM.value) || 0

    const inches = inch + 12 * ft
    debounce(() => {
      if (inch >= 12) {
        ftDOM.value = Math.floor(inches / 12) || ""
        targetColorChange(ftDOM, "#00ff00")
        inDOM.value = inches % 12 || ""
      }
    }, 3000)()

    const pounds = lbs + 14 * st
    debounce(() => {
      if (lbs >= 14) {
        stDOM.value = Math.floor(pounds / 14) || ""
        lbsDOM.value = pounds % 14 || ""
      }
    }, 3000)()

    bmi = calcBmiImperial(inches, pounds)
    status = bmiStatus(bmi)
    const range = healthyRangeImperial(inches)

    updateResults(bmi, status, range)
  }
  if (!bmi) {
    return startingResult()
  }
}

function updateResults(bmi, bmiStatus, range) {
  results.innerHTML = `
    <div class="sm:flex-1 flex flex-col gap-2">
      <h4 class="text-custom-white font-semibold">
        Your BMI is...
      </h4>
      <h3
        id="bmi-result-num"
        class="text-custom-white -tracking-[2.4px] lg:-tracking-[3.2px] leading-[52.8px] lg:leading-[70.4px] text-5xl lg:text-[64px] font-semibold"
      >
        ${bmi}
      </h3>
  </div>
  <p
    class="sm:flex-1 text-custom-white text-[14px] leading-[21px]"
  >
    Your BMI suggests you're
    <span id="bmi-result-verbal">${bmiStatus}</span> Your
    ideal weight is between
    <span
      id="weight-range"
      class="font-bold"
      >${range}</span
    >.
  </p>
  `
}
function startingResult() {
  results.innerHTML = `
    <div class="flex flex-col gap-4">
      <h2
        class="text-2xl text-custom-white font-semibold leading-[29px] -tracking-[1.2px]"
      >
        Welcome!
      </h2>
      <p class="text-[14px] text-custom-white leading-[21px]">
        Enter your height and weight and you’ll see your BMI result
        here
      </p>
  </div>  
  `
}
