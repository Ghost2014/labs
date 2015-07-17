/**
 * Created by Ghost on 2015/7/17.
 * 自定义指令集合
 */
app.directive('listDirective',
    function (){
        return {
            restrict: 'EA',
            scope: {
                tableoption: "="
            },
            link: function ($scope, element, attrs, contr) {
                var toption = {
                    method: 'get',
                    url: 'null',
                    cache: false,
                    height: 460,
                    striped: true,
                    pagination: true,
                    pageSize: 10,
                    pageList: [10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200],
                    minimumCountColumns: 2,
                    clickToSelect: false,
                    sidePagination: 'server',
                    queryParamsType: 'undefined'
                };
                $scope.$watch('tableoption', function (tableoption, olddata) {
                    $.extend(toption, tableoption);
                    element.bootstrapTable(toption);
                }, true);
            }

        };
    }
)

