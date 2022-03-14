let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(10, 10, 100, 50);

/**
 * After creating the context object, the example draws a red rectangle 100
 * pixels wide and 50 pixels high, with its top-left corner at coordinates (10,10).
 * 
 * Just like in HTML (and SVG), the coordinate system that the canvas uses
 * puts (0,0) at the top-left corner, and the positive y-axis goes down from there.
 * So (10,10) is 10 pixels below and to the right of the top-left corner.
 */