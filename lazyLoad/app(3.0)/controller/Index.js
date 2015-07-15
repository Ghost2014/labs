/**
 * Created by Ghost2015 on 2015/7/15.
 */
//var Index = angular.module('Index',[]);
app.controller('home',['$scope','Index_service',function($scope,Index_service){
    $scope.title = "复仇者联盟人员信息";
    $scope.info = Index_service.table();
    $scope.test = Index_service.test(2313);
}]);