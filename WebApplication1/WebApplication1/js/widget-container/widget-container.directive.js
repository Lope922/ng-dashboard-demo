angular.module('MyDashboard')
.directive('widgetContainer', widgetContainerDirective);

function widgetContainerDirective () {
  return {
    restrict: 'E',
    scope: {
      url: '=',
      config: '='
    },
    templateUrl: 'js/widget-container/widget-container.template.html',
    controller: widgetContainerController
  }
}

widgetContainerController.$inject = [
  '$scope', '$element', '$templateRequest', '$compile'
];

function widgetContainerController ($scope, $element, $templateRequest, $compile) {
  angular.extend($scope, {
    widget: {
      title: undefined,
      status: undefined,
    }
  });

  $scope.$on('$destroy', $scope.$watch('url', function (url) {
    $element.find('>.content').empty();
    if (!url) return;
    $templateRequest(url)
    .then(function (html) {
      var widget = angular.element($compile(html)($scope.$new()));
      $element.find('>.content').append(widget);
    });
  }));

}
