$(document).ready(function(){
    $(document).off('click.bs.dropdown.data-api');
})
$(document).ready(function(){
    dropdownOpen();//调用
});

function dropdownOpen() {
    var navbar_dropdown = $('header .dropdown');
    navbar_dropdown.mouseover(function() {
        $(this).addClass('open');
    }).mouseout(function() {
        $(this).removeClass('open');
    });
}