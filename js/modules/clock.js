// Copyright 2020 Stik Wid It Authors. All rights reserved.

const AM_SESSION = "AM";
const PM_SESSION = "PM";
const DEFAULT_LOCALE = "en";
const TIME_FORMAT = {hour: 'numeric', minute: 'numeric'};
const DATE_FORMAT = {weekday: 'short', year: 'numeric', month: 'short',  day: '2-digit' };

function getDateAndTime() {
    const dateTime = new Date();
    const time = new Intl.DateTimeFormat(DEFAULT_LOCALE, TIME_FORMAT).format(dateTime);
    const date = new Intl.DateTimeFormat(DEFAULT_LOCALE, DATE_FORMAT).format(dateTime);

    return {time, date};     
}

function showTime() {
    const dateTime = getDateAndTime();
    document.getElementById("time").innerText = dateTime.time;
    document.getElementById("date").innerText = dateTime.date;
    setTimeout(showTime, 1000);  
}

showTime();