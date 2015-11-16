$(document).ready(function(){
	
	// type with letters

	$('.letters').each(function() {

	  var $letterWrapper = $(this);
	  var letters = $letterWrapper.html().split('');
	  var letterArray = [];

	  for (i = 0; i < letters.length; i++) {
	    console.log(letters[i]);

	    var character = letters[i];
	    var chracterDefinition = $('.letter-def[data-character="' + character + '"]').html();
	    var characterHTML = '<div class="show-letter" data-character="' + character + '">' + chracterDefinition + '</div>';
	    
	    letterArray.push(characterHTML);
	  };

	  $letterWrapper.html(letterArray);

	});


});