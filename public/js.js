
$(function(){

	var image_container;

	var random_horizontal = 100;
	var random_vertical = 100;

	var horizontal_min = 200;
	var horizontal_max = 800;
	var vertical_min = 200;
	var vertical_max = 800;

	var horizontal_max = $(window).width();
	var vertical_max = $(window).height();

	var random_number = 0;

	var url = "http://placekitten.com/"

	$()

	$("img").mouseover(function(event){

		image_container = event.target;

		random_horizontal = randomIntegerBetween(horizontal_min, horizontal_max);
		random_vertical = randomIntegerBetween(vertical_min, vertical_max);
		
		$(".image-horizontal").text(random_horizontal + "px");
		$(".image-vertical").text(random_vertical + "px");

		$(image_container).attr("src",url + random_horizontal + "/" + random_vertical);
	});
});


function randomIntegerBetween(min_val, max_val){
	// returns an integer between the min_val
	// and max_val (inclusive)
	
	// by default, the range is 0 to 100
	
	// if only 1 argument is set then that
	// number is the min_val

	// if min_val is greater than max_val
	// then the values are swapped

	var val_min;
	var val_max;
	var range;
	var return_value;

	// set min and max
	val_min = Math.min(min_val, max_val);
	val_max = Math.max(min_val, max_val);
	
	range = val_max - val_min;
	return_value = val_min + randomInteger(range);
	return return_value;
}

function randomInteger(factor){
	// returns a random integer between 0 and the factor
	// factor default value is 100

	factor = factor || 100;	// set default to 100
	return Math.round(Math.random() * factor);
}
