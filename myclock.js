function clock() {

	userTime = new Date(2016, 1, 15, 12, 33, 24, 567);

	diffTime = new Date() - startTime;
	userTime.setMilliseconds(userTime.getMilliseconds() + diffTime);

	seconds = time.getSeconds();
	minutes = time.getMinutes();
	hours = time.getHours();

	currentTime = hours + ":" + minutes + ":" + seconds;

	document.getElementById("Timer").firstChild.nodeValue = currentTime;

}
