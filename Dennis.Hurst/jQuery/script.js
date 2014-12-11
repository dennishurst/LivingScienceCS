var mySlider = {
	isSliderDown : false,
	SliderColor : "red"
};



/*
 * Anonymous version
 * 

$(document).ready(function(){ 
	//alert('ready');
    $('.pull-me').click(function () {
   		if (mySlider.isSliderDown){
    		mySlider.isSliderDown = false;
    	}
    	else {
    		mySlider.isSliderDown = true;
    	}
        $('.panel').slideToggle('slow');
	});
});
*/

var clickMe = function(){
    
    if (mySlider.isSliderDown){
        alert('the slider is down');
    }
    else {
        alert('the slider is up');
    }
}

var myClickThing = function () {
    alert('hello from myClickThing');
    if (mySlider.isSliderDown){
        mySlider.isSliderDown = false;
    }
    else {
        mySlider.isSliderDown = true;
    }
    
    $('.panel').slideToggle('slow');
}





$(document).ready(function(){
	$('.pull-me').click(myClickThing());
});






