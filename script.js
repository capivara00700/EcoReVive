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

//menu links
$('.nav-link').on('click', () => {
    if(tamanho < 992){
        $('.navbar').toggleClass('active')

        if($('.navbar-nav').hasClass('active')){
            $('.navbar-nav').animate({'left': '-50vw'}, 'medio')
            $('.navbar-nav').removeClass('active')
        } else {
            $('.navbar-nav').animate({'left': '0px'}, 'medio')
            $('.navbar-nav').addClass('active')
        }
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

//Animação opacidade
const myObserver = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } ) 
} )

const elements = document.querySelectorAll('.hidden')
elements.forEach( element => myObserver.observe(element))
