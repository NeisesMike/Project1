function clock() {
	
	var userTime = new Date(2016, 1, 15, userHours, userMinutes, 0, 0);

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
		}
		else if(hours > 12)
		{
			hours = hours -12;
		}
	}

	var currentTime = hours + ":" + minutes + ":" + seconds;

	document.getElementById("Timer").firstChild.nodeValue = currentTime;

}
