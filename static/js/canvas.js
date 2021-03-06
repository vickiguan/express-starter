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

  $('#p6').click(function() {
  	context.beginPath()
  	context.strokeStyle='green'
  	context.strokeRect(80, 30, 20, 57)
  	context.closePath()
  	context.stroke()
  });


  $('#p7').click(function() {
  	context.beginPath()
  	context.strokeStyle='red'
  	context.arc(50, 100, 15,0, Math.PI)
  	context.arc(50, 100, 15, Math.PI, 0)
  	context.closePath()
  	context.fillStyle='red'
  	context.fill()
  });

  $('#p8').click(function() {
  	context.beginPath()
  	context.strokeStyle='blue'
  	context.strokeRect(80, 80, 40, 40)
  	context.fillStyle='yellow'
  	context.fillRect(80, 80, 40, 40)
  	context.closePath()
  	context.fill()
  });

  $('#p9').click(function() {
 	for (var i=1; i<=5; i++) {
 		context.strokeRect(0, 0, 50*i, 50)
 	}
  });

  $('#p9').click(function() {
 	for (var i=1; i<=5; i++) {
 		context.strokeRect(0, 0, 50*i, 50)
 	}
  });

  $('#p10').click(function() {
 	for (var i=1; i<=100; i++) {
 		context.strokeRect(0, 0, 5*i, 5)
 	}
  });

  $('#p11').click(function() {
 	for (var i=1; i<=100; i++) {
 		for (var j=1; j<=100; j++) {
 		context.strokeRect(0, 0, 5*i, 5*j)
 		}
 	}
  });

  $('#p12').click(function() {
  	for (var i=1; i<=20; i++) {
  	context.beginPath()
  	context.arc(50, 50, 15*i, 0, 2*Math.PI)
  	context.closePath()
  	context.stroke()
	  }
  });





});
