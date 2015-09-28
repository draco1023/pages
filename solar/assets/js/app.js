var mainData = {"title":"威胜科技园屋顶光伏项目2150KW","content":[{"title":"今日发电量","normalImage":"assets/i/power-blue.png","highlightImage":"assets/i/power-white.png","value":"7241","unit":"kWh","link":"chart_data.aspx"},{"title":"本月发电量","normalImage":"assets/i/power-blue.png","highlightImage":"assets/i/power-white.png","value":"94338","unit":"kWh","link":null},{"title":"本年发电量","normalImage":"assets/i/power-blue.png","highlightImage":"assets/i/power-white.png","value":"985978","unit":"kWh","link":null},{"title":"今日每千瓦发电量","normalImage":"assets/i/power-blue.png","highlightImage":"assets/i/power-white.png","value":"94338","unit":"kWh/kW","link":null},{"title":"累计发电量","normalImage":"assets/i/power-blue.png","highlightImage":"assets/i/power-white.png","value":"1234567","unit":"kWh","link":null},{"title":"折合标准煤","normalImage":"assets/i/fire-blue.png","highlightImage":"assets/i/fire-white.png","value":"12345","unit":"T","link":null},{"title":"减排CO<sub>2</sub>量","normalImage":"assets/i/co2-blue.png","highlightImage":"assets/i/co2-white.png","value":"1234","unit":"T","link":null},{"title":"减少SO<sub>2</sub>量","normalImage":"assets/i/so2-blue.png","highlightImage":"assets/i/so2-white.png","value":"123","unit":"T","link":null},{"array":[{"title":"当前辐照","normalImage":"assets/i/sun.png","highlightImage":null,"value":"492","unit":"W/m<sup>2</sup>","link":"chart_data.aspx"},{"title":"风速","normalImage":"assets/i/wind.png","highlightImage":null,"value":"30","unit":"m/s","link":null}],"title":null,"normalImage":null,"highlightImage":null,"value":null,"unit":null,"link":null},{"array":[{"title":"环境温度","normalImage":"assets/i/temp.png","highlightImage":null,"value":"27.9","unit":"℃","link":null},{"title":"电板温度","normalImage":"assets/i/solar.png","highlightImage":null,"value":"52","unit":"℃","link":null}],"title":null,"normalImage":null,"highlightImage":null,"value":null,"unit":null,"link":null}],"chartData":[{"key":"当月发电量","color":null,"values":[{"label":"1","value":109.0},{"label":"2","value":132.0},{"label":"3","value":198.0},{"label":"4","value":149.0},{"label":"5","value":169.0},{"label":"6","value":147.0},{"label":"7","value":178.0},{"label":"8","value":83.0},{"label":"9","value":101.0},{"label":"10","value":133.0},{"label":"11","value":92.0},{"label":"12","value":185.0},{"label":"13","value":155.0},{"label":"14","value":182.0},{"label":"15","value":94.0},{"label":"16","value":27.0},{"label":"17","value":132.0},{"label":"18","value":112.0},{"label":"19","value":90.0},{"label":"20","value":85.0},{"label":"21","value":74.0},{"label":"22","value":190.0},{"label":"23","value":187.0},{"label":"24","value":167.0},{"label":"25","value":175.0},{"label":"26","value":29.0},{"label":"27","value":29.0},{"label":"28","value":63.0},{"label":"29","value":188.0},{"label":"30","value":117.0}],"x":null,"y":null}]};
var chartData = [{"key":"今日发电量","color":null,"values":[{"label":"1","value":68.0},{"label":"2","value":61.0},{"label":"3","value":16.0},{"label":"4","value":121.0},{"label":"5","value":131.0},{"label":"6","value":23.0},{"label":"7","value":107.0}],"x":null,"y":null}];

! function (e) {
    if (e) {
        e(function () {
            FastClick.attach(document.body);
        });
        var s = e.AMUI.iScroll;
        function getDataCount(d, i) {
            var count = 0;
            if (!i) i = 0;
            if (d && d.length) {
                var dd = d[i];
                if (dd && dd.values && dd.values.length)
                    count = dd.values.length;
            }
            return count;
        }
        if (s) {
            var o = e('#main-view'),
                b = e('body'),
                c = e('#chart'),
                h = e('#detail-header');
            o.on('click tap', 'a', function (a) {
                a.preventDefault();
                var $this = e(this);
                if ($this.hasClass('alink')) {
                    h.html($this.find('.item-title, .half-title').text());
                    // e.getJSON($this.data('link'), {
                    //     t: +new Date
                    // }, function (d) {
                    //     c.html('<svg></svg>');
                    //     nv.addGraph(function () {
                    //         var chart = nv.models.discreteBarChart()
                    //           .x(function (d) { return d.label })
                    //           .y(function (d) { return d.value })
                    //           .staggerLabels(getDataCount(d) >= 20)
                    //           .color(['#87CEEB'])
                    //           .showValues(true);

                    //         //chart.xAxis.axisLabel(d[0].x);
                    //         //chart.yAxis.axisLabel(d[0].y).tickFormat(d3.format("d"));

                    //         d3.select('#chart svg').datum(d).transition().duration(500).call(chart);

                    //         nv.utils.windowResize(chart.update);

                    //         return chart;
                    //     });
                    // });
                    !function (d) {
                        c.html('<svg></svg>');
                        nv.addGraph(function () {
                            var chart = nv.models.discreteBarChart()
                              .x(function (d) { return d.label })
                              .y(function (d) { return d.value })
                              .staggerLabels(getDataCount(d) >= 20)
                              .color(['#87CEEB'])
                              .showValues(true);

                            //chart.xAxis.axisLabel(d[0].x);
                            //chart.yAxis.axisLabel(d[0].y).tickFormat(d3.format("d"));

                            d3.select('#chart svg').datum(d).transition().duration(500).call(chart);

                            nv.utils.windowResize(chart.update);

                            return chart;
                        });
                    }(chartData);
                    b.addClass('detail-active');
                }
            }).on('touchstart mousedown', 'a', function (a) {
                a.preventDefault();
                e(this).addClass('active');
            }).on('touchend touchcancel mouseup', 'a', function (a) {
                a.preventDefault();
                e(this).removeClass('active');
            });
            e('#btn-back').on('click', function (a) {
                a.preventDefault();
                b.removeClass('detail-active');
            });

            var r = Handlebars.compile(e('#demo-list').html());
            // e.getJSON('main_data.aspx', {
            //     t: +new Date
            // }, function (data) {
            //     o.prepend(r(data));
            //     var scroll = new s(e('#solar-list')[0]);
            //     setTimeout(function () {
            //         //nv.addGraph(function () {
            //         //    var chart = nv.models.multiBarHorizontalChart(),
            //         //        h = getDataCount(data.chartData) * 30;

            //         //    chart.x(function (d) { return d.label })
            //         //      .y(function (d) { return d.value })
            //         //      .margin({left:20, bottom:30})
            //         //      .color(['#87CEEB'])
            //         //      .height(h)
            //         //      .showValues(true)
            //         //      .showControls(false)
            //         //      .showLegend(true);

            //         //    d3.select('#main-chart svg').datum(data.chartData).call(chart).style({
            //         //        'height': h
            //         //    });

            //         //    nv.utils.windowResize(chart.update);

            //         //    return chart;
            //         //});
            //         if (getDataCount(data.chartData)) {
            //             var d = [],
            //                 s = data.chartData[0];
            //             e.each(s.values, function (i, v) {
            //                 d.push(v.value);
            //             });
            //             e('#main-chart-title').html(s.key);
            //             var x = d3.scale.linear().domain([0, d3.max(d)]).range([0, b.width() * 10 / 12]);
            //             d3.select("#main-chart").selectAll("div").data(d).enter().append("div")
            //                 .style("width", function (d) { return x(d) + "px"; })
            //                 .text(function (d) { return d; });
            //         }

            //         scroll.refresh();
            //     }, 200);
            // });

            !function (data) {
                o.prepend(r(data));
                var scroll = new s(e('#solar-list')[0], {
                    click: true
                });
                setTimeout(function () {
                    if (getDataCount(data.chartData)) {
                        var d = [],
                            s = data.chartData[0];
                        e.each(s.values, function (i, v) {
                            d.push(v.value);
                        });
                        e('#main-chart-title').html(s.key);
                        var x = d3.scale.linear().domain([0, d3.max(d)]).range([0, b.width() * 10 / 12]);
                        d3.select("#main-chart").selectAll("div").data(d).enter().append("div")
                            .style("width", function (d) { return x(d) + "px"; })
                            .text(function (d) { return d; });
                    }

                    scroll.refresh();
                }, 750);
            }(mainData);
            c.height(e(window).height() - c.prev().height());
        }
    }
}(window.jQuery || window.Zepto);
