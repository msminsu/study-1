function control($scope) {
	$scope.value1 = true;
	$scope.value2 = 'bad';
}

angular.module('form', []).controller('formCtrl', control);