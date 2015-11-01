
// jquery
$(function() {
	var name = 'demoon';
	var favorite = ['사과', '딸기', '포도'];
	$('#greeting').text('hello '+name);

	for(var i=0; i<favorite.length; i++){
		$('#favorite').append('<li>'+favorite[i]+'</li>');
	}
});

//mustache
$(function () {
	var person ={
		name:'demoon',
		favorite:['사과', '딸기', '포도']
	};

	var template = $('#persontpl').html();

	var html = Mustache.render(template, person);
	$('.mustache').html(html);
});