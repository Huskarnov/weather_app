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
const todayTemperature = document.querySelector(".todayTemperature");
const todayFeel = document.querySelector(".todayFeel > p:nth-Child(2)");
const todayRain = document.querySelector(".todayRain");
const todayArrow = document.querySelector(".todayArrow");
const windPower = document.querySelector(".windPower");

const futureTop = document.querySelector(".futureTop").children;
const futureMid = document.querySelector(".futureMid").children;
const futureBot = document.querySelector(".futureBot").children;
const hourlyElements = [
  ...Array.from(futureTop),
  ...Array.from(futureMid),
  ...Array.from(futureBot),
];

function populate(data) {
  city.textContent = data.resolvedAddress;
  const date = new Date(data.days[0].datetimeEpoch);
  todayDateHoure.textContent = `${numberToDay(date.getDay())}, ${
    data.days[0].datetime
  }`;
  todayState.textContent = data.days[0].conditions;
  // selectBackground(data.days[0].conditions);
  todayCast.style.backgroundImage = selectBackground(data.days[0].conditions);
  todayTemperature.textContent = `${data.days[0].temp}°C`;
  todayFeel.textContent = `${data.days[0].feelslike}°C`;
  todayRain.textContent = `${data.days[0].precip}mm`;
  todayArrow.style.transform = `rotate(${90 - data.days[0].winddir}deg)`;
  windPower.textContent = `${data.days[0].windspeed} km/h`;

  let currentHour = parseInt(data.currentConditions.datetime.slice(0, 2)) + 3;
  let currentDay = 0;

  hourlyElements.forEach((element, index) => {
    const children = element.children;
    // houre
    children[0].textContent = `${currentHour}:00`;
    // image
    children[1].style.backgroundImage = selectBackground(
      data.days[currentDay].hours[currentHour].conditions
    );
    // state
    children[2].textContent =
      data.days[currentDay].hours[currentHour].conditions;
    // temperature
    children[3].textContent = `${data.days[currentDay].hours[currentHour].temp}°C`;
    // precipitation
    children[4].textContent = `${data.days[currentDay].hours[currentHour].precip}mm`;

    // if (currentHour == 21 || currentHour == 22 || currentHour == 23) {
    //   currentDay = 1;
    // }
    // if (currentHour == 21) {
    //   currentHour = 0;
    // } else if (currentHour == 22) {
    //   currentHour = 1;
    // } else if (currentHour == 23) {
    //   currentHour = 2;
    // } else {
    //   currentHour += 3;
    // }

    if (currentHour >= 21) {
      currentDay = 1;
      currentHour = currentHour - 23 + 2;
    } else {
      currentHour += 3;
    }
  });
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
  if (`${conditions}`.includes("ust")) {
    return `url(${dust})`;
  } else if (`${conditions}`.includes("lear")) {
    return `url(${clear})`;
  } else if (`${conditions}`.includes("ain")) {
    return `url(${rain})`;
  } else if (`${conditions}`.includes("loud")) {
    return `url(${cloud})`;
  } else if (`${conditions}`.includes("og")) {
    return `url(${fog})`;
  } else if (`${conditions}`.includes("ail")) {
    return `url(${hail})`;
  } else if (`${conditions}`.includes("aze")) {
    return `url(${haze})`;
  } else if (`${conditions}`.includes("vercast")) {
    return `url(${overcast})`;
  } else if (`${conditions}`.includes("now")) {
    return `url(${snow})`;
  } else if (`${conditions}`.includes("ind")) {
    return `url(${wind})`;
  } else {
    return `url(${clear})`;
  }
}
