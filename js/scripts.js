$(document).ready(function () {
    // Enviar Formulario de Contacto
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        alert('Mensaje enviado correctamente.');
        $(this).trigger('reset');
    });

    // Reservar Cita
    $('#appointment-form').on('submit', function (e) {
        e.preventDefault();
        alert('Cita reservada correctamente.');
        $(this).trigger('reset');
    });
});
