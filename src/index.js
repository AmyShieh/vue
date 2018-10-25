// import _ from 'lodash'
//
// function component() {
//   const element = document.getElementById("app");
//   const btn = document.createElement("button");
//   element.innerHTML = _.join(["hello", "webpack"], ' ');
//   btn.innerHTML = "click me and check the console";
//   element.appendChild(btn);
//
//   return element
// }
//
// component();

// function getComponent() {
//   return import (/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//     var element = document.getElementById("app");
//     var _ = _.default;
//     element.innerHTML = _.join(["hello", "webpack"], " ");
//     return element;
//   }).catch(error => "an error occurred while loading the component");
// }
//
// getComponent().then(component => {
//   console.log(component);
//   document.body.appendChild(component)
// })

async function getComponent() {
  var element = document.createElement('div');
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(["hello","webpack"], " ");
  return element;
}

getComponent()