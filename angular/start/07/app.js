function customerCtrl($scope) {

	var customerList = [
		{name: '영희', age: 10},
		{name: '순희', age: 28}
	];

	var youngCusterList = [];


	angular.forEach(customerList, function (value) {
		if (value.age < 18) {
			youngCusterList.push(value);
		}
	});

	$scope.customerList = customerList;
	$scope.youngCusterList = youngCusterList;

}

angular.module('myApp', [])
	.controller('customerCtrl', customerCtrl);
