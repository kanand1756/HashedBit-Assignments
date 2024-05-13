let timer; // Variable to hold the timer
let hours = 0,
    minutes = 0,
    seconds = 0;

function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("stop").disabled = false;

    timer = setInterval(updateTime, 1000);
}

function pause() {
    clearInterval(timer);
    document.getElementById("pause").innerText = "Continue";
    document.getElementById("pause").setAttribute("onclick", "continueTimer()");
}

function continueTimer() {
    document.getElementById("pause").innerText = "Pause";
    document.getElementById("pause").setAttribute("onclick", "pause()");
    start();
}

function stop() {
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("stop").disabled = true;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("time").innerText = "00:00:00";
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("time").innerText = formattedTime;
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}
