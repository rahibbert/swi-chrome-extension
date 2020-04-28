// Copyright 2020 Stik Wid It Authors. All rights reserved.

'use strict';

let popupQuote = document.getElementById('popup-quote');
chrome.storage.sync.get(['quote'], function(data) {
  popupQuote.innerHTML = data.quote;
});

const popupAuthor = document.getElementById('popup-author');
chrome.storage.sync.get(['author'], function(data) {
  popupAuthor.innerHTML = data.author;
});
