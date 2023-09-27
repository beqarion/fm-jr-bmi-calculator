const getElement = (query) => {
  let el
  if (query instanceof Array) {
    el = document.querySelectorAll(query[0])
  } else {
    el = document.querySelector(query)
  }
  if (!el) {
    throw new Error(`no result for query - ${query}`)
  }
  return el
}

export default getElement
