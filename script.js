//botão hamburguer
$('.hamburguer').on('click', () => {
    $('.navbar').toggleClass('active')
})

//Menu lateral
$('.hamburguer').on('click', () => {
    if($('.navbar-nav').hasClass('active')){
        $('.navbar-nav').animate({'left': '-50vw'}, 'medio')
        $('.navbar-nav').removeClass('active')
    } else {
        $('.navbar-nav').animate({'left': '0px'}, 'medio')
        $('.navbar-nav').addClass('active')
    }
})

//Conteudo principal
let janela = $('section').find('.reverse')
let tamanho = innerWidth

if(tamanho < 992){
    $(janela).addClass('flex-column-reverse')
} else {
    $(janela).removeClass('flex-column-reverse')    
}
