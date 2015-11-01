(function ($) {
	var menuList = [
		{itemId: 1, itemName: '샌드위치', itemPrice: 2000, itemCount: 0},
		{itemId: 2, itemName: '아메리카노', itemPrice: 1000, itemCount: 0},
		{itemId: 3, itemName: '카푸치노', itemPrice: 1500, itemCount: 0}
	];

	var menuListTpl = $('#menuListTpl').html();
	var invoiceTpl = $('#invoiceTpl').html();

	var menuListHtml = Mustache.render(menuListTpl, menuList);
	var invoiceHtml = Mustache.render(invoiceTpl, {totalPrice: 0});

	var invoiceEl = $('#invoice').html(invoiceHtml);

	$('#menu-list').html(menuListHtml);

	$('#addContract').on('click', function () {
		var totalPrice = 0;

		for (var i = menuList.length - 1; i >= 0; i--) {
			var price = menuList[i].itemPrice;
			var count = $('#item-id-' + menuList[i].itemId).find('.item-count').val();
			totalPrice = totalPrice + (price * Number(count));
		}
		invoiceEl.html(Mustache.render(invoiceTpl, {totalPrice: totalPrice}));
	});
}(window.jQuery));

function mainCtrl($scope) {
	$scope.menuList = [
		{itemId: 1, itemName: '샌드위치', itemPrice: 2000, itemCount: 0},
		{itemId: 2, itemName: '아메리카노', itemPrice: 1000, itemCount: 0},
		{itemId: 3, itemName: '카푸치노', itemPrice: 1500, itemCount: 0}
	];

	$scope.totalPrice = 0;

	$scope.buy = function () {
		$scope.totalPrice = 0;

		angular.forEach($scope.menuList, function (menu) {
			$scope.totalPrice = $scope.totalPrice + (menu.itemPrice * Number(menu.itemCount));
		});
	};
}

angular.module('myApp', [])
	.controller('mainCtrl', mainCtrl);
