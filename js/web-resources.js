// Copyright 2020 Stik Wid It Authors. All rights reserved.

const BASE_CONTENT_URL = "https://pm7w831y51.execute-api.us-east-2.amazonaws.com";

const defaultTotalLandscapePhotos = 64726;


chrome.storage.sync.get(['lastUpdate'], function(data) {
    const lastUpdated = new Date(data.lastUpdate);
    const currentDate = new Date();
    
    const dateDifference = currentDate - lastUpdated;

    if (dateDifference > 86400000) { // one day i milliseconds
        getLandscapePhotos();
    }
});


const getLandscapePhotos = () => {
    try {
        const url = `${BASE_CONTENT_URL}/landscape-photos/${getPhotoNumber()}`;
        const response = await fetch(url);
        return response.ok ? response.json() : Promise.reject({error: 500});
    } catch (err) {
        console.log(err);
        return  Promise.reject({error: 500});
    }
}

const getPhotoNumber = () => Math.floor(Math.random()*(defaultTotalLandscapePhotos-1+1))+1