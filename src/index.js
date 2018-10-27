/*!*
 *
 * @authors crlang (https://www.darlang.com)
 * @date    2018-05-18 15:22:15
 * @version 1.0
 */

// import js
import { addNewHi, lll } from "./js/utils.js"

// import css
import "./css/style.css"

// import font css
import "./fonts/da-font.css"

// import sass
import "./css/index.scss"

// something code
!(() => {
  // normal javscript
  document.body.appendChild(addNewHi())
  let HW = document.getElementsByClassName("hello-world")[0]
  HW.innerHTML = lll + HW.innerHTML
})()
