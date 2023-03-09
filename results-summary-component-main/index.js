"use strict";

const getResults = async function () {
  const response = await fetch("./data.json");
  const data = await response.text();
  console.log(data);
};

getResults();
