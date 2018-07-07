'use strict';

(function () {
  var slider = document.querySelector('.slider');
  var sliderContent = slider.querySelector('.slider-content');
  var changeSlider = function (x) {
    var sliderItems = sliderContent.querySelectorAll('.slider-item');
    sliderItems.forEach(function(a) {
      a.classList.add('visually-hidden');
    });
    var sliderCircles = slider.querySelectorAll('.slider-circle');
    sliderCircles.forEach(function(a) {
      a.classList.remove('active-circle');
    });

    slider.querySelector('.' + x + '-circle').classList.add('active-circle');
    slider.querySelector('.' + x + 's-slider-item').classList.remove('visually-hidden');
  };

  var SLIDER_ARR = ['puncher', 'drill'];
  var sliderCounter = 0;

  slider.querySelector('.puncher-circle').addEventListener('click', function () {
    changeSlider('puncher');
  });
  slider.querySelector('.drill-circle').addEventListener('click', function () {
    changeSlider('drill');
  });
  slider.querySelector('.slider-button-prev').addEventListener('click', function () {
    sliderCounter = Math.abs((sliderCounter - 1) % SLIDER_ARR.length);
    changeSlider(SLIDER_ARR[sliderCounter]);
  });
  slider.querySelector('.slider-button-next').addEventListener('click', function () {
    sliderCounter = (sliderCounter + 1) % SLIDER_ARR.length;
    changeSlider(SLIDER_ARR[sliderCounter]);
  });

  var services = document.querySelector('.service-content');

  var changeServices = function (x) {
    var buttons = services.querySelectorAll('.service-button');
    buttons.forEach(function(a) {
      a.classList.remove('active-service-button');
    });
    var items = services.querySelectorAll('.service-item');
    items.forEach(function(a) {
      a.classList.add('visually-hidden');
    });
    services.querySelector('.service-button-' + x).classList.add('active-service-button');
    services.querySelector('.service-item-' + x).classList.remove('visually-hidden');
  };
  services.querySelector('.service-button-delivery').addEventListener('click', function () {
    changeServices('delivery');
  });
  services.querySelector('.service-button-guarantee').addEventListener('click', function () {
    changeServices('guarantee');
  });
  services.querySelector('.service-button-credit').addEventListener('click', function () {
    changeServices('credit');
  });
})();
