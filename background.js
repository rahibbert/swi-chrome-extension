// Copyright 2020 Stik Wid It Authors. All rights reserved.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({totalLandscapePhotos: 64726}, function() {
  });

  chrome.storage.sync.set({quote: "The people who are crazy enough to think they can change the world are the ones who do"}, function() {
  });

  chrome.storage.sync.set({quote: "Steve Jobs"});

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