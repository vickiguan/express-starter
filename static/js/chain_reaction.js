$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  var numBalls = 10;
  var balls= [];
  var reactions= [];


 for(i=0; i<numBalls; i++) {
 
  var b0 = {
    x: width*Math.random(),
    y: height*Math.random(),
    r: 50*Math.random(),
    vx:10*Math.random()-Math.random(),
    vy:10*Math.random()-Math.random()
};

balls.push(b0);
 }

 
  var rect = {};
    rect.x = 0;
    rect.y = 0;
    rect.w = 1000;
    rect.h =1000;





  // Run an interation of the game
  var updateGame = function() {

  for (var i=0; i<balls.length; i++) {

    context.fillStyle='white'
    context.fillRect(rect.x, rect.y, rect.w, rect.h)
    context.fill();
    


    balls[i].x += balls[i].vx
    balls[i].y += balls[i].vy

    if ((balls[i].vx>0 && balls[i].x+balls[i].r>=canvas.width)) {
    balls[i].vx=-balls[i].vx
    }

    if ((balls[i].vx<0 && balls[i].x-balls[i].r<=0)) {balls[i].vx=-balls[i].vx;
    }

    if ((balls[i].vy>0 && balls[i].y+balls[i].r>=canvas.height)) {
    balls[i].vy=-balls[i].vy
    }

    if ((balls[i].vy<0 && balls[i].y-balls[i].r<=0)) {balls[i].vy=-balls[i].vy;
    }
};

    for (var i=0; i<balls.length; i++) {

    context.beginPath()
    context.strokeStyle='#77D5F2'
    context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2*Math.PI)
    context.fillStyle='#77D5F2'
    context.fill();
    context.closePath() 
    }

requestAnimationFrame(updateGame);

 }
  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE


 for(i=0; i<1; i++) {
 
  var b0 = {
    x: e.pageX - $(this).offset().left,
    y: e.pageY - $(this).offset().top,
    r: 50*Math.random(),
    vx:15*Math.random()-Math.random(),
    vy:15*Math.random()-Math.random()
};

balls.push(b0);
 }


  });


  updateGame();

});
