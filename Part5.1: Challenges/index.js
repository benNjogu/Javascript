
//Challenge 5
/**
 *Create a blogpost object with these properties
title
body 
author
comments(author, body)
isLive
 */

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: '10',
    comment: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' }
    ],
    isLive: true
};

console.log(post);

console.log('-------------------------');

let post2 = new Post('a', 'b', 'c');
console.log(post2);
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
