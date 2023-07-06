'use strict';

window.onload = function () { document.body.classList.remove('is-preload'); }
window.ontouchmove = function () { return false; }
window.onorientationchange = function () { document.body.scrollTop = 0; }
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let random = getRandomIntInclusive(1, 4)
const bgImage = document.querySelector('#bg');

bgImage.classList.add(`bg${random}`)

function writeTextByJS(id, text, speed) {

  var ele = document.getElementById(id),
    txt = text.join("").split("");

  var interval = setInterval(function () {

    if (!txt[0]) {

      return clearInterval(interval);
    };

    ele.innerHTML += txt.shift();
  }, speed != undefined ? speed : 50);

  return false;
};

setTimeout( () =>
  writeTextByJS(
  "demo",
  [
    "© Created by Vadym Prydatok",
  ]
), 5000
)
