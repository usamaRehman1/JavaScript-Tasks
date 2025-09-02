// Define variable to hold time value
var milliSec = 0;
var seconds = 0;
var minutes = 0;

// define variable to hold display value
let displaMilliSec = 0;
let displaySeconds = 0;
let displaMinutes = 0;

// define variable to hold setInterval() function
let interval = null;

// define variable to hole stopwatch
let stopWatchStatus = "stopped";

function resetLap() {
    var text = document.getElementById("resetLap").innerHTML;
    if (text === "Lap") {
        var min = document.getElementById("min").innerHTML;
        var sec = document.getElementById("sec").innerHTML;
        var miliSec = document.getElementById("milliSec").innerHTML;

        var listNode = document.getElementById("lapList");
        var currli = document.createElement("LI");
        var litext = document.createTextNode(`${min} : ${sec} : ${miliSec}`);
        currli.appendChild(litext);
        listNode.appendChild(currli);

        var currSpan = document.createElement("SPAN");
        var spantext = document.createTextNode(`+ ${min} : ${sec} : ${miliSec}`);
        currSpan.appendChild(spantext);
        currli.appendChild(currSpan);
    }
    else if (text === "Reset") {
        milliSec = 0;
        seconds = 0;
        minutes = 0;

        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("milliSec").innerHTML = "000";

        // remove all lap data
        var list = document.querySelectorAll("#lapList li");
        for (var i = 0; i < list.length; i++) {
            list[i].remove();
        }
        // console.log("reset");
    } else {
        // console.log("wrong")
    }
}

function start() {
    milliSec++;
    if (milliSec / 1000 == 1) {
        milliSec = 0;
        seconds++;
        if (seconds / 60 == 1) {
            seconds = 0;
            minutes++;
        }
    }

    // if milliSeconds / Seconds / Minutes are only one digit , so add a leading 0 to the value 
    displayMilliSec = (milliSec < 10) ? `00${milliSec}` : milliSec;
    displayMilliSec = (milliSec < 100 ) ? `0${milliSec}` : milliSec;
    displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    displaMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    // print minutes/seconds/milliSec on screen 
    document.getElementById("min").innerHTML = displaMinutes;
    document.getElementById("sec").innerHTML = displaySeconds;
    document.getElementById("milliSec").innerHTML = displayMilliSec;
}

function stopwatch() {
    if (stopWatchStatus === "stopped") {
        interval = setInterval(start, 1);
        stopWatchStatus = "started";
        document.getElementById("startStop").innerHTML = "Stop";
        document.getElementById("resetLap").innerHTML = "Lap";
        document.getElementById("resetLap").className = "reset2";
    }
    else {
        clearInterval(interval);
        stopWatchStatus = "stopped";
        document.getElementById("startStop").innerHTML = "Start";
        document.getElementById("resetLap").innerHTML = "Reset";
    }
}