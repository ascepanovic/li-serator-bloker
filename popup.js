/* --- popup.js --- */
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("blocklist");
    const saveBtn = document.getElementById("save");
    const closeBtn = document.getElementById("close");
    let previousBlocklist = []; // Store the previous state

    // Function to check if blocklist is empty and update button state
    function updateSaveButtonState() {
        const currentNames = textarea.value.split("\n").map(name => name.trim()).filter(name => name);
        const hasChanged = JSON.stringify(currentNames) !== JSON.stringify(previousBlocklist);
        saveBtn.disabled = !hasChanged; // Only disable if no changes, allow empty saves
    }

    chrome.storage.sync.get(["blocklist"], function (result) {
        if (result.blocklist) {
            textarea.value = result.blocklist.join("\n");
            previousBlocklist = result.blocklist; // Store initial state
        }
        updateSaveButtonState(); // Check initial state
    });

    // Listen for changes in the textarea
    textarea.addEventListener("input", updateSaveButtonState);

    saveBtn.addEventListener("click", () => {
        const names = textarea.value.split("\n").map(name => name.trim()).filter(name => name);
        chrome.storage.sync.set({ blocklist: names }, () => {
            previousBlocklist = names; // Update previous state after saving
            alert("Block-lista je dopunjena!");
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                closePopup(); // close the extension popup
                chrome.tabs.reload(tabs[0].id); // reloads the current tab to see the changes
            });
        });
    });

    closeBtn.addEventListener("click", () => {
        closePopup();
    });
});

function closePopup() {
    window.close();
}
