(function () {
  document.documentElement.classList.add('js-enabled');
  var button = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu-principal');
  if (!button || !menu) return;

  var label = button.querySelector('.menu-label');
  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    label.textContent = open ? 'Cerrar menú' : 'Abrir menú';
  }
  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setOpen(false);
      button.focus();
    }
  });
}());
