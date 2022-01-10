// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets')

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;
    addTweet(username, tweet);
    tweetForm.elements.username.value = '';
    tweetForm.elements.tweet.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

//if the element clicked is a list item or a bold tag then remove the closest list item
tweetsContainer.addEventListener('click', function (e) {
    (e.target.nodeName === 'LI' || e.target.nodeName === 'B') && e.target.closest('LI').remove();
})