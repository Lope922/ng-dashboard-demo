
MyDashboard.controller("myctrl", function ($scope, $http) {

    $scope.bind = [
{
    "key": "00.00", "value": "2"
}, {
    "key": "00.15", "value": "1.5"
}, {
    "key": "00.30", "value": "2.3"
}, {
    "key": "00.45", "value": "3"
}, {
    "key": "01.00", "value": "1.6"
}, {
    "key": "01.15", "value": "0.3"
}, {
    "key": "01.30", "value": "0.7"
}, {
    "key": "01.45", "value": "0.9"
}, {
    "key": "02.00", "value": "2.7"
}, {
    "key": "02.15", "value": "0.6"
}, {
    "key": "02.30", "value": "1"
}, {
    "key": "02.45", "value": "1.4"
}, {
    "key": "03.00", "value": "2.6"
}, {
    "key": "03.15", "value": "2.2"
},
{
    "key": "03.30", "value": "2.9"
},
{
    "key": "03.45", "value": "1.8"
}, {
    "key": "04.00", "value": "1.2"
}, {
    "key": "04.15", "value": "1.6"
}, {
    "key": "04.30", "value": "0.2"
}, {
    "key": "04.45", "value": "0"
}, {
    "key": "05.00", "value": "0"
}, {
    "key": "05.15", "value": "1"
}, {
    "key": "05.30", "value": "1.4"
}, {
    "key": "05.45", "value": "1.9"
}, {
    "key": "06.00", "value": "1.3"
},
{
    "key": "06.15", "value": "2.7"
},
{
    "key": "06.30", "value": "2.8"
},
{
    "key": "06.45", "value": "1"
},
{
    "key": "07.00", "value": "2"
}, {
    "key": "07.15", "value": "3"
}, {
    "key": "07.30", "value": "1.7"
}, {
    "key": "07.45", "value": "2.4"
}, {
    "key": "08.00", "value": "1.4"
}, {
    "key": "08.15", "value": "0.4"
}, {
    "key": "08.30", "value": "2.6"
}, {
    "key": "08.45", "value": "2.8"
}, {
    "key": "09.00", "value": "1.8"
}, {
    "key": "09.15", "value": "1.7"
}, {
    "key": "09.30", "value": "2.8"
}, {
    "key": "09.45", "value": "2"
}, {
    "key": "10.00", "value": "2"
}, {
    "key": "10.15", "value": "2.6"
},
{
    "key": "10.30", "value": "1.1"
},
{
    "key": "10.45", "value": "0.2"
}, {
    "key": "11.00", "value": "0.7"
}, {
    "key": "11.15", "value": "0"
}, {
    "key": "11.30", "value": "0.9"
}, {
    "key": "11.45", "value": "2.9"
}, {
    "key": "12.00", "value": "2.5"
}, {
    "key": "12.15", "value": "2.2"
}, {
    "key": "12.30", "value": "2.8"
}, {
    "key": "12.45", "value": "2.2"
}, {
    "key": "13.00", "value": "3"
},
{
    "key": "13.15", "value": "1.8"
}, {
    "key": "13.30", "value": "1.5"
}, {
    "key": "13.45", "value": "0.5"
}, {
    "key": "14.00", "value": "0.9"
}, {
    "key": "14.15", "value": "0.3"
}, {
    "key": "14.30", "value": "1.8"
}, {
    "key": "14.45", "value": "0.3"
}, {
    "key": "15.00", "value": "3"
}, {
    "key": "15.15", "value": "0.5"
}, {
    "key": "15.30", "value": "2.3"
}, {
    "key": "15.45", "value": "2.7"
}, {
    "key": "16.00", "value": "2.2"
}, {
    "key": "16.15", "value": "2"
},
{
    "key": "16.30", "value": "1.7"
},
{
    "key": "16.45", "value": "1.8"
}, {
    "key": "17.00", "value": "1.5"
}, {
    "key": "17.15", "value": "1.1"
}, {
    "key": "17.30", "value": "1.9"
}, {
    "key": "17.45", "value": "0.5"
}, {
    "key": "18.00", "value": "0.3"
}, {
    "key": "18.15", "value": "0.2"
}, {
    "key": "18.30", "value": "0.8"
}, {
    "key": "18.45", "value": "1"
}, {
    "key": "19.00", "value": "1.9"
},
{
    "key": "19.15", "value": "2.8"
},
{
    "key": "19.30", "value": "1.5"
},
{
    "key": "19.45", "value": "2"
}, {
    "key": "20.00", "value": "2.5"
}, {
    "key": "20.15", "value": "2.2"
}, {
    "key": "20.30", "value": "2.4"
}, {
    "key": "20.45", "value": "1.7"
}, {
    "key": "21.00", "value": "1"
}, {
    "key": "21.15", "value": "0"
}, {
    "key": "21.30", "value": "0.2"
}, {
    "key": "21.45", "value": "0.4"
}, {
    "key": "22.00", "value": "0.8"
},
{
    "key": "22.15", "value": "1"
}, {
    "key": "22.30", "value": "1.2"
}, {
    "key": "22.45", "value": "1.4"
}, {
    "key": "23.00", "value": "1.8"
},
{
    "key": "23.15", "value": "2"
},
{
    "key": "23.30", "value": "2.2"
},
{
    "key": "23.45", "value": "2.4"
}
    ]




});

MyDashboard.directive("barcharts", function () {
    function link(scope, el, attr) {
        console.log("barchart added");
        var w = 1400, h = 250;
        var margin = { top: 10, bottom: 30, left: 40, right: 20 };
        var width = w - margin.left - margin.right;
        var height = h - margin.top - margin.bottom;

        var svg = d3.select(el[0]).append("svg")
                                  .attr("width", w)
                                  .attr("height", h)
                                  .attr("id", "chart")
                                  .append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        scope.$watch("data", function (data) {
            var x = d3.scale.ordinal()
               .domain(data.map(function (entry) { return entry.key; }))
               .rangeBands([0, width]);
            var y = d3.scale.linear()
              .domain([0, d3.max(data, function (d) { return d.value; })])
              .range([height, 0]);
            var xAxis = d3.svg.axis().scale(x).orient("bottom");
            var yAxis = d3.svg.axis().scale(y).orient("left");
            var linearColorGradient = d3.scale.linear()
                                        .domain([0, d3.max(data, function (d) {
                                            return d.value;
                                        })])
                                        .range(["#5E86FF", "#1C1E4D"]);
            var tooltip = d3.select(el[0]).append('div')
                       .style('position', 'absolute')
                       .style('padding', '0 10px')
                       .style('background', 'white')
                       .style('border-radius', '20%')
                       .style('border', '2px solid #808080');
            var chart = svg.append("g").classed("display", true)
                         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            svg.selectAll(".bar").data(data).enter().append("rect").style("fill", "#8E7BE8")
                                    .classed("bar", true)
            .on("mouseover", function (d, i) {
                d3.select(this).style("fill", "#94D3FF")
                               .style("stroke", "#E0E0E0")
                               .style("stroke-width", "2px")
                  .append("g").classed("styleTooltip", true)
                tooltip.transition()

                tooltip.html("<h4>" + d.value + "Wh&nbsp" +
                    "at &nbsp" + d.key + "</h4>")
                  .style('opacity', .9)
                  .style('left', (d3.event.pageX - 70) + 'px')
                  .style('top', (d3.event.pageY - 70) + 'px')

            })
          .on("mouseout", function (d, i) {
              d3.select(this).style("stroke", "#fff")
                         .style("stroke-width", "0px")
              tooltip.transition()
                .style('opacity', 0)

              d3.select(this).style("fill", linearColorGradient(d.value));
          })

                                    .attr("x", function (d, i) { return x(d.key) })
                                    .attr("y", y(0))
                                    .attr("height", 0)
                                    .transition()
                                    .delay(function (d, i) { return i * 20; })
                                    .duration(400)
                                    .attr("y", function (d, i) { return y(d.value); })
                                    .attr("width", function (d, i) { return x.rangeBand() - 4; })
                                    .attr("height", function (d, i) { return height - y(d.value); })
                  .style("fill", function (d, i) { return linearColorGradient(d.value); })
            svg.append("g").classed("y axis", true).attr("transform", "translate(0,0)").call(yAxis);
        })
    }
    return {
        link: link,
        restrict: "E",
        scope: { data: '=' }
    }

});
