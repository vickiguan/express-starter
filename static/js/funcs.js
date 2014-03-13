$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle= color
    context.strokeRect(x, y, sideLen, sideLen)
    context.stroke()
  };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath()
    context.strokeStyle= color
    context.arc(x, y, radius,0, Math.PI)
    context.arc(x, y, radius, Math.PI, 0)
    context.closePath()
    context.stroke()
  };

  var drawTriplet = function(x, y, color) {
    drawCircle(x, y, 15, color)
    drawCircle(x+22.5, y, 15, color)
    drawCircle(x+11.25, y-20.25, 15, color)

  };
  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  
  $('#p5').click(function() {
    drawSquare(100, 100, 50, 'red');
    drawCircle(150, 125, 25, 'green');
    drawCircle(125, 100, 25, 'green');
    drawCircle(125, 150, 25, 'green');
    drawCircle(100, 125, 25, 'green');
     drawCircle(125, 125, 25, 'blue');
  });

  $('#p6').click(function() {
    drawTriplet(135, 135, 'green');
  });

  $('#p7').click(function() {
    drawTriplet(300, 300, 'blue');
  });

  $('#p8').click(function() {
    drawTriplet(100, 100, 'FFCCCC');
    drawTriplet(100, 300, 'FF9999');
    drawTriplet(200, 300, 'CC99CC');
    drawTriplet(150, 400, '66CCFF');
  });

});
