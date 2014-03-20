$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  var circle = {};
    circle.x = 20;
    circle.y = 20;
    circle.r = 20;

  //run an iteration of the game
  var updateGame = function() {
    circle.x +=5;
    context.beginPath()
    //context.strokeStyle='#77D5F2'
    context.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
    context.closePath()
    //context.fillStyle='#77D5F2'
    //context.fill();
    context.stroke();
    setTimeout(updateGame, 10);
  };

  updateGame();
});
