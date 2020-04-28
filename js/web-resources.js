// Copyright 2020 Stik Wid It Authors. All rights reserved.

const resrourcesBaseUrl = "https://pm7w831y51.execute-api.us-east-2.amazonaws.com/";

const defaultTotalLandscapePhotos = 64726;

const getLandscapePhotos = () => {
    return fetch(resrourcesBaseUrl+"landscape-photos/"+getPhotoNumber());
}

const getPhotoNumber = () => Math.floor(Math.random()*(defaultTotalLandscapePhotos-1+1))+1