var input = document.querySelector('#text1');
var list = document.querySelector('#list');

input.addEventListener('click', function (event) {
	var evt = new Event('refresh');
	evt.data = input.value;
	list.dispatchEvent(evt);
});

list.addEventListener('refresh', function (event) {
	console.log('list... refresh');
	console.log(event.data);
}, false);
