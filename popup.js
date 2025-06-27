/* --- popup.js --- */
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("blocklist");
    const saveBtn = document.getElementById("save");

    chrome.storage.sync.get(["blocklist"], function (result) {
        if (result.blocklist) {
            textarea.value = result.blocklist.join("\n");
        }
    });

    saveBtn.addEventListener("click", () => {
        const names = textarea.value.split("\n").map(name => name.trim()).filter(name => name);
        chrome.storage.sync.set({ blocklist: names }, () => {
            alert("Block-lista je dopunjena!");
        });
    });
});
