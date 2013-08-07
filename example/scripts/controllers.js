angular.module('exampleApp')

.controller('ExampleCtrl', [
         '$scope', '$location', '$templateCache', 'exampleRoutes',
function ($scope,   $location,   $templateCache,   exampleRoutes) {

  $scope.linkList = angular.copy(exampleRoutes);

  // $scope.title = titleMap[key];

  $scope.source = null;
  $scope.subSource = null;


  $scope.toggleSource = function (target) {
    target = target || 'source';

    if ($scope[target] === null) {
      $scope[target] = $templateCache.get('partials' + $scope.path + '.html')[1];
    }
    else {
      $scope[target] = null;
    }
  };

  $scope.$on('$routeChangeSuccess', function () {
    $scope.path = $location.path();
    $scope.disabled = false;

    $scope.source = null;
  });
}]);
