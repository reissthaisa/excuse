/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumber(limit) {
  const mathRandomNumber = Math.random();
  const randomInteger = Math.floor(mathRandomNumber * limit);
  return randomInteger;
}

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const excuse = [
    who[randomNumber(3)],
    action[randomNumber(3)],
    what[randomNumber(2)],
    when[randomNumber(4)]
  ].join(" ");
  document.getElementById("excuse").innerHTML = excuse;
};
