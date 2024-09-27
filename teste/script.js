document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    function addItem(content) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = content;
        carousel.appendChild(item);
    }

    // Adicione seu conteúdo HTML aqui chamando a função addItem
    addItem('Div 1');
    addItem('Div 2');
    addItem('Div 3');

    function showItem(index) {
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

    function showNextItem() {
        currentIndex++;
        showItem(currentIndex);
    }

    function showPreviousItem() {
        currentIndex--;
        showItem(currentIndex);
    }

    prevButton.addEventListener('click', showPreviousItem);
    nextButton.addEventListener('click', showNextItem);

    // Inicialmente, mostre a primeira div
    showItem(currentIndex);
});
