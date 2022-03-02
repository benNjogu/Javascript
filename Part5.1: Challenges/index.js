
//Challenge 4
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
