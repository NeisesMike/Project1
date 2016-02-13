/**
*	@file : updateClock.js
*	@author : Ethan Ward, Mike Neises, Travis
*	@date : 2016.02.13
*	@brief: Gets input from the user for what settings they want, then updates them for use by clock().
*/

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