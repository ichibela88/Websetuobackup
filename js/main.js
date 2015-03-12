(function(){

var counter = 0;

// Each time the timer increments
setInterval(function(){ 
	console.log(counter)
	counter = counter + 1;

	if (counter < 3) {
		$("#image-"+counter).addClass('active')
	} else {
		$('.image').removeClass('active');
		counter = 0;
	}
	
}, 3000);



	// Start writing your JavaScript inside, and only inside this function


}).call(this);