chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab){
        var tabId = activeInfo.tabId;
        chrome.browserAction.setPopup({
            tabId: tabId,
            popup: 'popup.html'
        });
    });
});