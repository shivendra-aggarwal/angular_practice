var app = angular.module("app", []);
app.controller("emp",["$scope","calcFactory",function($scope, calcFactory){
	$scope.a = 10;
	$scope.b = 20;

	$scope.doSum = function(){
		calcFactory.getSum($scope.a,$scope.b, function(result){
			$scope.sum = result;
		});
	};
}])

app.factory("calcFactory",["$http","$log",function($http,$log){
	$log.log("intantiating factory");
	var oCalcService = {};
	//oCalcService.getSum = function(a,b){
	//	return parseInt(a) + parseInt(b);
	//}

	//callback function
	//oCalcService.getSum = function(a, b, callBack){
	//	var s = parseInt(a) + parseInt(b);
	//	callBack(s);
	//};

	//calling webapi endpoint using http service
	oCalcService.getSum = function(a,b,callBack){
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

	return oCalcService;
}])