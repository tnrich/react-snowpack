/* Add JavaScript code here! */
import {render} from 'react-dom'
import React from 'react'
import App from '../src/App'
import { FaBeer } from 'react-icons/fa';

console.log('Hello World! You did! Welcome to Snowpack :D');


render(<Demo />, document.querySelector("#demo"));

function Demo () {
  return <div>heyyee  <FaBeer /> eee <App></App></div>
}
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
 // Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
 if (import.meta.hot) {
  import.meta.hot.accept();
}