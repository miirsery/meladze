/* HARBURGER MAIN-MENU*/
$('.footer__item-media').on('click', function () {
    $('.footer__item-menu').toggle();
});

/* MAP */
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 6
    })
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально) 

    customPlacemark0 = new ymaps.Placemark([55.752577, 37.632134], { // Создаем метку с координатами точки
        balloonContent: '<h4> Заголовок метки</h4><p>Описание метки.</p> <a class="myMapClose" onclick="myMap.balloon.close()">X</a>' // содержимое балуна в формате html, все стили в css
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg', // картинка иконки
        iconImageSize: [36, 36], // размер иконки в пикселях
        iconImageOffset: [-18, -36], // позиция иконки в пикселях(считается от верхнего левого угла)
        balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
        balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
        balloonImageHref: 'img/baloon.jpg', // Картинка бэкграунд балуна
        balloonImageOffset: [-36, -90], // смещание балуна, его необходимо подогнать
        balloonImageSize: [270, 90], // размер картинки-бэкграунда балуна
        balloonShadow: true
    });

    // Добавляем метки на карту
    myMap.geoObjects.add(customPlacemark0);

}

