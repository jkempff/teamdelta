(function ($, window, undefined) {
    "use strict";
    $(function () {
        var $body = $('body');

        $('#menu-toggle').click(function () {
            $body.toggleClass('show-menu');
        });

        $(window).resize(function () {
            if ($(this).width() > 680) {
                $body.removeClass('show-menu');
            }
        });

        $('#nav li a').click(function(e){
            $body.removeClass('show-menu');
        })
    });
})(jQuery, window);