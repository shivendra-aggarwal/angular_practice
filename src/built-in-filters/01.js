var app = angular.module("app",[]);

app.controller("emp",["empService","$scope",function(empService,$scope){
	empService.findEmployees(function(result){
		$scope.employees = result;
	});

	$scope.doSearch = function(){
		empService.findEmployeeById($scope.searchEmpNo,function(result){
			debugger;
			$scope.empno = result.empno;
			$scope.name = result.name;
			$scope.sal = result.sal;
			$scope.depno = result.depno;
			$scope.hireddate = result.hiredDate;
			$scope.isSalAbove1K = parseInt(result.sal)>1000;
			//$scope.ENAME = $filter("uppercase")(result.name);
		})
	};

}])

app.service("empService",["$http","$filter","$log",function($http,$filter,$log){
	this.findEmployeeById = function(empno,callBack){
		$http({
			url: "http://localhost:50047/api/employees/"+empno,
			method: "GET"
		}).then(function(resp){
			resp.data.name = $filter("uppercase")(resp.data.name);
			callBack(resp.data);
		}, function(resp){
			$log.error("Error Occured");
		});
	};

	this.findEmployees = function(callBack){
		$http({
			url: "http://localhost:50047/api/employees",
			method: "GET"
		}).then(function(resp){
			
			callBack(resp.data);
		}, function(resp){
			$log.error("Error Occured");
		});
	};
}]);