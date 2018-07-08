(function () {
  var modalProduct = document.querySelector('.modal-adding-product');

  document.querySelectorAll('.buy-button').forEach(function(x) {x.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalProduct.classList.remove('visually-hidden');
      modalProduct.classList.add('modal-open');

      var basketButton = document.querySelector('.main-header-basket');
      basketButton.classList.add('full-basket');
      var arr = basketButton.text.split(': ');
      arr[1]++;
      basketButton.text = arr.join(': ');
    });
  });

  var close = function (evt) {
    evt.preventDefault();
    modalProduct.classList.add('visually-hidden');
    modalProduct.classList.remove('modal-open');
  }

  modalProduct.querySelector('.modal-close-adding-product').addEventListener('click', function (evt) {
    close(evt);
  });
  modalProduct.querySelector('.modal-continue-shoppnig-button').addEventListener('click', function (evt) {
    close(evt);
  });
})();
