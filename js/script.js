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

  var isLocalStorage = true;
  var local = {
    login: '',
    email: ''
  };

  try{
    local.login = localSorage.getItem('login');
    local.email = localSorage.getItem('email');
  } catch (err) {
    isLocalStorage = false;
  }

  var modal = document.querySelector('.modal-write-us');
  var name = modal.querySelector('input[name=name]');
  var email = modal.querySelector('input[name=email]');
  var text = modal.querySelector('textarea[name=text]');


  document.querySelector('.contacts .information-button').addEventListener('click', function() {
    modal.classList.remove('visually-hidden');
    modal.classList.add('modal-open');
    name.value = '';
    email.value = '';
    text.value = '';

    if (isLocalStorage && local.login && local.email) {
      name.value = local.login;
      email.value = local.email;
    }

    var closeButton = modal.querySelector('.modal-close-button');

    var closeModal = function () {
      modal.classList.add('visually-hidden');
      modal.classList.remove('modal-open');
      closeButton.removeEventListener('click', closeModal);
    };
    closeButton.addEventListener('click', closeModal);
  });

  var form = modal.querySelector('.write-us');
  form.addEventListener('submit', function (evt) {
    if(!name.value || !email.value || !text.value) {
      evt.preventDefault();
      modal.classList.remove('modal-open');
      modal.classList.remove('modal-error');
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add('modal-error');
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-open")) {
        modal.classList.remove("modal-open");
        modal.classList.remove("modal-error");
        modal.classList.add('visually-hidden');
      }
    }
  });
})();
