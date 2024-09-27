document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    function addImage(src) {
        const img = document.createElement('img');
        img.src = src;
        carousel.appendChild(img);
    }

    // Adicione suas imagens aqui chamando a função addImage com o caminho da imagem
    addImage('slide-1.jpg');
    addImage('slide-2.jpg');
    addImage('slide-3.jpg');

    function showImage(index) {
        if (index < 0) {
            index = carousel.children.length - 1;
        } else if (index >= carousel.children.length) {
            index = 0;
        }
        currentIndex = index;

        for (let i = 0; i < carousel.children.length; i++) {
            if (i === currentIndex) {
                carousel.children[i].style.display = 'block';
            } else {
                carousel.children[i].style.display = 'none';
            }
        }
    }

    function showNextImage() {
        currentIndex++;
        showImage(currentIndex);
    }

    function showPreviousImage() {
        currentIndex--;
        showImage(currentIndex);
    }

    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);

    // Inicialmente, mostre a primeira imagem
    showImage(currentIndex);
});
