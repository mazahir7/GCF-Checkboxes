"use strict";
console.log("JavaScript is working!");


const checkBoxes = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");

const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");


checkBoxes.forEach(box => {
  box.addEventListener("click", function (e) {
    checkTheBoxes(e.target);
  });
});

labels.forEach(label => {
  label.addEventListener("click", function () {
    label.classList.toggle("active");
  });
});

const checkTheBoxes = function (checkedBox) {
  if (good.checked && cheap.checked && fast.checked) {

    if (checkedBox === good) {
      fast.checked = false;
      fast.nextElementSibling.classList.toggle("active");
    }

    if (checkedBox === cheap) {
      good.checked = false;
      good.nextElementSibling.classList.toggle("active");
    }

    if (checkedBox === fast) {
      cheap.checked = false;
      cheap.nextElementSibling.classList.toggle("active");
    }
  }
}