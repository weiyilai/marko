// size: 210 (min) 118 (brotli)
const $tagName = _$.state(1, _$.tagVarSignal);
(_$.effect("a0", ($scope) => $tagName($scope, $scope[0].parentElement.tagName)),
  _$.registerBoundSignal(
    "b0",
    _$.value(6, ($scope, divName) => _$.data($scope[2], divName)),
  ),
  _$.registerBoundSignal(
    "b1",
    _$.value(7, ($scope, spanName) => _$.data($scope[5], spanName)),
  ),
  init());
