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

app.provider("calcService",function(){
	
	var baseUrl = "";

	this.config = function(url){
		baseUrl = url;
	}

	this.$get = ["$http","$log",function($http,$log){
		var oCalcService={};
		//oCalcService.getSum = function(a,b,callBack){
		//	var sum = parseInt(a) + parseInt(b);
		//	callBack(sum);
		//};

		oCalcService.getSum = function(a,b,callBack){
			$http({
				url: baseUrl + "/Sum?a=" + a + "&b=" + b,
				method: "GET"
			}).then(function(result){
				callBack(result.data);
			},
			function(result){
				$log.error("Error occured");
			});
		};
		return oCalcService;
	}];
})

app.config(["calcServiceProvider", function(calcServiceProvider){
	calcServiceProvider.config("http://localhost:50047");
}]);