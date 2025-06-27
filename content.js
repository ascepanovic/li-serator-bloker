function hideBlockedPosts() {
    const posts = document.querySelectorAll('div[class*="feed-shared-update-v"]'); // this is a query selector that selects all the posts that have the class feed-shared-update-v
    posts.forEach(post => {
        const textContent = post.innerText;
        for (const name of window.blockedNames) {
            if (textContent.includes(name)) {
                post.remove(); // removes the post from the DOM entirely
                break;
            }
        }
    });
}

const observerInterval = setInterval(() => {
    if (window.blockedNames && window.blockedNames.length > 0) {
        hideBlockedPosts();
    }
}, 0); // giving it a 0  will also be delayed since it's put in a queue
