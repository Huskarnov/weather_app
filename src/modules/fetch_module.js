import { populate } from "./populate_elements_module";

const main = document.querySelector("main");
const searchForm = document.querySelector(".searchForm");
const loader = document.querySelector(".loader");

// MRS6M7KMEV78MFG3967BMDGGN

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=MRS6M7KMEV78MFG3967BMDGGN
// 38.9697,-77.385
// 2020-10-19 2020-12-15T13:00:00 last30days
// &unitGroup=metric
// lang=en
// include:alerts,events,hours  (excludes others)
// --------------
// FPSX7eade01f5d1f481982c01b066e51b5bc
// https://api.freepik.com/v1/ai/text-to-icon

async function getData(city) {
  loader.style.display = "block";
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=MRS6M7KMEV78MFG3967BMDGGN&unitGroup=metric&include=current,hours`,
      { mode: "cors" }
    );

    const parsedResponse = await response.json();
    console.log(`%c Data:`, `color: green; font-weight: bold`);
    console.time();
    console.log(parsedResponse);
    console.timeEnd();

    populate(parsedResponse);
  } catch (error) {
    errorHandler(error);
  }
  loader.style.display = "none";
  main.style.display = "flex";
}

function errorHandler(error) {
  console.trace(`${error}`);
  alert(`This city is outside earth, no data`);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const input = formData.get("city");
  getData(input);
});

getData("tokyo");
