$(document).keydown(function(e) {
    var backgroundPosRight = parseFloat($('#background').css('right'));
    var backgroundPosTop = parseFloat($('#background').css('top'));
    var backgroundHeight = parseFloat($('#background').css('height'));
    var backgroundWidth = parseFloat($('#background').css('width'));


    switch(e.which) {
        case 37: // left
        if ((backgroundPosTop >= 240) || (backgroundPosTop + backgroundHeight <= 200) || (backgroundPosRight > 440) || (backgroundPosRight + backgroundWidth <= 440)){
		$('#background').css( 'right', backgroundPosRight - 40 + 'px');}
        break;

        case 38: // up
        if ((backgroundPosTop + backgroundHeight < 200) || (backgroundPosTop >= 240) || (backgroundPosRight >= 440) || (backgroundPosRight + backgroundWidth < 440)){
		$('#background').css( 'top', backgroundPosTop + 40 + 'px');}
        break;

        case 39: // right
		if ((backgroundPosTop >= 240) || (backgroundPosTop + backgroundHeight <= 200) || (backgroundPosRight + backgroundWidth <= 360) || (backgroundPosRight >= 440)){
        $('#background').css( 'right', backgroundPosRight + 40 + 'px');}
        break;

        case 40: // down
        if ((backgroundPosTop > 240) || (backgroundPosTop + backgroundHeight <= 200) || (backgroundPosRight >= 440) || (backgroundPosRight + backgroundWidth < 440)){
		$('#background').css( 'top', backgroundPosTop - 40 + 'px');}
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
