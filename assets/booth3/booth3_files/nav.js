var config = {
	over: showSub,
	timeout: 250,   
	out: hideSub
}
$('#nav li').hoverIntent(config);

function showSub(){
	$(this).find('ul').fadeIn('fast');
}

function hideSub(){
	$(this).find('ul').fadeOut('fast');
}