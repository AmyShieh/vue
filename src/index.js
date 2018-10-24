function component() {
  const element = document.getElementById("app")
  element.innerHTML = _.join(["hello", "webpack"], '')
  return element
}

component();