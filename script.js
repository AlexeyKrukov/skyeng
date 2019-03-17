$('#type1').click(() => {
    $('#popup1').show();
    $('.overlay_popup').show();
});
$('#type2').click(() => {
    $('#popup2').show();
    $('.overlay_popup').show();
});
$('#type3').click(() => {
    $('#popup3').show();
    $('.overlay_popup').show();
});
$('.cross').click(function() {
    $('.overlay_popup, .popup').hide();
});
$('.overlay_popup').click(function() {
    $('.overlay_popup, .popup').hide();
});

