var signUpDocsClick = function(){
	mixpanel.track('sign up docs header btn clicked', {
	    'url' : location.href
	});
}

$('#signUpHeader').on('click', function(){
	signUpDocsClick();
});

