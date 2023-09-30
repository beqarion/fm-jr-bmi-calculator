const extractNumFromString = (str) => {
  const newStr = str
    .split("")
    .map((char) => {
      if (char === "." || !isNaN(char)) {
        return char
      }
    })
    .join("")

  return Number(newStr) === 0 ? NaN : Number(newStr)
}

export default extractNumFromString
