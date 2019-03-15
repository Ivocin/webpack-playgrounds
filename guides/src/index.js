import _ from 'lodash';
import Data from './data.xml';
import printMe from './print.js';
import './style.css'

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  
  var myIcon = new Image();
  myIcon.src = './test.svg';
  element.appendChild(myIcon);
  console.log(Data);

  return element;
}

document.body.appendChild(component());