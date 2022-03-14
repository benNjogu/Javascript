let cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();
// center=(50,50) radius=40 angle=0 to 7
cx.arc(50, 50, 40, 0, 7);
// center=(150,50) radius=40 angle=0 to π ½
cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
cx.stroke();
