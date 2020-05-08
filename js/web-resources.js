// Copyright 2020 Stik Wid It Authors. All rights reserved.

const BASE_CONTENT_URL = "https://pm7w831y51.execute-api.us-east-2.amazonaws.com";

const ONE_DAY_IN_MILLISECONDS = 86400000;

chrome.storage.sync.get(['lastUpdate'], function(data) {
    const lastUpdated = new Date(data.lastUpdate);
    const currentDate = new Date();
    
    const dateDifference = currentDate - lastUpdated;

    if (dateDifference >= ONE_DAY_IN_MILLISECONDS) {
        const photoData = await getRandomLandscapePhoto();
        //TODO: Set photo data
        const quoteData = await getRandomQuote();
        // TODO: update quote data
        // let quote = document.getElementById('quote');
        // quote.innerHTML = data.quote;
        // const author = document.getElementById('author');
        // author.innerHTML = data.author;
        // chrome.storage.sync.set({'quote': ""});
        // chrome.storage.sync.set({'author': ""});

        currentDate.setHours(0,0,0);
        chrome.storage.sync.set({'lastUpdate': currentDate.getTime()});
    }
});

const getRandomLandscapePhoto =  async()  => {
    try {
        const url = `${BASE_CONTENT_URL}/random-landscape-photo`;
        const response = await fetch(url);
        return response.ok ? response.json() : Promise.reject({error: 500});
    } catch (err) {
        console.log(err);
        return  Promise.reject({error: 500});
    }
}

const getRandomQuote =  async() => {
    try {
        const url = `${BASE_CONTENT_URL}/random-quote`;
        const response = await fetch(url);
        return response.ok ? response.json() : Promise.reject({error: 500});
    } catch (err) {
        console.log(err);
        return  Promise.reject({error: 500});
    }
}

const generateRandomNumber = maxNumber => Math.floor(Math.random()*(maxNumber-1+1))+1