export const calcBmiMetric = (height, weight) => {
  height /= 100
  const actualBMI = weight / (height * height)
  return Math.round(actualBMI * 10) / 10
}

export const calcBmiImperial = (height, weight) => {
  const actualBMI = (weight / (height * height)) * 703
  return Math.round(actualBMI * 10) / 10
}

export const healthyRangeMetric = (cm) => {
  const weightLow = 18.5 * Math.pow(cm / 100, 2)
  const roundedWeightLow = Math.round(weightLow * 10) / 10

  const weightHigh = 24.9 * Math.pow(cm / 100, 2)
  const roundedWeightHigh = Math.round(weightHigh * 10) / 10

  return `${roundedWeightLow}kgs - ${roundedWeightHigh}kgs`
}

export const healthyRangeImperial = (inches) => {
  const weightLow = (18.5 * Math.pow(inches, 2)) / 703
  const roundedWeightLow = Math.round(weightLow * 10) / 10

  const weightHigh = (24.9 * Math.pow(inches, 2)) / 703
  const roundedWeightHigh = Math.round(weightHigh * 10) / 10

  return `${stonesAndPounds(roundedWeightLow).stones}st ${
    stonesAndPounds(roundedWeightLow).pounds
  }lbs - ${stonesAndPounds(roundedWeightHigh).stones}st ${
    stonesAndPounds(roundedWeightHigh).pounds
  }lbs`
}

export function feetAndInches(inches) {
  return {
    feet: Math.floor(inches / 12),
    inches: Math.round((inches % 12) * 10) / 10,
  }
}

export function stonesAndPounds(pounds) {
  return {
    stones: Math.floor(pounds / 14),
    pounds: Math.round((pounds % 14) * 10) / 10,
  }
}

export function bmiStatus(bmi) {
  if (bmi < 18.5) {
    return "underweight"
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "healthy weight"
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "overweight"
  } else {
    return "obese"
  }
}
