$(document).ready(function(){
	$('#move').click(function(){
		var characterPosition = parseFloat($('#background').css("right"));
		$('#background').css( "right", characterPosition + 100 + "px");
	});
});

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        var characterPosition = parseFloat($('#background').css("right"));
		$('#background').css( "right", characterPosition - 50 + "px");
        break;

        case 38: // up
        var characterPosition = parseFloat($('#background').css("top"));
		$('#background').css( "top", characterPosition + 50 + "px");
        break;

        case 39: // right
        var characterPosition = parseFloat($('#background').css("right"));
		$('#background').css( "right", characterPosition + 50 + "px");
        break;

        case 40: // down
        var characterPosition = parseFloat($('#background').css("top"));
		$('#background').css( "top", characterPosition - 50 + "px");
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});