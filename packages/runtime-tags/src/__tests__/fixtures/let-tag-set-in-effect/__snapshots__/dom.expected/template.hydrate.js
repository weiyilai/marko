// size: 137 (min) 99 (brotli)
const _y = _$.state(3, (_scope, y) => _$.data(_scope[1], y)),
  _x_effect = _$.effect("a0", (_scope, { 2: x }) => {
    _y(_scope, x), _x(_scope, 2);
  }),
  _x = _$.state(2, (_scope, x) => {
    _$.data(_scope[0], x), _x_effect(_scope);
  });
init();