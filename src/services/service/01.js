var app = angular.module("app", []);
app.controller("emp",["$scope","calcService",function($scope, calcService){
	$scope.a = 10;
	$scope.b = 20;

	$scope.doSum = function(){
		calcService.getSum($scope.a,$scope.b, function(result){
			$scope.sum = result;
		});
	};
}])

app.service("calcService",["$http","$log",function($http,$log){
	$log.log("intantiating service");
	
	//callback function
	//this.getSum = function(a, b, callBack){
	//	var s = parseInt(a) + parseInt(b);
	//	callBack(s);
	//};

	//calling webapi endpoint using http service
	this.getSum = function(a,b,callBack){
		$http({
			url: "http://localhost:50047/Sum?a=" + a + "&b=" + b,
			method: "GET"
		}).then(function(result){
			callBack(result.data);
		},
		function(result){
			$log.error("Error occured");
		});
	};
}])