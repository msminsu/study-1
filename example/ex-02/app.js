(function ($) {
	function SpinBox(obj) {
			this.btnMinus = obj.find('.btn-minus');
			this.btnPlus = obj.find('.btn-plus');
			this.input = obj.find('input');

			this._addEvent(this.btnPlus, 'click', this._plus, this);
			this._addEvent(this.btnMinus, 'click', this._Minus, this);
	}

	SpinBox.prototype = {
		_plus: function(){
			this.input.val(+this.input.val() + 1);
		},

		_Minus: function(){
			this.input.val(+this.input.val() - 1 > 0 ? +this.input.val() - 1 : 0);
		},

		_addEvent: function(element, type, fn, scope){
			element.on(type, function(e){
				fn.call(scope, e);
			});
		}
	};

	$('.spin-box').each(function () {
		new SpinBox($(this));
	});
}(window.jQuery));



