var myDashboard = angular.module('MyDashboard', ['gridster']);

myDashboard.service('WidgetsManager', function () {
  return {
    getWidgets: function () {
      return angular.fromJson(localStorage.getItem('widgets')) || [];
    },
    setWidgets: function (widgets) {
      return localStorage.setItem('widgets', angular.toJson(widgets));
    },
    clearWidgets: function () {
      return localStorage.removeItem('widgets');
    }
  };
});

myDashboard.controller('DashboardCtrl', function ($scope, WidgetsManager) {
  $scope.addWidget = function () {
    var type = prompt('Type? "random" or "increment"');
    if (!type) return;
    $scope.widgets.push({
      id: Math.floor(Math.random()) * 1000,
      type: type,
      ui: {
        x: 0,
        y: 0,
        w: 1,
        h: 1
      },
      config: {}
    });
    WidgetsManager.setWidgets($scope.widgets);

  };

  $scope.clearWidgets = function () {
    WidgetsManager.clearWidgets();
    $scope.widgets = WidgetsManager.getWidgets();
  };

  $scope.widgets = WidgetsManager.getWidgets();

  $scope.obj = {
    truc: "yo"
  };
});

myDashboard.directive('widget', function () {
  return {
    restrict: 'E',
    scope: {
      type: '@',
      config: '=',
      //			status: '='
    },
    template: 'In {{status}}',
    controller: function ($scope, $element, $compile, $rootScope, $interval) {
      $scope.status = "loading";

      var fakeLoadingTime = Math.ceil(Math.random()*5000);

      setTimeout(function () {
        $.get('/widgets/' + $scope.type + ".html").
        then(function (response) {
          $scope.status = "loaded";
          var clonedAttachFn = $compile(angular.element(response));
          clonedAttachFn(
            $scope.$new(true), 
            function (clonedElement, childScope) {
              childScope.setStatus = function (status) {
                childScope.status = status;
                $scope.status = status;
              };

              childScope.status = $scope.status;

              $element.append(clonedElement);
            }
          );
          $scope.$apply();
        }).
        fail(function () {
          $scope.status = "error";
        });
      }, fakeLoadingTime);

    }
  };
});

myDashboard.controller('RandomCtrl', function ($scope, $interval) {
  $scope.n = Math.floor(Math.random()*100);

  $interval(function () {
    $scope.n = Math.floor(Math.random()*100);
  }, 2000);

  $scope.$on('5!', function () {
    $scope.othersTo5 = true;
  });
});


myDashboard.controller('IncrementCtrl', function ($scope, $interval, $rootScope) {
  $scope.n = 0;

  $interval(function () {
    $scope.n++;
    if ($scope.n === 5) {
      $rootScope.$broadcast('5!');
    }
    if ($scope.n > 10) {
      //			$scope.status = "ooops";
      $scope.setStatus("error");//$scope.status);
    }
  }, 1000);

  $scope.$on('5!', function () {

  });
});

myDashboard.directive('widget2', function () {
  return {
    restrict: 'E',
    template: '<input type="text" ng-model="data.truc"/>',
    scope: {
      data: '='
    },
    controller: function () {

    }
  };
});

myDashboard.directive('widget3', function () {
  return {
    restrict: 'E',
    template: '---- data.truc ----',
    scope: {
      data: '='
    },
    controller: function () {

    }
  };
});