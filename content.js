//initial values on each load
window.removedPostsCount = 0;
chrome.runtime.sendMessage({
    type: "UPDATE_BADGE",
    count: 0
});

function hideBlockedPosts() {
    const posts = document.querySelectorAll('div[class*="feed-shared-update-v"]');
    posts.forEach(post => {
        const textContent = post.innerText;
        for (const name of window.blockedNames) {
            if (textContent.includes(name)) {
                post.remove();
                window.removedPostsCount++;

                // Update badge counter
                chrome.runtime.sendMessage({
                    type: "UPDATE_BADGE",
                    count: window.removedPostsCount
                });

                break;
            }
        }
    });
}

// Initial run in case posts are already loaded
if (window.blockedNames && window.blockedNames.length > 0) {
    hideBlockedPosts();
}

// Find the main feed container (adjust selector if needed)
const feedContainer = document.querySelector('main') || document.body;

if (feedContainer) {
    const observer = new MutationObserver(() => {
        if (window.blockedNames && window.blockedNames.length > 0) {
            hideBlockedPosts();
        }
    });

    observer.observe(feedContainer, {
        childList: true,
        subtree: true
    });
}
