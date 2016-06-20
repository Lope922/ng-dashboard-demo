angular.module('widgets', []);
var MyDashboard = angular.module('MyDashboard', ['gridster', 'widgets'])
.service('WidgetsManager', widgetsManagerService)
.controller('DashboardCtrl', dashboardController);

function widgetsManagerService() {
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
function dashboardController($scope, WidgetsManager) {
    angular.extend($scope, {
        addWidget: addWidget,
        clearWidgets: clearWidgets,
        widgets: WidgetsManager.getWidgets()
    })

    $scope.$watch('widgets', function (w) {
        WidgetsManager.setWidgets(w);
    }, true);

    function addWidget(type) {
        if (type == 'DataPoint') {
            $scope.widgets.push({
                url: 'js/widgets/datapointchart/datapoint.html',
                ui: {
                    x: 0,
                    y: 0,
                    w: 1,
                    h: 1
                },
                config: {}
            });
            WidgetsManager.setWidgets($scope.widgets);
            console.log("addedwidget!");
        }

        if (type == 'BarChart') {
            $scope.widgets.push({
                url: 'js/widgets/barchart/bar.html',
                ui: {
                    x: 0,
                    y: 0,
                    w: 1,
                    h: 1
                },
                config: {}
            });
            WidgetsManager.setWidgets($scope.widgets);
            console.log("addedwidget!");
        }
    }

    function clearWidgets() {
        WidgetsManager.clearWidgets();
        $scope.widgets = WidgetsManager.getWidgets();
    }

}
