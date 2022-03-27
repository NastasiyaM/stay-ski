$(function(){
    $('.testimonials__slider').slick({
    arrows: false,    
    dots: true,
    fade: true,   
});

$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');
  $('.menu__btn').toggleClass('menu__btn--active');
});

});


let center = [47.810344, 13.047994];


function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 17
	});

let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
		iconImageHref: 'images/icons-marker.png',
		iconImageSize: [46, 61],
		iconImageOffset: [50, -100]
    
    });    

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(placemark);

}

ymaps.ready(init);



