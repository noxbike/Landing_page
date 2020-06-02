$(function(){
    $('#search').one('click', function(){
            console.log('clicked');
        $('<input>', {class: 'barSearch', placeholder: 'search'}).appendTo('#search');

        $('.barSearch').animate({opacity: '1', width: '100%'}, 500, 'linear');
    })

    $('.menu-deroulant').click(function(){
        $('#menu').show();
        $('.menu-deroulant').hide();
        $('#close-menu').show();
    })

    $('#close-menu').click(function(){
        $('#menu').hide();
        $('.menu-deroulant').show();
        $('#close-menu').hide();
    })
})