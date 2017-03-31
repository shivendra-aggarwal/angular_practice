var app = angular.module("app",[]);
app.controller('emp',["$scope","$http",function($scope,$http){
	$scope.a=10;
	$scope.b=20;


	$scope.doSum=function(){
		$http({
			url: 'http://localhost:4467/Sum?a=' + $scope.a + '&b=' + $scope.b ,
			method: 'GET'

		}).then(function(resp){
			//Success
			$scope.sum = resp.data;
		},
		function(resp){
			//Failure
			console.log("ERROR occurred");
		});
	};
}]);