// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('mobile-nav');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var willShow = menu.hidden;
      menu.hidden = !willShow;
      toggle.setAttribute('aria-expanded', String(willShow));
      var icon = toggle.querySelector('i');
      if (icon) {
        icon.className = willShow ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });
  }
});
