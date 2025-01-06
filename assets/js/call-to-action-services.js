$(document).on('click', '.btn-call-to-action', function (e) {
    e.preventDefault();

    var link = $(this).attr('href').replace('/#section-', '#section-');

    if (link.indexOf('#section-') === 0) {
        if (!$('body').hasClass('home')) {
            location.href = '/' + link;
        }

        $('body, html').animate({ scrollTop: $(link).offset().top - 50 }, 400);
    }
});
