$(document).ready(function() {
    const images = $('.hidden-images img');
    let currentIndex = 0;

    // Функция для отображения изображения
    function showImage(index) {
        const mainImage = $('.main-image img');
        mainImage.attr('src', images.eq(index).attr('src')); // Изменяем изображение
        mainImage.attr('alt', images.eq(index).attr('alt')); // Изменяем alt текст
    }

    // Обработчик для кнопки "Назад"
    $('.prev-btn').on('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Бесконечный цикл
        $('.main-image').css('transform', 'translateX(100%)'); // Сдвиг вправо
        setTimeout(() => {
            showImage(currentIndex);
            $('.main-image').css('transform', 'translateX(0)'); // Возвращаем на место
        }, 500); // Задержка для анимации
    });

    // Обработчик для кнопки "Вперед"
    $('.next-btn').on('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Бесконечный цикл
        $('.main-image').css('transform', 'translateX(-100%)'); // Сдвиг влево
        setTimeout(() => {
            showImage(currentIndex);
            $('.main-image').css('transform', 'translateX(0)'); // Возвращаем на место
        }, 500); // Задержка для анимации
    });
});
