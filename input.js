/**
 * Created by molero on 13/10/13.
 */
//Control de los evento de teclado
var Key = {
    _pressed: {},
    _mousePosition: {},
    _clickedPosition: null,
    _clickedPositionOut: null,

    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,


    isDown: function(keyCode) {
        return this._pressed[keyCode];
    },

    onKeydown: function(event) {
        this._pressed[event.keyCode] = true;
    },

    onKeyup: function(event) {
        delete this._pressed[event.keyCode];
    },
    isPressed: function(keyCode) {
        return this._clickedPosition;
    },

    onMousedown: function(event, rect) {
        Key._clickedPosition = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    },

    onMouseup: function(event, rect) {
        Key._clickedPositionOut = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    }
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

