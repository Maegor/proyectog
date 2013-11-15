/**
 * Created by JoséMaría on 28/10/13.
 */

var sceneManager = {

    scenes: new Object(),
    currentScene: null,
    addScene: function(scene){ this.scenes[scene.id] = scene;},
    activeScene: function(scene){this.currentScene = this.scenes[scene];}

}


