/**
 * Created by Ghost2015 on 2015/7/15.
 */
app.controller('demo',['$scope','demo_service',function($scope,demo_service){
    $scope.title = "复仇者联盟参与的行动";
    $scope.info = demo_service.table();
}]);