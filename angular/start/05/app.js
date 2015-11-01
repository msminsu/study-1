function customerCtrl($scope) {
	$scope.customerList = [
		{name:'영희', age:25},
		{name:'순희', age:28}
	];

	$scope.myFriend = {
		name:'철수',
		age:25,
		habby:'축구'
	};
}

angular.module('myApp',[])
	.controller('customer', customerCtrl);
