// JavaScript program to display current date,day and time
var day = document.getElementById("day");
var date = document.getElementById("date");
var time = document.getElementById("time");
var days = ['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var displayDayDateTime = setInterval(()=>{
    let currDate = new Date();
    let hr = currDate.getHours();
    let min = currDate.getMinutes();
    let sec = currDate.getSeconds();

    let dd = currDate.getDate();
    let mm = currDate.getMonth();
    let yy = currDate.getFullYear();

    //check ante meridiem or post meridiem 
    let session = (hr < 12) ? "AM" : "PM"; 

    //hours converted into 12 hours formate
    hr = (hr >= 12) ? hr - 12 : hr ;

    //less then 10 so add zero with them
    hr = (hr < 10 ) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    dd = (dd < 10) ? "0" + dd : dd;

    day.innerHTML = "Days : " + days[currDate.getDay()];
    date.innerHTML = "Date : " + dd + " " + months[mm] + " " + yy;
    time.innerHTML = "Time : " + hr + ":" + min + ":" + sec + " " + session ;
},1000)