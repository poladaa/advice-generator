"use strict";
const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("advicetext");
const searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceNum = adviceData.slip.id;
      const advice = adviceData.slip.advice;

      adviceId.textContent = adviceNum;
      adviceText.textContent = advice;

      // adviceId.textContent = adviceData.slip.id;
      // adviceText.textContent = adviceData.slip.advice;
    })
    .catch((error) => {
      console.log(error);
    });
});
