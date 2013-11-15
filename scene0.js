/**
 * Created by molero on 22/10/13.
 */
var scene0 = {
    id: "scene0",
    width: 800,
    height:300,
    buttons: []

}

scene0.init = function(){

    var button1 = {
        position: {x: 300, y: 100},
        size: {x: 200, y: 50},
        color: "#210FA5",
        colorText: "#0FA54E",
        text: "Jugar",
        clicked: function(){
            sceneManager.activeScene(scene1.id);
            sceneManager.currentScene.init();
        }
    }
    var button2 = {
        position: {x: 300, y: 151},
        size: {x: 200, y: 50},
        color: "#0FA54E",
        colorText: "#210FA5",
        text: "Salir",
        clicked: function(){
                window.alert("Adios");
        }
    }

    this.buttons.push(button1);
    this.buttons.push(button2);
}

scene0.draw = function(){

    for(var i = 0; i <= this.buttons.length - 1; i++){


        ctx.fillStyle = this.buttons[i].color;
        ctx.fillRect(this.buttons[i].position.x,this.buttons[i].position.y, this.buttons[i].size.x,this.buttons[i].size.y);
        ctx.fillStyle = this.buttons[i].colorText;
        ctx.font = 'italic bold 30px sans-serif';
        ctx.textAlign = "left"
        ctx.fillText(this.buttons[i].text, this.buttons[i].position.x + parseInt(this.buttons[i].size.x / 2) - 40  ,
            this.buttons[i].position.y + (this.buttons[i].size.y / 2) + 10);
    }

}

function checkPosition(buttons) {
    for(var i = 0; i <= buttons.length -1; i++){
        var button = buttons[i];
        if (button.position.x <= Key._mousePosition.x && Key._mousePosition.x <= button.position.x + button.size.x){
            if(button.position.y <= Key._mousePosition.y && Key._mousePosition.y <= button.position.y + button.size.y){
              // console.log("dentro del boton" + button);
            }
        }
    }
}


function checkClick(buttons, clickedPosition) {
    var buttonPressed = null;
    var button;
    for(var i = 0; i <= buttons.length -1; i++){
        button = buttons[i];

        if (button.position.x <= clickedPosition.x && clickedPosition.x <= button.position.x + button.size.x){
            if(button.position.y <= clickedPosition.y && clickedPosition.y <= button.position.y + button.size.y){
                buttonPressed = button;
            }
        }
    }
    return buttonPressed;
}
scene0.update = function(){

    //checkPosition(this.buttons);
    if(Key._clickedPosition != null){
        var buttonIn = checkClick(this.buttons, Key._clickedPosition);
            if(Key._clickedPositionOut != null){
                var buttonOut = checkClick(this.buttons, Key._clickedPositionOut);
             if(buttonIn == buttonOut){
                    buttonOut.clicked();
             }
            Key._clickedPosition = null;
            Key._clickedPositionOut = null;
        }
    }
}



