
var swiper = new Swiper(".slide-content", {
slidesPerView: 3,
spaceBetween: 25,
loop: true,
centerSlide: 'true',
fade: 'true',
grabCursor: 'true',
pagination: {
el: ".swiper-pagination",
clickable: true,
dynamicBullets: true,
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},

breakpoints:{
0: {
    slidesPerView: 1,
},
520: {
    slidesPerView: 2,
},
950: {
    slidesPerView: 3,
},
},
});


/*// Seletor dos elementos
const slider = document.querySelector('.slider');
const butaoEsquerdo = document.querySelector('.butaoEsquerdo');
const butaoDireito = document.querySelector('.butaoDireito');

// Adiciona um evento de clique para mover o slide para a esquerda
butaoEsquerdo.addEventListener('click', () => {
    // Calcula a posição atual do slider
    const currentPosition = slider.scrollLeft;
    console.log("apertei");
    // Calcula a largura de um cartão (div cartao)
    const cardWidth = slider.querySelector('.cartao').offsetWidth;
    
    // Calcula a quantidade de cartões visíveis na tela
    const visibleCards = Math.floor(slider.clientWidth / cardWidth);
    
    // Move o slider para a esquerda (um cartão por vez)
    slider.scrollTo({
        left: currentPosition - cardWidth * visibleCards,
        behavior: 'smooth'
    });
});

// Adiciona um evento de clique para mover o slide para a direita
butaoDireito.addEventListener('click', () => {
    // Calcula a posição atual do slider
    const currentPosition = slider.scrollLeft;
    console.log("apertei");
    // Calcula a largura de um cartão (div cartao)
    const cardWidth = slider.querySelector('.cartao').offsetWidth;
    
    // Calcula a quantidade de cartões visíveis na tela
    const visibleCards = Math.floor(slider.clientWidth / cardWidth);
    
    // Move o slider para a direita (um cartão por vez)
    slider.scrollTo({
        left: currentPosition + cardWidth * visibleCards,
        behavior: 'smooth'
    });
});

// Adiciona a div cartao com tamanho 30% maior no meio do slider
const cartaoMaior = document.createElement('div');
cartaoMaior.classList.add('cartao');
cartaoMaior.style.transform = 'scale(1.3)'; // Aumenta o tamanho em 30%
slider.appendChild(cartaoMaior);
// Seletor dos elementos


// Adiciona 10 divs cartao ao slider
for (let i = 0; i < 10; i++) {
    const cartao = document.createElement('div');
    cartao.classList.add('cartao');
    slider.appendChild(cartao);
}
*/