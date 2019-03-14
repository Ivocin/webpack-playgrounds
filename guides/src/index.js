import _ from 'lodash';
import Data from './data.xml';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  console.log(Data);

  return element;
}

document.body.appendChild(component());