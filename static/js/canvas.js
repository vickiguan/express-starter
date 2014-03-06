$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //
  $('#p1').click(function() {
  	context.strokeRect(20, 20, 10, 20)
  });

  $('#p2').click(function() {
  	context.strokeRect(100, 20, 20, 20)
  });

  $('#p3').click(function() {
  	context.beginPath()
  	context.arc(30, 50, 15,0, Math.PI)
  	context.stroke()
  });
  
  $('#p4').click(function() {
  	context.beginPath()
  	context.arc(50, 50, 15,0, Math.PI)
  	context.arc(50, 50, 15, Math.PI, 0)
  	context.closePath()
  	context.stroke()
  });
  
  $('#p5').click(function() {
  	context.beginPath()
  	context.moveTo(60,60)
  	context.lineTo(90,90)
  	context.closePath()
  	context.stroke()
  });

});
