//Author: Michael Neises
//Last Edited: Feb 8

function setclock(h, m, s) {
    time = new Date();
    time.setHours(h,m,s);
    currentTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("Timer").firstChild.nodeValue = currentTime;
}
