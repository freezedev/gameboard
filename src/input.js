udefine(['root', 'eventmap', 'gameboard/key'], function(root, EventMap, Key) {

  var Input = {};

  Input.define = Key.define;
  Input.key = new EventMap();

  root.addEventListener('keydown', function(evt) {
    Input.key.trigger({
      name: 'down',
      context: Key
    }, evt.keyCode);
  }, true);
  
  root.addEventListener('keyup', function(evt) {
    Input.key.trigger({
      name: 'up',
      context: Key
    }, evt.keyCode);
  }, true);

  return Input;
});
