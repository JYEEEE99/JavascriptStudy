var tabButton = $('.tab-button');
var tabContent = $('.tab-content');

tabButton.on('click', function() { 
    var i = $(this).index();
    tabButton.removeClass('orange');
    $(this).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(i).addClass('show');
})
