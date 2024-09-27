const cardsContainer = document.querySelector('.cards');
const botaoEsquerda = document.querySelector('.botao-esquerda');
const botaoDireita = document.querySelector('.botao-direita');
const cardWidth = 310; // Largura de um card, incluindo margens
const numCards = document.querySelectorAll('.card').length;
let currentPosition = 0;

botaoEsquerda.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += cardWidth;
        cardsContainer.style.transition = 'transform 0.5s ease-in-out';
        cardsContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});

botaoDireita.addEventListener('click', () => {
    if (currentPosition > -(cardWidth * (numCards - 1))) {
        currentPosition -= cardWidth;
        cardsContainer.style.transition = 'transform 0.5s ease-in-out';
        cardsContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});
