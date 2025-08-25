// initiallize and assign the arrayh of days and months
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(() => {
    // take new date and seprated by hr,min and sec
    let date = new Date();
    let hr = date.getHours(); // 0-23
    let min = date.getMinutes(); // 0-59
    let sec = date.getSeconds(); // 0-59

    let day = date.getDay(); // 0-6 // 0 = Sunday & 6 = Saturday
    let month = date.getMonth(); // 0-11 // 0 = January & 11 = December

    // AM (Ante Meridiem)  --> 12:00 AM → Midnight to 11:59 AM → Just before noon
    // PM (Post Meridiem) ---> 12:00 PM → Noon to 11:59 PM → Just before midnight
    let session = (hr > 12) ? 'PM' : "AM";

    // conver hourse into 12 hr formate
    hr = (hr > 12) ? hr - 12 : hr;

    // less then 10 so concatenate with '0'
    hr = (hr < 10) ? '0' + hr : hr; // simple way to concatenate '0' at the start
    min = (min < 10) ? '0'.concat(min.toString()) : min; // concatenate '0' at the start by using concat() method
    sec = (sec < 10) ? `0${sec}` : sec; // Template Literals for using concatinate

    // write days on the 
    document.querySelector(".dayBefore").innerHTML = `${days[(day == 0) ? 6 : day - 1]}`;
    document.querySelector(".today").innerHTML = `${days[day]}`;
    document.querySelector(".dayAfter").innerHTML = `${days[day + 1]}`;

    // write Time on the DOM
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("moderat").innerHTML = session;

    // write months on the DOM
    document.querySelector(".monthBefore").innerHTML = `${months[(month == 0) ? 11 : month - 1]}`;
    document.querySelector(".currMonth").innerHTML = `${months[month]}`;
    document.querySelector(".monthAfter").innerHTML = `${months[month + 1]}`;
}, 1000)