$(document).ready(function(){
	
	$('li.all-link').click(function(){
		// $('.movie').hide();
		$('.movie').show();
	});

	$('li.action-link').click(function(){
		$('.movie').hide();
		$('.movie.action').show();
	});

	$('li.adventure-link').click(function(){
		$('.movie').hide();
		$('.movie.adventure').show();
	});

	$('li.comedy-link').click(function(){
		$('.movie').hide();
		$('.movie.comedy').show();
	});

	$('li.crime-link').click(function(){
		$('.movie').hide();
		$('.movie.crime').show();
	});

	$('li.documentary-link').click(function(){
		$('.movie').hide();
		$('.movie.documentary').show();
	});

	$('li.drama-link').click(function(){
		$('.movie').hide();
		$('.movie.drama').show();
	});

	$('li.family-link').click(function(){
		$('.movie').hide();
		$('.movie.family').show();
	});

	$('li.fantasy-link').click(function(){
		$('.movie').hide();
		$('.movie.fantasy').show();
	});

	$('li.horror-link').click(function(){
		$('.movie').hide();
		$('.movie.horror').show();
	});

	$('li.independent-link').click(function(){
		$('.movie').hide();
		$('.movie.independent').show();
	});

	$('li.international-link').click(function(){
		$('.movie').hide();
		$('.movie.international').show();
	});

	$('li.musical-link').click(function(){
		$('.movie').hide();
		$('.movie.musical').show();
	});

	$('li.mystery-link').click(function(){
		$('.movie').hide();
		$('.movie.mystery').show();
	});

	$('li.romance-link').click(function(){
		$('.movie').hide();
		$('.movie.romance').show();
	});

	$('li.scifi-link').click(function(){
		$('.movie').hide();
		$('.movie.scifi').show();
	});

	$('li.sports-link').click(function(){
		$('.movie').hide();
		$('.movie.sports').show();
	});

	$('li.thriller-link').click(function(){
		$('.movie').hide();
		$('.movie.thriller').show();
	});

	$('li.western-link').click(function(){
		$('.movie').hide();
		$('.movie.western').show();
	});

	$('#mobile-nav-button').click(function(){
		$('#mobile-nav').toggle();
	});


});