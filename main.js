let hInput = document.getElementById("hourValue");
let mInput = document.getElementById("minuteValue");
let sInput = document.getElementById("secondValue");

let hTimerValue = document.getElementById("timerH");
let mTimerValue = document.getElementById("timerM");
let sTimerValue = document.getElementById("timerS");

let seconds = 60;
let minutes = 0;
let hours = 0;
let start = 0;

function countdownNumber() {
    let hInputValue = document.getElementById("hourValue").value
    let hNewValue = document.getElementById("timerH");

    let mInputValue = document.getElementById("minuteValue").value
    let mNewValue = document.getElementById("timerM");

    let sInputValue = document.getElementById("secondValue").value
    let sNewValue = document.getElementById("timerS");
    

    if (start == 0 &&  document.getElementById("hourValue") &&  document.getElementById("minuteValue") &&  document.getElementById("secondValue")) {
        hours = parseInt(document.getElementById("hourValue")) + 0;
        minutes = parseInt(document.getElementById("minuteValue")) + 0;
        seconds = parseInt(document.getElementById("secondValue")) * 1;

        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

        hInputValue = hours;
        mInputValue = minutes;
        sInputValue = seconds;

        start = 1;

        document.getElementById("gobtn").setAttribute("disabled", "disabled");
    }

    if (hours == 0 && minutes == 0 && seconds == 0) {
        start = 0;
        document.getElementById("gobtn").removeAttribute("disabled", "disabled");

        return false;
    } else {
        seconds--;
        if(seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
        } else {
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
    }

    hNewValue.innerHTML = hours;
    mNewValue.innerHTML = minutes;
    sNewValue.innerHTML = seconds;

    setTimeout(countdownNumber(), 1000);

    if (hInputValue != "" || mInputValue != "" || sInputValue != "") {
        hNewValue.innerText = hInputValue + ":";
        mNewValue.innerText = mInputValue + ":";
        sNewValue.innerText = sInputValue ;
        console.log(hNewValue);
        console.log(mNewValue);
        console.log(sNewValue);
    }
    
}

// ADDITIONAL FUNCTION
function addZero(o) {
    // it checks if any of the date numbers are less that 10
    if (o < 10) {
        // then it adds a "0" before them 
        o = "0" + o;
    }
    // returns the value
    return o;
}

function stopTimer() {

}

function resetTimer() {

}


function loadHandler() {
    const goButton = document.getElementById("gobtn");
    goButton.addEventListener("click", countdownNumber);   

    const stopButton = document.getElementById("stopbtn");
    stopButton.addEventListener("click", stopTimer);

    const resetButton = document.getElementById("resetbtn");
    resetButton.addEventListener("click", resetTimer);
}

window.addEventListener("load", loadHandler);