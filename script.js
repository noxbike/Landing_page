$(function(){
    $('#search').one('click', function(){
            console.log('clicked');
        $('<input>', {class: 'barSearch', placeholder: 'search'}).appendTo('#search');

        $('.barSearch').animate({opacity: '1', width: '100%'}, 500, 'linear');
    })

    $('.menu-deroulant').click(function(){
        var menuPhone = $('.menu').val();
        if(menuPhone == null)
        {
            var text = $('<div>', {class: 'menu'})
            text.css('font-size', '4em');
            text.html(`<ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>About us</a></li>
            <li id='search'><i class="fas fa-search fa"></i></li>
            </ul>`);
            text.appendTo('#logo-welcome');
        }
        else
        {
            $('.menu').remove();
        }
    })
})