// Copyright 2020 Stik Wid It Authors. All rights reserved.

const BASE_CONTENT_URL = "https://pm7w831y51.execute-api.us-east-2.amazonaws.com/Prod";

const ONE_DAY_IN_MILLISECONDS = 86400000;

const getNewMotivationResources = () => {
    const dateDifference = ONE_DAY_IN_MILLISECONDS + 1; 
    const currentDate = new Date();
    chrome.storage.sync.get(['lastUpdate'], function(data) {
        if (data.lastUpdate) {
            const lastUpdated = new Date(data.lastUpdate);
            dateDifference = currentDate - lastUpdated;
        }

        if (dateDifference >= ONE_DAY_IN_MILLISECONDS) {
            getRandomLandscapePhoto().then(photoData =>  {
                if (photoData.results) {
                    const imageUrl = photoData.results[0]['urls']['raw'];
                    const backgroundImageAuthor = `${photoData.results[0]['user']['first_name']} ${photoData.results[0]['user']['last_name']}`
                    const backgroundImageReferenceUrl = photoData.results[0]['links']['html'];
                    chrome.storage.sync.set({'backgroundImage': imageUrl});
                    chrome.storage.sync.set({'backgroundImageAuthor': backgroundImageAuthor});
                    chrome.storage.sync.set({'backgroundImageReferenceUrl': backgroundImageReferenceUrl});
                    //TODO: Try downloading picture to local storage for possibly faster retrieval
                }
            }).catch(err => {
                console.log(`An error occurred ${err}`);
                callback(null, {'error':true});
            });
            
            // getRandomQuote();
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
}

const getRandomLandscapePhoto = async () => {
    try {
        const url = `${BASE_CONTENT_URL}/random-landscape-photo`;
        const response = await fetch(url);
        return response.ok ? Promise.resolve(response.json()) : Promise.reject({error: 500});
    } catch (err) {
        console.log(err);
        return  Promise.reject({error: 500});
    }
}

const getRandomQuote = async () => {
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

getNewMotivationResources();