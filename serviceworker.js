// Listen for messages from content scripts (e.g., UPDATE_BADGE)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "UPDATE_BADGE") {
        const count = message.count;
        chrome.action.setBadgeText({ text: count > 0 ? count.toString() : "" });
        chrome.action.setBadgeBackgroundColor({ color: "#0055ff" });
    }
});

//remove badge if the tab is not LinkedIn or tab closed
function clearBadgeIfNotLinkedIn(tabId) {
    chrome.tabs.get(tabId, (tab) => {
        if (chrome.runtime.lastError || !tab || !tab.url || !tab.url.includes("linkedin.com")) {
            // Clear badge when no LinkedIn tab or tab closed
            chrome.action.setBadgeText({ text: "" });
        }
    });
}

// Clear badge on tab switch if not LinkedIn
chrome.tabs.onActivated.addListener(activeInfo => {
    clearBadgeIfNotLinkedIn(activeInfo.tabId);
});
