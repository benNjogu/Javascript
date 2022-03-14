/**
 * A 2D canvas drawing context provides the methods fillText and strokeText .
The latter can be useful for outlining letters, but usually fillText is what you
need. It will fill the outline of the given text with the current fillStyle .
 */

let cx = document.querySelector("canvas").getContext("2d");
cx.font = "28px Georgia";
cx.fillStyle = "fuchsia";
cx.fillText("I can draw text, too!", 10, 50);