let cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();
cx.moveTo(10, 90);
//control=(60,10) goal=(90,90)
cx.quadraticCurveTo(60, 10, 90, 90);
cx.lineTo(60, 10);
cx.closePath();
cx.stroke();

/**
 * We draw a quadratic curve from the left to the right, with (60,10) as control
point, and then draw two line segments going through that control point and
back to the start of the line. The result somewhat resembles a Star Trek
insignia. You can see the effect of the control point: the lines leaving the lower
corners start off in the direction of the control point and then curve toward
their target.
 */
