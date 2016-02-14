/**
*	@file : myClock.js
*	@author : Ethan Ward, Mike Neises, Travis
*	@date : 2016.02.13
*	@brief: Sets the time based on user input, updates it using the difference from the current time, changes how the display of the time looks, and then displays in in the browser. 
*/

/**
        *  @name clock
	*  @pre None, although ideally updateClock() has been called to set the time.
	*  @post The time is set and then updated using the difference between its time and the current time. The string used for displaying the time is updated according to the mode, and the time is displayed.
	*  @return 
*/
function clock() {
	
        if( isNaN(userHours) ) {
       
            userHours = 0;
        }
                    
        if( isNaN(userMinutes) ) {
			
            userMinutes = 0;
        }	
    
	var userTime = new Date(2016, 1, 15, userHours, userMinutes, 0, 0);
	var parity = "";

	var diffTime = new Date() - startTime;
	userTime.setMilliseconds(userTime.getMilliseconds() + diffTime);

	var seconds = (userTime.getSeconds() < 10 ? "0" : "") + userTime.getSeconds();
	var minutes = (userTime.getMinutes() < 10 ? "0" : "") + userTime.getMinutes();
	var hours = (userTime.getHours() < 10 ? "0" : "") + userTime.getHours();

	if(standard==1)
	{
		if(hours==0)
		{
			hours = 12;
			parity = "am";
		}
		else if(hours > 12)
		{
			hours = hours - 12;
			parity = "pm";
		}
		else if(hours==12)
		{
			parity = "pm";
		}
		else
		{
			parity = "am";
		}
	}

	var currentTime = hours + ":" + minutes + ":" + seconds + " " + parity;

	document.getElementById("Timer").firstChild.nodeValue = currentTime;

}
