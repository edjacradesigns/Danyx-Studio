/* Shared FormSubmit settings for every form on the site. */
(function () {
  var homeUrl = new URL('index.html', window.location.href).href;

  document.querySelectorAll('form').forEach(function (form) {
    var action = form.getAttribute('action') || '';
    if (!/formsubmit\.co/i.test(action)) return;

    function hiddenField(name, value) {
      var field = form.querySelector('input[name="' + name + '"]');
      if (!field) {
        field = document.createElement('input');
        field.type = 'hidden';
        field.name = name;
        form.appendChild(field);
      }
      field.value = value;
    }

    // Keep CAPTCHA disabled and send successful FormSubmit submissions home.
    hiddenField('_captcha', 'false');
    hiddenField('_next', homeUrl);
  });
})();
