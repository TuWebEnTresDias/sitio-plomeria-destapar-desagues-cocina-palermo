(function () {
  "use strict";

  var form = document.getElementById("wa-form");
  var note = document.getElementById("form-note");

  if (!form || !note) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    note.hidden = false;
    note.textContent = "El canal de WhatsApp está pendiente de configuración. La referencia actual es [WHATSAPP].";
  });
}());
