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

async function getData() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/batna?key=MRS6M7KMEV78MFG3967BMDGGN&unitGroup=metric",
      { mode: "cors" }
    );

    const parsedResponse = await response.json();
    console.log(`%c Data:`, `color: green; font-weight: bold`);
    console.time();
    console.log(parsedResponse);
    console.timeEnd();
  } catch (error) {
    errorHandler(error);
  }
}

function errorHandler(error) {
  console.log(`${error}`);
}

getData();
