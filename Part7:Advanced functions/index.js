
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Ben' }, 1, 2);
playVideo.apply({ name: 'Ben' }, [1, 2]);
const fn = playVideo.bind({ name: 'Ben' });//returns a function
fn();

