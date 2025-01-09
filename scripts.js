$(document).ready(function() {
    const images = $('.hidden-images img');
    let currentIndex = 0;

    function showImage(index, direction) {
        const mainImage = $('.main-image img');
        mainImage.removeClass('slide-left slide-right'); // Убираем предыдущие классы анимации
        
        if (direction === 'left') {
            mainImage.addClass('slide-right'); // Добавляем класс для анимации вправо
        } else {
            mainImage.addClass('slide-left'); // Добавляем класс для анимации влево
        }

        setTimeout(() => {
            mainImage.attr('src', images.eq(index).attr('src')); // Изменяем изображение
            mainImage.attr('alt', images.eq(index).attr('alt')); // Изменяем alt текст
            mainImage.removeClass('slide-left slide-right'); // Убираем классы анимации
        }, 500); // Задержка, чтобы анимация успела проиграться
    }

    // Обработчик для кнопки "Назад"
    $('.prev-btn').on('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Бесконечный цикл
        showImage(currentIndex, 'left');
    });

    // Обработчик для кнопки "Вперед"
    $('.next-btn').on('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Бесконечный цикл
        showImage(currentIndex, 'right');
    });
});
