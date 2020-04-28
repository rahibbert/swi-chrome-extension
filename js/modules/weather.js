// Copyright 2020 Stik Wid It Authors. All rights reserved.

const BASE_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_ID = "01f8a5882330339423a70510ed60946a";
const LOCATION_OPTIONS = {enableHighAccuracy: true, timeout: 60000, maximumAge: 0};
const UNITS_SYMBOL = {metric: '&#8451;', imperial: '°&#8457;'};
let units = 'metric';

if (navigator.geolocation) {
    chrome.storage.sync.get(['temperatureUnit'], function(data) {
        units = data.temperatureUnit;
        navigator.geolocation.getCurrentPosition(success ,error, LOCATION_OPTIONS);
    });
} 

const getWeatherStatus = async (latitude, longitude, units) => {
    try {
        const url = `${BASE_WEATHER_URL}?apikey=${API_ID}&lat=${latitude}&lon=${longitude}&units=${units}`;
        const response = await fetch(url);
        return response.ok ? response.json() : Promise.reject({error: 500});
    } catch (err) {
        console.log(err);
        return  Promise.reject({error: 500});
    }
}

const success = async pos => {
    const openWeather = await getWeatherStatus(pos.coords.latitude, pos.coords.longitude, units);
    console.log(openWeather)
    if (openWeather && openWeather.main) {
        document.getElementById("weather").innerHTML = `${Math.trunc(openWeather.main.temp)}${UNITS_SYMBOL[units]} ${openWeather.name}`;
    } else {
        console.log("something went wrong")
    }
}
  
const error = err => console.warn(`ERROR(${err.code}): ${err.message}`);
