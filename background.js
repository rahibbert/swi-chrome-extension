// Copyright 2020 Stik Wid It Authors. All rights reserved.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({totalLandscapePhotos: 64726}, function() {
    console.log("The color is green.");
  });
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([{
  //     conditions: [new chrome.declarativeContent.PageStateMatcher({
  //       pageUrl: {hostEquals: 'developer.chrome.com'},
  //     })
  //     ],
  //         actions: [new chrome.declarativeContent.ShowPageAction()]
  //   }]);
  // });
});

chrome.