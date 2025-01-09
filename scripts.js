$(document).ready(function() {
    const images = $('.main-image img');
    let currentIndex = 0;

    function showImage(index) {
        images.hide();
        images.eq(index).show();
    }

    showImage(currentIndex);

    $('.prev-btn').on('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    $('.next-btn').on('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    const sliderContainer = document.querySelector('.slider-container');
    const hammer = new Hammer(sliderContainer);

    hammer.on('swipeleft', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    hammer.on('swiperight', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
});
