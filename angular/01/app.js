var todoList = [
	{done:true, title:'angularJs 공부하기'},
	{done:false, title:'angularJs 독서'},
	{done:false, title:'개인 프로젝트 구성'}
];

function todoCtrl($scope) {
	$scope.appName = 'AngularJs TODO APP';
	$scope.todoList = todoList;
}


angular.module('myApp', [])
	.controller('todoCtrl', todoCtrl);

