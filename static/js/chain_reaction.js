$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;


  // PUT STUFF HERE

  var numBalls = 10;
  var balls= [];
  var reactions=[];
  var reacting= false;
  var numReacted= 0
  var curLevel= 0
  var levelText= "Level 1- React 1 out of 5 balls!"
  var gameState= "menu"
  var menuText= "Click to play!"
  var levels = []; 


  var lvl1 = {
    num: 1,
    minReactions:1,
    numBalls: 5
  }

  var lvl2 = {
    num: 2,
    minReactions:2,
    numBalls: 10
  }

    var lvl3 = {
    num: 3,
    minReactions:5,
    numBalls: 20
  }
    var lvl4 = {
    num: 4,
    minReactions:6,
    numBalls: 24
  }
    var lvl5 = {
    num: 5,
    minReactions:8,
    numBalls: 24
  }
    var lvl6 = {
    num: 6,
    minReactions:10,
    numBalls: 30
  }
    var lvl7 = {
    num: 7,
    minReactions:15,
    numBalls: 30
  }
    var lvl8 = {
    num: 8,
    minReactions: 10,
    numBalls: 20
  }
    var lvl9 = {
    num: 9,
    minReactions:30,
    numBalls: 50
  }

levels.push(lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7, lvl8, lvl9)



 
  var rect = {};
    rect.x = 0;
    rect.y = 0;
    rect.w = 1000;
    rect.h =1000;





  // an interation of the game
  var updateGame = function() {
    
    context.fillStyle='white'
    context.fillRect(rect.x, rect.y, rect.w, rect.h)
    context.fill();
    

if (gameState=== "menu") {
   context.fillStyle="green"
context.font = "20px Arial"
context.fillText(menuText, 265,200)
} 

else if (gameState==="playing") {

for (var j = 0; j < reactions.length; j++) {

  for (var i = 0; i < balls.length; i++) {
       
               var collided=false
               var xdiff= balls[i].x-reactions[j].x;
               var ydiff= balls[i].y-reactions[j].y;
               var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff)
               if (dist<balls[i].r+reactions[j].r) {
                 collided=true;
                 numReacted++;
            }
                    if (collided===true) {
                      reactionsObject= {
                        x:balls[i].x,
                        y:balls[i].y,
                        r: 1,
                        timer: 0
                      }
                      reactions.push(reactionsObject)
                     balls.splice(i,1);
                     i--
        };

        }



}





  for (var i=0; i<balls.length; i++) {



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

      for (var i=0; i<reactions.length; i++) {
        reactions[i].timer++
        if (reactions[i].timer>200) {
          reactions[i].r--
        }
      else if (reactions[i].r<30) {
        reactions[i].r++
        }
       if (reactions[i].r===0) {
       reactions.splice(i,1)
       i--
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




for (var i =0; i<reactions.length; i++) {
  
    context.beginPath()
    context.strokeStyle='#77D5F2'
    context.arc(reactions[i].x, reactions[i].y, reactions[i].r, 0, 2*Math.PI)
    context.fillStyle='#77D5F2'
    context.fill();
    context.closePath() 
  }


context.fillStyle= "blue"
context.font = "20px Arial"
context.fillText("Reactions:"+numReacted, 20,20)

context.fillStyle= "blue"
context.font = "20px Arial"
context.fillText(levelText, 190,20)

if (reacting===true && reactions.length===0) {
  menuText= "Game Over! You reacted "+numReacted+" balls!";
  if (numReacted>=levels[curLevel].minReactions) {
    curLevel++;
    menuText= "~you win this round~";
    gameState="menu";
    if (curLevel===levels.length) {
      curLevel=0
      menuText="You did it! You beat the entire game!"
    }
    }
  else if (numReacted<levels[curLevel].minReactions) {
    menuText="you lose. continue?";
    gameState="menu";
  }
};

};



requestAnimationFrame(updateGame);

 }
  // Handle a canvas click event
  $('#game_canvas').click(function(e) {

if (gameState==="menu") {

  gameState="playing"
  reacting = false
  numReacted= 0
levelText= "Level " + (curLevel+1) + " - React " + levels[curLevel].minReactions + " out of " + levels[curLevel].numBalls + " balls!" ;

   balls.splice(0,balls.length)

    for(var k=0; k<levels[curLevel].numBalls; k++) {
 
  var b0 = {
    x: width*Math.random(),
    y: height*Math.random(),
    r: 50*Math.random(),
    vx:7*Math.random()-Math.random(),
    vy:7*Math.random()-Math.random()
};

balls.push(b0);
 }

}

else if (gameState==="playing" && reacting===false) {


  if (reacting===false)  {
    reacting=true
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE



 for(i=0; i<1; i++) {
 
  var b0 = {
    x:e.pageX - $(this).offset().left,
    y:e.pageY - $(this).offset().top,
    r: 1,
    timer: 0

}
};


reactions.push(b0);
 };

};

  });


  updateGame();

});
