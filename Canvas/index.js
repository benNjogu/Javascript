let cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();
cx.moveTo(50, 10);
cx.lineTo(10, 70);
cx.lineTo(90, 70);
cx.fill();

/**
 * This example draws a filled triangle. Note that only two of the triangle’s
sides are explicitly drawn. The third, from the bottom-right corner back to the
top, is implied and wouldn’t be there when you stroke the path.
 */