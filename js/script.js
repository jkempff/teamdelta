(function ($, window, undefined) {
    $(function () {
        var $body = $('body');

        $('#menu-toggle').click(function () {
            $body.toggleClass('show-menu');
        });

        $(window).resize(function () {
            if($(this).width() > 680) {
                $body.removeClass('show-menu');
            }
        });

        // $('#nav li a').click(function(e){
        //     e.preventDefault();
        //     $body.addClass('loading');
        //     setTimeout(function () {
        //         $body.removeClass('loading');
        //     }, 500);
        //     return;
        // })
    });
})(jQuery, window);