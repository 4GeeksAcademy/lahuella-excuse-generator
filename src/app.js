/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateExcuse() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    const quien = who[Math.floor(Math.random() * who.length)];
    const que = action[Math.floor(Math.random() * action.length)];
    const cosa = what[Math.floor(Math.random() * what.length)];
    const cuando = when[Math.floor(Math.random() * when.length)];

    const excusa = `${quien} ${que} ${cosa} ${cuando}.`;

    document.getElementById("excusa").innerHTML = excusa;
  }

  generateExcuse();
  document
    .getElementById("botonExcusa")
    .addEventListener("click", generateExcuse);
};
