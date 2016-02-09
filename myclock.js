function clock() {

    time = new Date();

    seconds = time.getSeconds();
    minutes = time.getMinutes();
    hours = time.getHours();

    currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("Timer").firstChild.nodeValue = currentTime;

}

function clock(h, m, s) {

    time = new Date();

    time.setHours(h,m,s);

    currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("Timer").firstChild.nodeValue = currentTime;

}
