/**
 * Created by Ghost2015 on 2015/7/15.
 */
var Demo = angular.module('Demo',[]);
Demo.controller('demo',['$scope',function($scope){
    $scope.title = "复仇者联盟参与的行动";
    $scope.info = [
        {"id":1,"title":"烈日下站岗的女交警","images":"static/img/1.jpg"},
        {"id":2,"title":"夏季开胃美食话梅排骨","images":"static/img/2.jpg"},
        {"id":3,"title":"北京奇趣“泡泡跑”","images":"static/img/3.jpg"},
        {"id":4,"title":"街拍：透视装美女超性感","images":"static/img/4.jpg"},
        {"id":5,"title":"童瑶时尚写真大片","images":"static/img/5.jpg"},
    ];
}]);