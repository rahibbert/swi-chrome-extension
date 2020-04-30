// Copyright 2020 Stik Wid It Authors. All rights reserved.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({'totalLandscapePhotos': 64726});

  chrome.storage.sync.set({'quote': "The people who are crazy enough to think they can change the world are the ones who do"});

  chrome.storage.sync.set({'author': "Steve Jobs"});

  chrome.storage.sync.set({'locale': chrome.i18n.getUILanguage()});

  chrome.storage.sync.set({'temperatureUnit': 'metric'});

  const currentDate = new Date();
  currentDate.setHours(0,0,0);
  chrome.storage.sync.set({'lastUpdate': currentDate.getTime()});
});