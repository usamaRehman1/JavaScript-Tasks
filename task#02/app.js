var miliseconds = 0;
var seconds = 0;
var minutes = 0;

var check_status = "stoped";

var displayMiliseconds = 0;
var displaySeconds = 0;
var displayMinutes = 0;

function startStop() {

    if (check_status === "stoped") {
        interval = setInterval(start, 1)
        check_status = "started";
        document.getElementById("startstop").innerHTML = "Stop";
        document.getElementById("resetlap").innerHTML = "Lap";
    } else {
        clearInterval(interval)
        check_status = "stoped";
        document.getElementById("startstop").innerHTML = "Start";
        document.getElementById("resetlap").innerHTML = "Reset";
    }
}

function start() {
    miliseconds++;

    if (miliseconds / 1000 == 1) {
        miliseconds = 0;
        seconds++;
        if (seconds / 60 == 1) {
            seconds = 0;
            minutes++;
        }
    }

    displayMiliseconds = (miliseconds < 10) ? "0" + miliseconds : miliseconds;
    displaySeconds = (seconds < 10) ? "0" + seconds : seconds;
    displayMinutes = (minutes < 10) ? "0" + minutes : minutes;

    document.getElementById("min").innerHTML = displayMinutes;
    document.getElementById("sec").innerHTML = displaySeconds;
    document.getElementById("mil").innerHTML = displayMiliseconds;
}

function resetLap() {

    if (check_status === "stoped") {

        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("mil").innerHTML = "00";

        let lapList = document.querySelectorAll("#labVal li");
        for (let i = 0; i < lapList.length; i++) {
            lapList[i].remove()
        }
    } else {
        let min = document.getElementById("min").innerHTML;
        let sec = document.getElementById("sec").innerHTML;
        let mil = document.getElementById("mil").innerHTML;

        let listNode = document.getElementById("labVal");
        let currli = document.createElement("LI");
        let textli = document.createTextNode(min + ":" + sec + "." + mil)
        currli.appendChild(textli);
        listNode.appendChild(currli);
    }
}