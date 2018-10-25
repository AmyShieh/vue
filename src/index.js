import _ from 'lodash'
import printMe from './print.js'

function component() {
  const element = document.getElementById("app");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["hello", "webpack"], ' ');
  btn.innerHTML = "click me and check the console";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element
}

component();