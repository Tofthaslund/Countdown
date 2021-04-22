const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
];

const dateNy = document.querySelector('.date-ny');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2021,11,30,7,30,0);
console.log(futureDate);
// year
const year = futureDate.getFullYear();
// hours
const hours = futureDate.getHours();
// Minutes
const minutes = futureDate.getMinutes();
// Month
let month = futureDate.getMonth();
month = months[month]
// Get date of month
const date = futureDate.getDate();
// weekday
const weekday = weekdays[futureDate.getDay()];


dateNy.textContent = `New Years eve party starts ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes}pm`