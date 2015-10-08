angular.module('widgets', ['clock']);

angular.module('MyDashboard', ['gridster', 'widgets'])
.service('WidgetsManager', widgetsManagerService)
.controller('DashboardCtrl', dashboardController);

function widgetsManagerService () {
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
}

dashboardController.$inject = ['$scope', 'WidgetsManager'];
function dashboardController ($scope, WidgetsManager) {
  angular.extend($scope, {
    addWidget: addWidget,
    clearWidgets: clearWidgets,
    widgets: WidgetsManager.getWidgets()
  })

  $scope.$watch('widgets', function (w) {
    WidgetsManager.setWidgets(w);
  }, true);

  function addWidget () {
    $scope.widgets.push({
      url: 'js/widgets/clock/clock.html',
      ui: {
        x: 0,
        y: 0,
        w: 1,
        h: 1
      },
      config: {}
    });
    WidgetsManager.setWidgets($scope.widgets);
  }

  function clearWidgets () {
    WidgetsManager.clearWidgets();
    $scope.widgets = WidgetsManager.getWidgets();
  }

}
