(function () {
  'use strict';

  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
      }
    });
  }

  var form = document.getElementById('bookingForm');
  var note = document.getElementById('formNote');

  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();

      if (!name || !phone) {
        note.textContent = 'Заполните имя и телефон (демо-форма).';
        note.style.color = '#e8a06a';
        return;
      }

      note.style.color = '';
      note.textContent = 'Спасибо, ' + name + '! Это демо: заявка не отправляется. В реальном сайте здесь была бы CRM.';
      form.reset();
    });
  }
})();
