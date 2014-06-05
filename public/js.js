
$(function(){

	var image_container;

	changeImage($("img"));

	$("img").mouseover(function(event){
		changeImage(event.target);
	});

	$("img").click(function(event){
		changeImage(event.target);
	});

	$(window).resize(function(event){
		windowObject = $(event.target)
		width = $(windowObject).width();
		height = $(windowObject).height();
		$(".window-horizontal").text(width + "px");
		$(".window-vertical").text(height + "px");
	});
});

function changeImage(image_container){

	// source of images
	var url = "http://placekitten.com/"

	// set the max size equal to the size
	// of the brower window,
	// less the header,
	// less the footer
	
	var header_height = $("header").height();
	var footer_height = $("footer").height();
	
	var vertical_max = $(window).height() - header_height - footer_height;
	var horizontal_max = $(window).width();

	console.log("Window height: " + $(window).height());
	console.log("Header height: " + header_height);
	console.log("Footer height: " + footer_height);

	
	// arbitrary minimum image size is 200 x 200
	var horizontal_min = 200;
	var vertical_min = 200;
	
	// variables for storing the randomly generated dimensions
	var random_horizontal;
	var random_vertical;

	// generate and store random dimensions
	random_horizontal = randomIntegerBetween(horizontal_min, horizontal_max);
	random_vertical = randomIntegerBetween(vertical_min, vertical_max);
	
	// set the src attribute to refresh the image
	$(image_container).attr("src",url + random_horizontal + "/" + random_vertical);


}


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
