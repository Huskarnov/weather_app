export { populate };
import rain from "/ressources/images/rain.svg";
import clear from "/ressources/images/clear-day.svg";
import cloud from "/ressources/images/cloudy.svg";
import dust from "/ressources/images/dust.svg";
import fog from "/ressources/images/fog.svg";
import hail from "/ressources/images/hail.svg";
import haze from "/ressources/images/haze.svg";
import hurricane from "/ressources/images/hurricane.svg";
import overcast from "/ressources/images/overcast.svg";
import snow from "/ressources/images/snow.svg";
import wind from "/ressources/images/wind.svg";

const todayCast = document.querySelector(".todayCast");
const city = document.querySelector(".city");
const todayDateHoure = document.querySelector(".todayDateHoure");
const todayState = document.querySelector(".todayState > p");

function populate(data) {
  city.textContent = data.resolvedAddress;
  const date = new Date(data.days[0].datetimeEpoch);
  todayDateHoure.textContent = `${numberToDay(date.getDay())}, ${
    data.days[0].datetime
  }`;
  todayState.textContent = data.days[0].conditions;
  todayCast.style.backgroundImage = selectBackground(data.days[0].conditions);
  //   todayCast.style.backgroundImage = `url(${rain})`;
}

function numberToDay(number) {
  switch (number) {
    case 7:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thirsday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
  }
}

function selectBackground(conditions) {
  if (`${conditions}`.includes("cloud")) {
    todayCast.style.backgroundImage = `url(${rain})`;
  }

  //   switch (conditions) {
  //     case `${conditions}`.includes("cloud"):
  //       todayCast.style.backgroundImage = `url(${rain})`;
  //       break;
  //     case 1:
  //       todayCast.style.backgroundImage = `url(${rain})`;
  //       break;
  //     case 2:
  //       todayCast.style.backgroundImage = `url(${rain})`;
  //       break;
  //     case 3:
  //       todayCast.style.backgroundImage = `url(${rain})`;
  //       break;
  //     case 4:
  //       todayCast.style.backgroundImage = `url(${rain})`;
  //       break;
  //     case 5:
  //       todayCast.style.backgroundImage = `url(${rain})`;
  //       break;
  //     case 6:
  //       todayCast.style.backgroundImage = `url(${rain})`;
  //       break;
  //     default:
  //       todayCast.style.backgroundImage = `url(${clear})`;
  //   }
}
