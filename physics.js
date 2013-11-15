/**
 * Created by molero on 17/10/13.
 */

function gravity(gameObject) {

    gameObject.position.y += 1;
}


function tileDetection(player, scene) {
    var tileWidth = scene.map.tilesets[0].tilewidth;
    var tileHeight = scene.map.tilesets[0].tileheight;
    var mapWidth = scene.map.layers[0].width;
    //var mapHeight = scene.map.layers[0].height;
    var mapTiles = scene.map.layers[0].data;
    var tileCollided = [];
    var playerTilePositionX;
    var playerTilePositionY;
    var v_direction = calculateUnitaryVector(player.velocity);

    if (v_direction.x > 0) {
        /*si el objeto se mueve hacia la derecha guardamos los tiles donde las esquinas derecha superior e inferior de dicho objecto interseccionan.*/
        playerTilePositionX = parseInt((player.position.x + player.velocity.x - scene.mapVelocity + scene.mapOffset.x + (player.collisionBox.x - 1)) / tileWidth);
        playerTilePositionY = parseInt((player.position.y + scene.mapOffset.y + (player.collisionBox.y - 1) ) / tileHeight);
        tileCollided.push({
            direction: 'x',
            tile: mapTiles[(playerTilePositionY * mapWidth) + playerTilePositionX],
                           position: {x: (playerTilePositionX * tileWidth) - scene.mapOffset.x,
                                      y: playerTilePositionY * tileHeight}
        });
        playerTilePositionY = parseInt((player.position.y +  scene.mapOffset.y) / tileHeight);
        tileCollided.push({
            direction: 'x',
            tile: mapTiles[(playerTilePositionY * mapWidth) + playerTilePositionX],
                           position: {x: (playerTilePositionX * tileWidth) -  scene.mapOffset.x,
                                      y: playerTilePositionY * tileHeight}
        });

    } else if (v_direction.x < 0) {
        playerTilePositionX = parseInt((player.position.x + player.velocity.x - scene.mapVelocity + scene.mapOffset.x ) / tileWidth);
        playerTilePositionY = parseInt((player.position.y + scene.mapOffset.y + (player.collisionBox.y - 1) ) / tileHeight);
        tileCollided.push({
            direction: 'x',
            tile: mapTiles[(playerTilePositionY * mapWidth) + playerTilePositionX],
                            position: {x: (playerTilePositionX * tileWidth) - scene.mapOffset.x,
                                       y: playerTilePositionY * tileHeight}
        });
        playerTilePositionY = parseInt((player.position.y + scene.mapOffset.y) / tileHeight);
        tileCollided.push({
            direction: 'x',
            tile: mapTiles[(playerTilePositionY * mapWidth) + playerTilePositionX],
            position: {x: (playerTilePositionX * tileWidth) - scene.mapOffset.x,
                       y: playerTilePositionY * tileHeight}
        });
    }

    if (v_direction.y < 0) {

        playerTilePositionX = parseInt((player.position.x  + scene.mapOffset.x - scene.mapVelocity + (player.collisionBox.x - 1)) / tileWidth);
        playerTilePositionY = parseInt((player.position.y + player.velocity.y + scene.mapOffset.y ) / tileHeight);
        tileCollided.push({
            direction: 'y',
            tile: mapTiles[(playerTilePositionY * mapWidth) + playerTilePositionX],
            position: {x: playerTilePositionX * tileWidth,
                y: playerTilePositionY * tileHeight}
        });
        playerTilePositionX = parseInt((player.position.x  + scene.mapOffset.x - scene.mapVelocity) / tileHeight);
        tileCollided.push({
            direction: 'y',
            tile: mapTiles[(playerTilePositionY * mapWidth) + playerTilePositionX],
            position: {x: playerTilePositionX * tileWidth,
                y: playerTilePositionY * tileHeight}
        });

    } else if (v_direction.y > 0) {
        playerTilePositionX = parseInt((player.position.x + scene.mapOffset.x - scene.mapVelocity + (player.collisionBox.x - 1) ) / tileWidth);
        playerTilePositionY = parseInt((player.position.y + player.velocity.y + scene.mapOffset.y + (player.collisionBox.y - 1) ) / tileHeight);
        tileCollided.push({
            direction: 'y',
            tile: mapTiles[(playerTilePositionY * mapWidth) + playerTilePositionX],
            position: {x: playerTilePositionX * tileWidth,
                       y: playerTilePositionY * tileHeight}
        });
        playerTilePositionX = parseInt((player.position.x  + scene.mapOffset.x - scene.mapVelocity) / tileHeight);
        tileCollided.push({
            direction: 'y',
            tile: mapTiles[(playerTilePositionY * mapWidth) + playerTilePositionX],
            position: {x: playerTilePositionX * tileWidth,
                       y: playerTilePositionY * tileHeight}
        });
    }


    return tileCollided;
}

function calculateUnitaryVector(vector) {

    var coor_x = vector.x / Math.abs(vector.x);
    var coor_y = vector.y / Math.abs(vector.y);

    return {x: coor_x, y: coor_y};


}