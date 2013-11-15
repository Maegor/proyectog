var ctx;
var canvas;
var player1;
var loopRunning = true;





//cargamos 
function cargar(){

canvas = $("#myCanvas")[0];
ctx = canvas.getContext('2d');
canvas.addEventListener('mousemove', function(evt) {
    var rect = canvas.getBoundingClientRect();

    Key._mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}, false);
canvas.addEventListener('mousedown',function(event){ Key.onMousedown(event, canvas.getBoundingClientRect()); }, false);
canvas.addEventListener('mouseup',function(event) { Key.onMouseup(event, canvas.getBoundingClientRect()); }, false);
//addListenerToObject(canvas);


sceneManager.addScene(scene1);
sceneManager.addScene(scene0);
sceneManager.activeScene(scene0.id);
sceneManager.currentScene.init();

//scene1.init();
//scene0.init();
player1 = new Player("inicial",96,216);

animloop();

}	
	function updateGame(){

		//scene1.update();
        sceneManager.currentScene.update();
       // scene0.update();
       // player1.update();

}


	function drawGame(){

		canvas.width = canvas.width;
        //scene0.draw();
		//scene1.draw();
        sceneManager.currentScene.draw();
      //  player1.draw();

	}

window.requestAnimFrame = (function(){
  return window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
    

    function animloop(){
        if(loopRunning){
	  requestAnimFrame(animloop);
	  updateGame();
	  drawGame();
        }
}