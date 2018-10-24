import _ from 'lodash'
import './style.css';
import bear from "./bear.jpeg";

function component() {
  const element = document.getElementById("app")
  element.innerHTML = _.join(["hello", "webpack"], ' ');
  element.classList.add("hello");

  const myBear = new Image();
  myBear.src = bear;
  element.appendChild(myBear);

  return element
}

component();