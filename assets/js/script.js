

// tooltip
$(function () {
    $("#enviar").tooltip();
});


$(document).ready(function () {
    // enviar contacto
    $("#enviar").click(function () {
        alert("Contacto enviado correctamente!")
    });

    // smooth scroll
    $("a").on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});