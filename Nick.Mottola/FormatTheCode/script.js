//
// This class is UGLY, fix it
//
var mySlider = {
    isSliderDown : false,
    SliderColor : "red"
};


//
// This function is UGLY, fix it
//
var clickMe = function(){
    if (mySlider.isSliderDown){
        alert('the slider is down');
    }
    else {
        alert('the slider is up');

    }
}


//
// This function is somewhat UGLY, fix it
// Note that some parts are OK, others are UGLY, just fix the sections
// that break good formatting rules.
//
var goCount = function(){

    var scountFrom = $('#countFrom').val();     //get the value from the count text box
    var icountFrom = parseInt(scountFrom);      //parse the value

    //Next, check to make sure the value we got was a number
    if (isNaN(icountFrom)){
        alert('HEY!, Start from is not a number!  FIX IT, FIX IT NOW!!!!');
        return;
    }

    var scountTo = $('#countTo').val();  icountTo = parseInt(scountTo);
    
    if (isNaN(icountTo)){
        alert('HEY!, Start To is not a number!  FIX IT, FIX IT NOW!!!!');
        return;
    }
    var arrayCount = ["Start<br/>"];        //Create the array and put the first element in it.
    
    //loop from icountFrom to icountTo and add an array element every time
    for (var iCount = icountFrom; iCount <= icountTo; iCount++) {
        arrayCount.push('Add ' + iCount + ' to the array<br/>');
    };

    arrayCount.push(
        'Now the array is complete<br/>'
    );  //Add the "were done" note to the array

    $('#showArray').html(arrayCount.toString());        //update the table with a value.
}




/*
 * I have not done anything to this function, you can leave it alone.
 * However, not that this is calling an anynomus function, you are going to
 * see these a lot in the spring.
 */
$(document).ready(function(){ 

    $('#showArray').html("I will show the count here");

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





