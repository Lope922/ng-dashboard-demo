angular.module('clock', [])
.service('locations', locationsService)
.directive('clock', clockDirective);

function clockDirective () {
  return {
    templateUrl: 'js/widgets/clock/clock.template.html',
    controller: clockDirectiveController
  };
}

clockDirectiveController.$inject = ['$scope', '$interval', 'locations'];
function clockDirectiveController ($scope, $interval, locations) {
  $scope.widget.status = "loaded";
  $scope.locations = angular.copy(locations);
  $scope.config.location = $scope.config.location || locations[0].city;

  $scope.$on('$destroy', $scope.$watch('config.location', updateLocation));

  $interval(tic, 500);
  updateLocation();
  
  function updateLocation () {
    $scope.widget.title = "clock " + $scope.config.location;
    $scope.location = angular.copy(locations[0]);
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].city === $scope.config.location) {
        $scope.location = angular.copy(locations[i]);
        return;
      }
    }
    tic();
  }

  function tic () {
    var tmp = new Date();
    tmp.setHours(tmp.getHours() + $scope.location.diff);
    $scope.time = tmp.toTimeString();
  }

}

function locationsService () {
  return [{
    city: 'local',
    diff: 0
  }, {
    city: 'New-York',
    diff: -6
  }, {
    city: 'Brisbanne',
    diff: 8
  }];
}
