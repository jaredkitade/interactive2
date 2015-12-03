$(document).ready(function(){
	
	$('li.action-link').click(function(){
		$('.movie').hide();
		$('.movie.action').show();
	});

	$('#mobile-nav-button').click(function(){
		$('#mobile-nav').toggle();
	})

});