let cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();

for (let y = 10; y <= 100; y += 10) {
    cx.moveTo(10, y);
    cx.lineTo(90, y);
}

cx.stroke();

/**
 * This example creates a path with a number of horizontal line segments and
   then strokes it using the stroke method. Each segment created with lineTo
   starts at the path’s current position.
   That position is usually the end of the last segment, unless moveTo was called. In that case, the next segment would
   start at the position passed to moveTo .
 */
