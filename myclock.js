function clock() {
	
	var userTime = new Date(2016, 1, 15, 12, 33, 24, 567);

	var diffTime = new Date() - startTime;
	userTime.setMilliseconds(userTime.getMilliseconds() + diffTime);

	var seconds = userTime.getSeconds();
	var minutes = userTime.getMinutes();
	var hours = userTime.getHours();

	var currentTime = hours + ":" + minutes + ":" + seconds;

	document.getElementById("Timer").firstChild.nodeValue = currentTime;

}
