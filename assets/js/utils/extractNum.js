const extractNumFromString = (str) => {
  return str
    .split("")
    .map((char) => {
      if (!isNaN(char)) {
        return char
      }
    })
    .join("")
}

export default extractNumFromString
