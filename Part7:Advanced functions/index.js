
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Ben' }, 1, 2);
playVideo.apply({ name: 'Ben' }, [1, 2]);
const fn = playVideo.bind({ name: 'Ben' })();

//NB: Arrow functions also solve the problem since they inherit the this keyword