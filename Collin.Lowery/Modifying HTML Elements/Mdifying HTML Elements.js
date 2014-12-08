$(document) .ready(function(){
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('#list').append("<p>"+toAdd+"</p>")    
    });
});
