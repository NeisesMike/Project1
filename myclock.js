function clock() {
	
	var userTime = new Date(2016, 1, 15, x, y, 0, 0);
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
