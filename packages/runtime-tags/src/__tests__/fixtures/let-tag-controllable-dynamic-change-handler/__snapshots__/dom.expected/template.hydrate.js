// size: 374 (min) 203 (brotli)
const _expr_x_yChange = _$.intersection(6, (_scope) => {
    const { 4: x, 5: yChange } = _scope;
    _y(_scope, x, yChange);
  }),
  _y_effect = _$.effect("a1", (_scope, { 7: y }) =>
    _$.on(_scope[0], "click", function () {
      _y(_scope, y + 1);
    }),
  ),
  _y = _$.state(7, (_scope, y) => {
    _$.data(_scope[2], y), _y_effect(_scope);
  }),
  _yChange = _$.state(5, (_scope, yChange) => _expr_x_yChange(_scope)),
  _x = _$.state(4, (_scope, x) => {
    _$.data(_scope[1], x), _expr_x_yChange(_scope);
  });
_$.effect("a2", (_scope) =>
  _$.on(_scope[3], "click", function () {
    _yChange(_scope, null);
  }),
),
  _$.register("a0", function (_scope) {
    return function (newValue) {
      _x(_scope, newValue + 1);
    };
  }),
  init();
