function clock() {

    var time = new Date();

    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours();

    var currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("Timer").firstChild.nodeValue = currentTime;

}
