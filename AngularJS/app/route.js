// ��ӷ���
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
        .when('/a',{templateUrl:'view/dongtai.html'})
        .when('/b',{templateUrl:'view/jianjie.html'})
        .when('/c',{templateUrl:'view/news.html'})
        .otherwise({redirectTo:'/a'});
    }]);
