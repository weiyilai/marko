// size: 366 (min) 222 (brotli)
const _setup_ = () => {},
  _input_ = _$.value(2, (_scope, input) => {
    _$.data(_scope[0], input), _$.tagVarSignal(_scope, input);
  });
const tags = [
    _$.createTemplate("a", "<div>Child: <!></div>", "Db%l", _setup_, _input_),
  ],
  _dynamicTag = _$.dynamicTag(2, 0, () => _y),
  _y = _$.registerBoundSignal(
    "b0",
    _$.value(6, (_scope, y) => _$.data(_scope[4], y)),
  ),
  _x_effect = _$.effect("b1", (_scope, { 5: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(5, (_scope, x) => {
    _$.data(_scope[1], x),
      _dynamicTag(_scope, tags[0], () => x),
      _x_effect(_scope);
  });
init();
