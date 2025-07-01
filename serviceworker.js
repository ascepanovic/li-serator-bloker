let currentLinkedInTabs = new Set();
let lastCount = 0;

// Update badge count and remember last count
function updateBadge(count) {
    lastCount = count;
    if (count > 0) {
        chrome.action.setBadgeText({ text: count.toString() });
        chrome.action.setBadgeBackgroundColor({ color: "#0055ff" });
    } else {
        chrome.action.setBadgeText({ text: "" });
    }
}

//LinkedIn tab is active, if yes show badge, else clear
function refreshBadge() {
    if (currentLinkedInTabs.size > 0) {
        updateBadge(lastCount);
    } else {
        updateBadge(0);
    }
}

// Listen for messages from content scripts to update badge count
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "UPDATE_BADGE") {
        updateBadge(message.count);
        if (sender.tab && sender.tab.url && sender.tab.url.includes("linkedin.com")) {
            currentLinkedInTabs.add(sender.tab.id);
        }
    }
});

// On tab activated, update currentLinkedInTabs and badge accordingly - performance issue TODO
chrome.tabs.onActivated.addListener(async (activeInfo) => {
    try {
        const tab = await chrome.tabs.get(activeInfo.tabId);
        if (tab.url && tab.url.includes("linkedin.com")) {
            currentLinkedInTabs.add(tab.id);
            updateBadge(lastCount);
        } else {
            // Not LinkedIn tab activated
            currentLinkedInTabs.delete(activeInfo.tabId);
            refreshBadge();
        }
    } catch (e) {
        // Tab might be closed or unavailable
        currentLinkedInTabs.delete(activeInfo.tabId);
        refreshBadge();
    }
});

// On tab updated (e.g., url change), update the set accordingly
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url !== undefined) {
        if (tab.url.includes("linkedin.com")) {
            currentLinkedInTabs.add(tabId);
            updateBadge(lastCount);
        } else {
            currentLinkedInTabs.delete(tabId);
            refreshBadge();
        }
    }
});

// On tab removed, remove from currentLinkedInTabs and refresh badge
chrome.tabs.onRemoved.addListener((tabId) => {
    currentLinkedInTabs.delete(tabId);
    refreshBadge();
});
