// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  tabUrl = tab.url;
	sendResponse();
});

chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {         
  tabUrl = tab.url;  
	sendResponse();
});
