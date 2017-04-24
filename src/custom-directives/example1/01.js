var app = angular.module("app",[]);

app.controller("emp",["$scope",function($scope){
	$scope.msg="this is my first directive through controller";
}]);

//app.directive("myInfoMsg",function(){
//	return{
//		template: "<strong>{{msg}}</strong>"
//	};
//});

app.directive("myInfoMsg",function(){
	return{
		templateUrl: "my-info-msg.html"
	};
});