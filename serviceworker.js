chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "UPDATE_BADGE") {
        const count = message.count;
        chrome.action.setBadgeText({ text: count > 0 ? count.toString() : "" });
        chrome.action.setBadgeBackgroundColor({ color: "#0055ff" });
    }
});
