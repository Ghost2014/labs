/**
 * Created by Ghost2015 on 2015/7/15.
 */
app.controller('blog',['$scope','blog_service',function($scope,blog_service){
    $scope.title = "复仇者博客";
    $scope.info = blog_service.table();
}]);