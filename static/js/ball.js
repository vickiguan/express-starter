$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;



  var rect = {};
    rect.x = 0;
    rect.y = 0;
    rect.w = 1000;
    rect.h =1000;

  var ball = {
    x: 20,
    y: 20,
    r: 20,
    vx: 5,
    vy: 5
};

  //run an iteration of the game
  var updateGame = function() {
    context.fillStyle='white'
    context.fillRect(rect.x, rect.y, rect.w, rect.h)
    context.fill();
    context.stroke();


    ball.x += vx
    ball.y += vy

    if ((ball.xv>0 && ball.x+2*ball.r>=canvas.width)) {
    ball.xv=-ball.xv
    }

    if ((ball.xv<0 && ball.x<=0)) {ball.xv=-ball.xv;
    }


    context.beginPath()
    context.strokeStyle='#77D5F2'
    context.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI)
    context.closePath()
    context.fillStyle='#77D5F2'
    context.fill();
    context.stroke();

    setTimeout(updateGame, 10);


  };

  updateGame();
});

