document.addEventListener('DOMContentLoaded', function () {
  const productButtons = document.querySelectorAll('.add-product');
  const contactForm = document.getElementById('contactForm');

  productButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const productName = button.dataset.product;
      window.alert('Đã thêm ' + productName + ' vào giỏ hàng!');
    });
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      return;
    }

    window.alert('Cảm ơn bạn! LUMI sẽ liên hệ lại sớm.');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });
});
