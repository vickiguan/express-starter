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
    vx:5,
    vy:5
};

 
  var b1 = {
    x: 240,
    y: 240,
    r: 55,
    vx:20,
    vy:20
};


   var b2= {
    x:125,
    y:150,
    r:50,
    vx:30,
    vy:30
 };


  var rect = {};
    rect.x = 0;
    rect.y = 0;
    rect.w = 1000;
    rect.h =1000;

balls.push(b0);
balls.push(b1);
balls.push(b2);




  // Run an interation of the game
  var updateGame = function() {

  for (var i=0; i<balls.length; i++) {

    context.fillStyle='white'
    context.fillRect(rect.x, rect.y, rect.w, rect.h)
    context.fill();
    context.stroke();


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
    context.closePath()
    context.fillStyle='#77D5F2'
    context.fill();
    context.stroke();  
    }

      setTimeout(updateGame, 50);

 }
  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE



  });


  updateGame();

});
