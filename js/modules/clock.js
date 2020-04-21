// Copyright 2020 Stik Wid It Authors. All rights reserved.

const AM_SESSION = "AM";
const PM_SESSION = "PM";

function getTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = AM_SESSION;
    
    if (h == 0) {
        h = 12;
    }
    
    if (h > 12) {
        h = h - 12;
        session = PM_SESSION;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    return `${h}:${m} ${session}`;
     
}

function showTime() {
    let time = getTime();
    document.getElementById("clock").innerText = time;
    setTimeout(showTime, 1000);  
}

showTime();