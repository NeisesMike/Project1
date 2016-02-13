function executeClock() {
    startTime = new Date();
    setInterval(clock, 1000);
    clock();
}

function updateClock() {
    userHours = prompt("enter hours");
    userMinutes = prompt("enter minutes");
    executeClock();
}
		
function updateMode(mode) {
    standard = mode;
}