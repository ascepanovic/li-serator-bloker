(async () => {
    window.blockedNames = [];
    chrome.storage.sync.get(["blocklist"], function (result) {
        if (result.blocklist) {
            window.blockedNames = result.blocklist;
        }
    });
})();