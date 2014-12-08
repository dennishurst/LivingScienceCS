// JavaScript source code
$(document).ready(function () {
    $('div').mouseenter(function () {
        $('div').fadeTo('fast', 1);
    });
    $('div').mouseleave(function () {
        $('div').fadeTo('fast', .5);
    });
});
$(document).ready(function () {
    $('.pull-me').click(function () {
        $('.panel').slideToggle('slow');
    });
});
$(document).ready(function () {
    $('#button').click(function () {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', '.item', function () {
        $(this).remove();
    });
});
$(document).ready(function () {
    $(document).keydown(function (key) {
        switch (parseInt(key.which, 10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({ left: "-=10px" }, 'fast');
                break;
                // Up Arrow Pressed
            case 38:
                $('img').animate({ top: "-=10px" }, 'fast');
                break;
                // Right Arrow Pressed
            case 39:
                $('img').animate({ left: "+=10px" }, 'fast');
                break;
                // Down Array Pressed
            case 40:
                $('img').animate({ top: "+=10px" }, 'fast');
                break;
        }
    });
});
$(document).ready(function () {
    $('#menu').accordion();
});