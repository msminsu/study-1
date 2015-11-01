var todoList = [
	{done: true, title: 'angularJs 공부하기'},
	{done: false, title: 'angularJs 독서'},
	{done: false, title: '개인 프로젝트 구성'}
];

function todoCtrl($scope) {
	$scope.appName = 'AngularJs TODO APP';
	$scope.todoList = todoList;
	$scope.addNewTodo = function (newTitle) {
		todoList.push({
			done: false,
			title: newTitle
		});

		$scope.newTitle = '';
	};
	$scope.archive = function () {
		for (var i = todoList.length - 1; i >= 0; i--) {
			if($scope.todoList[i].done){
				$scope.todoList.splice(i,1);
			}
		}
	};

	$scope.remain = function () {
		var remainCount = 0;

		angular.forEach($scope.todoList, function(value) {
			if(value.done ===false ){
				remainCount++
			}
		});

		return remainCount;
	};
}

angular.module('myApp', [])
	.controller('todoCtrl1', todoCtrl);

