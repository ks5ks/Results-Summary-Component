"use strict";

const processResults = async function () {
  const response = await (await fetch("./data.json")).text();
  const data = JSON.parse(response);

  // loop through the data array
  //    build the html and compute the average
  let avgScore = 0;
  let html = "";
  let categoryClass = "";

  data.forEach((item) => {
    avgScore += item.score; // accumulate the average

    // build the html string
    categoryClass = item.category.toLowerCase();
    html += `<div class="subtotal ${categoryClass}">
      <img src="${item.icon}" alt="Category icon" />
      <div class="subtotal-description"><strong>${item.category}</strong>
        </div>
      <div class="score"><strong>${item.score}</strong> / 100</div>
    </div>`;
  });

  // display the summary data
  const summaryDisplay = document.querySelector(".summary-header");
  summaryDisplay.insertAdjacentHTML("afterend", html);

  // finalize and display the average score
  avgScore = Math.round(avgScore / 4);
  const displayAvgScore = document.querySelector(".result-you");
  displayAvgScore.innerHTML = avgScore;
};
processResults();
