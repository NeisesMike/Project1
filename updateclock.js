/**
*	@file : updateClock.js
*	@author : Ethan Ward, Mike Neises, Travis
*	@date : 2016.02.13
*	@brief: Gets input from the user for what settings they want, then updates them for use by clock().
*/

/**
        *  @name executeClock
	*  @pre updateClock() has been called to set a time.
	*  @post The clock function is called to display the time.
	*  @return None
*/
function executeClock() {
    startTime = new Date();
    setInterval(clock, 1000);
    clock();
}

/**
        *  @name updateClock
	*  @pre None
	*  @post Takes in input from the user to set the desired time, then executes the clock.
	*  @return None
*/
function updateClock() {
    var inputHours = prompt("enter hours");
	userHours = parseInt(inputHours);
	
	while (isNaN(userHours))
	{
		inputHours = prompt("enter a numerical value for hours");
		userHours = parseInt(inputHours);
	}
	

    var inputMinutes = prompt("enter minutes");
	userMinutes = parseInt(inputMinutes);
	while (isNaN(userMinutes))
	{
		inputMinutes = prompt("enter a numerical value for minutes");
		userMinutes = parseInt(inputMinutes);
	}
		
    executeClock();
}

/**
        *  @name updateMode
	*  @pre None
	*  @post Updates the 12/24 hour mode to the desired mode.
	*  @return None
*/
function updateMode(mode) {
    standard = mode;
}
