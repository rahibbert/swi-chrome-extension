// Copyright 2020 Stik Wid It Authors. All rights reserved.

'use strict';

let popupQuote = document.getElementById('popup-quote');
chrome.storage.sync.get('quote', function(data) {
  popupQuote.innerHTML = data.quote;
});

const popupAuthor = document.getElementById('popup-author');
chrome.storage.sync.get('author', function(data) {
  popupAuthor.innerHTML = data.author;
});

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };