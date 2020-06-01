$(function(){
    $('#search').one('click', function(){
            console.log('clicked');
        $('<input>', {class: 'barSearch', placeholder: 'search'}).appendTo('#search');

        $('.barSearch').animate({opacity: '1', width: '100%'}, 500, 'linear');
    })
})