function clock() {

    time = new Date();

    seconds = time.getSeconds();
    minutes = time.getMinutes();
    hours = time.getHours();

    currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("Timer").firstChild.nodeValue = currentTime;

}
