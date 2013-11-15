/**
 * Created by molero on 13/10/13.
 */
var Player =  function(state, positionX, positionY){

    this.state = state;
    this.position = {x: positionX, y: positionY};
    this.collisionBox = {x: 24, y: 24};
    this.direction = {x:1, y:1};
    this.velocity = {x:0, y:3};

}

Player.prototype.update = function(){

    var tile1;
    if(Key.isDown(Key.RIGHT)){
        this.velocity.x = 5;
    }

    if(Key.isDown(Key.LEFT)){
        this.velocity.x = -3;

    }
   /* if(Key.isDown(Key.UP)){
        this.velocity.y = -3;
    }

    if(Key.isDown(Key.DOWN)){
        this.velocity.y = 3;
    }*/

    if(Key.isDown(Key.SPACE)){
        if(this.state != "jumping"){
            this.state = "jumping";
            this.velocity.y = this.velocity.y * (-1);
        }

    }
    tile1 = tileDetection(this,scene1);
 //   console.log(tile1);

    var noCollision = true;
    var tilesCollides = [];
    var x_position;
    var y_position;

    var i = 0

    while(i < tile1.length ){

        if (tile1[i].tile == 67 || tile1[i].tile == 28){

            noCollision = false;
            tilesCollides.push(tile1[i]);
            if(tile1[i].direction == 'x'){

                x_position = tile1[i].position.x;

            }
            if(tile1[i].direction == 'y'){
                y_position = tile1[i].position.y;
                this.state ="running";
            }
        }
        i++;
    }


    if(isNaN(x_position)){
        this.position.x += (this.velocity.x - scene1.mapVelocity);
    }else{
        if (this.velocity.x > 0){
            this.position.x = x_position - 24;
        }else if(this.velocity.x < 0){
            this.position.x = x_position + 24;

        }
    }

    if(isNaN(y_position)){
        this.position.y += this.velocity.y;
    }else{
        if (this.velocity.y > 0){
            this.position.y = y_position - 24;

        }else if(this.velocity.y < 0){
            this.position.y = y_position + 24;

        }
    }
    this.velocity.x = 0;
  //  this.velocity.y = 0;

    /*else{
        if(x_position){
            if (this.velocity.x > 0){
            this.position.x = x_position - 24;
        }else if(this.velocity.x < 0){
            this.position.x = x_position + 24;

       }
    }
        if(y_position){

            if (this.velocity.y > 0){
                this.position.y = y_position - 24;

            }else if(this.velocity.y < 0){
                this.position.y = y_position + 24;

            }
            this.state = "running";
            //this.velocity.y = 0;
        }
 }
*/
   // this.velocity.x = 0;
   // this.velocity.y = 0;








  //  console.log(tile1);
}

Player.prototype.draw = function(){
    ctx.fillRect(this.position.x,this.position.y,this.collisionBox.x,this.collisionBox.y);
}