$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls= [];

  var b0 = {
    x: 20,
    y: 20,
    r: 20,
    vx:0,
    vy:0
};

 
  var b1 = {
    x: 40,
    y: 40,
    r: 15,
    vx:0,
    vy:0
};


   var b2= {
  x:125,
  y:150,
  r:50,
  vx:0,
  vy:0
  };


balls.push(b0);
balls.push(b1);
balls.push(b2);




  // Run an interation of the game
  var updateGame = function() {

    context.beginPath()
    context.strokeStyle='#77D5F2'
    context.arc(balls[0].x, balls[0].y, balls[0].r, 0, 2*Math.PI)
    context.closePath()
    context.fillStyle='#77D5F2'
    context.fill();
    context.stroke();

    context.beginPath()
    context.strokeStyle='#77D5F2'
    context.arc(balls[1].x, balls[1].y, balls[1].r, 0, 2*Math.PI)
    context.closePath()
    context.fillStyle='#77D5F2'
    context.fill();
    context.stroke();

    context.beginPath()
    context.strokeStyle='#77D5F2'
    context.arc(balls[2].x, balls[2].y, balls[2].r, 0, 2*Math.PI)
    context.closePath()
    context.fillStyle='#77D5F2'
    context.fill();
    context.stroke();




 
  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
