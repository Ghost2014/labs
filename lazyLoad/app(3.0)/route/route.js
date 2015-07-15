/**
 * Created by Ghost2015 on 2015/7/15.
 */

var app = angular.module('app',["ui.router", "oc.lazyLoad"]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
            url:'/index',
            templateUrl:"tpls/home.html",
            controller:"home",
            resolve:{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:'app',      //模块名称
                        files:[
                            'controller/Index.js',
                            'service/index.service.js'
                        ]
                    })
                }]
            }
        })
        .state('blog',{
            url:'/blog',
            templateUrl:'tpls/blog.html',
            controller:'blog',
            resolve:{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:"app", //模块名称
                        files:[
                            'controller/Blog.js',
                            'service/blog.service.js'
                        ]
                    })
                }]
            }
        })
        .state('demo',{
            url:'/demo',
            templateUrl:'tpls/demo.html',
            controller:'demo',
            resolve:{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:"app", //模块名称
                        files:[
                            'controller/demo.js',
                            'service/demo.service.js'
                        ]
                    })
                }]
            }
        })
}]);

//app.controller('nav', ['$scope', function($scope) {
//    $scope.arr = ['active', '', ''];
//    var mark = 0;
//    $scope.toggle = function(num) {
//        if( num != mark ) {
//            $scope.arr[mark] = '';
//            $scope.arr[num] = 'active';
//            mark = num;
//        }
//    };
//}]);

app.controller('nav',['$scope',function($scope){
    $scope.arr = ['active','',''];
    var mask = 0;
    $scope.toggle = function(num)
    {
        if(num != mask)
        {
            $scope.arr[mask] = '';
            $scope.arr[num] = 'active';
            mask = num;
        }
    }
}])