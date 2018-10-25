import _ from 'lodash'

function component() {
  const element = document.getElementById("app");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["hello", "webpack"], ' ');
  btn.innerHTML = "click me and check the console";
  element.appendChild(btn);

  return element
}

component();