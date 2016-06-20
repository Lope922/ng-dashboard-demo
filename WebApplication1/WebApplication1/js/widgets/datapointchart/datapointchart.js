'use strict';

MyDashboard.directive('datapoint', function () {
    console.log("Directive was run");
    return {
        restrict: 'E',
        templateUrl: 'js/widgets/datapointchart/datapointchart.html',
        link: function (scope, element, attrs, controller) {
            $(document).ready(function () {
                $("#hiddenBut").hide();
                $("#toggleSwitch_j").hover(
                    function () {
                        $("#hiddenBut").fadeIn(500);
                    }, function () {
                        $("#hiddenBut").fadeOut(500);
                    });
            });
            console.log("Link was called");
        }
    };
});