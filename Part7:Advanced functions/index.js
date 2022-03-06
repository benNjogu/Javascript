
//1. if the function is a method -> this references that obj
//2. if the function is a regular function -> this references the global obj(window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function playVideo() {
    console.log(this);
}

playVideo();
