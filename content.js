function hideBlockedPosts() {
    const posts = document.querySelectorAll('div.feed-shared-update-v2');
    posts.forEach(post => {
        const textContent = post.innerText;
        for (const name of window.blockedNames) {
            if (textContent.includes(name)) {
                post.style.display = 'none';
                break;
            }
        }
    });
}

const observerInterval = setInterval(() => {
    if (window.blockedNames && window.blockedNames.length > 0) {
        hideBlockedPosts();
    }
}, 3000);
