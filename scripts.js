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

    $('.slider-container').on('swipeleft', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    $('.slider-container').on('swiperight', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
});
