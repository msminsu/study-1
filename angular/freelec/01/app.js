var handler = {
	total:0,
	handleEvent: function (evnet) {
		this._init(evnet);
		//console.log('event called ' + ++this.total);
	},
	_init:function(evnet){
		console.log('event called ' + ++this.total);
	}
};

var input = document.getElementById('text1');

input.addEventListener('click', handler, false);
