// size: 360 (min) 199 (brotli)
const _count$if_content = _$.conditionalClosure(4, 2, 0, (_scope, count) =>
    _$.data(_scope[0], count),
  ),
  _if_content = _$.createRenderer("<span> </span>", "D ", 0, 0, (_scope) =>
    _count$if_content._(_scope),
  ),
  _if = _$.conditional(2, _if_content),
  _count_effect = _$.effect("a0", (_scope, { 4: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(4, (_scope, count) => {
    _count$if_content(_scope), _count_effect(_scope);
  }),
  _show_effect = _$.effect("a1", (_scope, { 3: show }) =>
    _$.on(_scope[1], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(3, (_scope, show) => {
    _if(_scope, show ? 0 : 1), _show_effect(_scope);
  });
init();
