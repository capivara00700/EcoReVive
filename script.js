//botão hamburguer
$('.hamburguer').on('click', () => {
    $('.navbar').toggleClass('active')
})

//Menu lateral
$('.hamburguer').on('click', () => {
    if($('.navbar-nav').hasClass('active')){
        $('.navbar-nav').animate({'right': '-50vw'}, 'medio')
        $('.navbar-nav').removeClass('active')
        $('html').css({'position': 'relative'})
    } else {
        $('.navbar-nav').animate({'right': '0px'}, 'medio')
        $('.navbar-nav').addClass('active')
        $('html').css({'position': 'fixed'})
    }
})
