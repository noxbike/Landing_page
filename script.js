$(function(){
    // when you click on loupe the input search appears whith animation
    $('#search').one('click', function(){
            console.log('clicked');
        $('<input>', {class: 'barSearch', placeholder: 'search'}).appendTo('#search');

        $('.barSearch').animate({opacity: '1', width: '70%'}, 500, 'linear');
    })

    // menu smartphone add with animation
    $('#icon').click(function(){
        var result = $('#menu').css('opacity');
        if(result == 0){
            $('#menu').show().animate({'opacity': 1}, 500, 'linear');
        }
        else{
            $('#menu').hide().css('opacity', 0);
        }
    })
})