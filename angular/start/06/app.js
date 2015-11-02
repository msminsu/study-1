function switchCtrl($scope) {

	$scope.checked = true;
	$scope.checked2 = true;
}

angular.module('myApp', [])
	.controller('switch', switchCtrl);
