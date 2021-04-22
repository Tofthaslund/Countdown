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

// furture timein ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1day = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour );
    let min = Math.floor((t % oneHour) / oneMinute);
    let sec = Math.floor((t % oneMinute) / 1000);
    
    // Set values array
    const values = [days,hours,min,sec];

    // sets a 0 if number is less than 10
    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item;
    }


    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry the party is over</h4>`
    }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();
