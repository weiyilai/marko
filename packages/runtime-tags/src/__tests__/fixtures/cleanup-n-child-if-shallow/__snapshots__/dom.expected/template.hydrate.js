// size: 493 (min) 288 (brotli)
const _input__effect = _$.effect("a0", (_scope, { 1: input }) => {
    input.write("mounted"),
      (_$.getAbortSignal(_scope, 0).onabort = () => {
        input.write("destroyed");
      });
  }),
  _input_ = _$.value(1, (_scope, input) => {
    _$.resetAbortSignal(_scope, 0), _input__effect(_scope);
  }),
  _setup$ifBody = (_scope) => {
    _scope[0], _input_(_scope[0], { write: _write(_scope) });
  },
  _ifBody = _$.register(
    "b1",
    _$.createRenderer(
      "<div>a</div><span>b</span><p>c</p>",
      "/d&",
      _setup$ifBody,
    ),
  ),
  _if = _$.conditional(2, 0),
  _show_effect = _$.effect("b2", (_scope, { 3: show }) =>
    _$.on(_scope[0], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(3, (_scope, show) => {
    _show_effect(_scope), _if(_scope, show ? _ifBody : null);
  });
function _write(_scope) {
  return function (state) {
    _scope._[1].innerHTML = state;
  };
}
_$.register("b0", _write), init();