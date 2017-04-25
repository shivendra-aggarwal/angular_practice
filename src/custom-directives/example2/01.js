var app = angular.module("app",[]);

app.controller("emp",["$scope","empService",function($scope,empService){
	$scope.doSearch = function(){
		empService.findEmployeeById($scope.searchEmpNo, function(result){
			$scope.empno = result.empno;
			$scope.name = result.name;
			$scope.sal = result.sal;
			$scope.depno = result.depno;
			$scope.hireddate = result.hiredDate;
		});
	};
}]);

app.service("empService",["$http","$log",function($http,$log){
	this.findEmployeeById = function(empId,callBack){
		$http({
			url: "http://localhost:50047/api/employees/"+empId,
			method: "GET"
		}).then(function(resp){
			callBack(resp.data);
		},function(resp){
			$log.error("Error occured");
		});
	};
}]);

app.directive("empDetails",function(){
	return{
		templateUrl: "emp-details.html"
	};
});