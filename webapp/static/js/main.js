/**
 * Created by ghost on 2015/7/17.
 * 应用路由配置
 */
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:"page/home.html"
        })
        .state('table',{
            url:'/table',
            templateUrl:"page/table.html",
            controller:"table",
            resolve:{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:'app',      //模块名称
                        files:[
                            'controller/table.controller.js',
                            'service/service.js'
                        ]
                    })
                }]
            }
        })
        .state('product',{
            url:'/product',
            templateUrl:"page/product.html"
        })
        .state('help',{
            url:'/help',
            templateUrl:"page/help.html"
        })
}]);
