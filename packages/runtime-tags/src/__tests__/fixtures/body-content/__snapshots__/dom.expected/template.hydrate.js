// size: 413 (min) 241 (brotli)
const $dynamicTag = _$.dynamicTag(1),
  $attrs_effect = _$.effect("a0", ($scope) => _$.attrsEvents($scope, 0)),
  $content = _$.value(4, $dynamicTag),
  $input = _$.value(3, ($scope, input) => {
    (($scope, attrs) => {
      _$.attrs($scope, 0, attrs), $attrs_effect($scope);
    })($scope, input),
      $content($scope, input.content);
  }),
  $clickCount$FancyButton$content = _$.dynamicClosureRead(
    1,
    ($scope, clickCount) => _$.data($scope[0], clickCount),
  ),
  $FancyButton_content = _$.registerContent("b1", " ", " ", 0, 0, ($scope) =>
    $clickCount$FancyButton$content($scope),
  ),
  $clickCount_closure = _$.dynamicClosure($clickCount$FancyButton$content),
  $clickCount = _$.state(1, ($scope, clickCount) => {
    $input($scope[0], {
      onClick: $onClick($scope),
      content: $FancyButton_content($scope),
    }),
      $clickCount_closure($scope);
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, clickCount + 1);
  };
}
_$.register("b0", $onClick), init();
