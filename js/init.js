// Copyright 2020 Stik Wid It Authors. All rights reserved.

'use strict';

let quote = document.getElementById('quote');
chrome.storage.sync.get(['quote'], function(data) {
  quote.innerHTML = data.quote;
});

const author = document.getElementById('author');
chrome.storage.sync.get(['author'], function(data) {
  author.innerHTML = data.author;
});

const user = document.getElementById('user-greeting');
chrome.storage.sync.get(['userName'], function(data) {
    user.innerHTML =  data.username ? `Hey ${data.username}` : "Hey You";
});

const body = document.getElementsByTagName("BODY")[0];
chrome.storage.sync.get(['backgroundImage'], function(data) {
    body.style.backgroundImage = `url(${data.backgroundImage})`;
});
