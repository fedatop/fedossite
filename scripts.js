$(document).ready(function() {
    const images = $('.main-image img');
    let currentIndex = 0;

    function showImage(index) {
        images.hide(); // Скрыть все изображения
        images.eq(index).show(); // Показать текущее изображение
    }

    // Изначально показываем только первое изображение
    showImage(currentIndex);

    // Обработчик для кнопки "Назад"
    $('.prev-btn').on('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Бесконечный цикл
        showImage(currentIndex);
    });

    // Обработчик для кнопки "Вперед"
    $('.next-btn').on('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Бесконечный цикл
        showImage(currentIndex);
    });

    // Обработка свайпов
    $('.slider-container').swipe({
        swipe: function(event, direction) {
            if (direction === 'left') {
                currentIndex = (currentIndex + 1) % images.length; // Вперед
            } else if (direction === 'right') {
                currentIndex = (currentIndex - 1 + images.length) % images.length; // Назад
            }
            showImage(currentIndex);
            event.preventDefault(); // Предотвратить стандартное поведение свайпа
        },
        threshold: 75 // Минимальное расстояние для распознавания свайпа
    });
});
