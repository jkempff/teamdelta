(function($, window, undefined) {
    "use strict";
    $(function() {
        var $body = $('body'),
            countdownTimeout;

        $('#menu-toggle').click(function() {
            $body.toggleClass('show-menu');
        });

        $(window).resize(function() {
            if ($(this).width() > 680) {
                $body.removeClass('show-menu');
            }
        });

        $('#nav li a').click(function(e) {
            $body.removeClass('show-menu');
        });

        function initDefaults() {
            $('.team-member-link').click(function(e) {
                e.preventDefault();
                $(this).parent().parent().toggleClass('active');
                return;
            });

            var $carsWrapper = $('#cars'),
                $cars = $('.car');

            $cars.mouseenter(function() {
                $carsWrapper.addClass('car-active');
                $cars.removeClass('active');
                $(this).addClass('active');
            }).mouseleave(function() {
                $carsWrapper.removeClass('car-active');
                $cars.removeClass('active');
            });

            // random sponsors on home

            if ($('.page-idea').length) {
                var i,
                    length,
                    max = 4,
                    $partnerWrapper = $('#partner'),
                    $partners = $('.partner').sort(function (a, b) {
                        return Math.random() * 10 > 5 ? 1 : -1;
                    }).remove();
                $partnerWrapper.empty();

                $partners.each(function(i, partner) {
                    if (i > max) return;
                    $partnerWrapper.append($(partner).show());
                });
            }

            // countdown
            var t = new Date(1398895200000),
                c,
                sb,
                $countdown = $('#countdown');


            function setTime () {
                c = countdown(new Date(), t);
                sb = ['Noch '];

                if(c.months) sb.push(c.months + ' Monate, ');
                if(c.days) sb.push(c.days + ' Tage, ');
                sb.push(c.hours + ' Stunde, ');
                sb.push(c.minutes + ' Minuten und ');
                sb.push(c.seconds + ' Sekunden.');

                $countdown.html(sb.join(''));
            }

            if ($countdown.length && 1 === 3) {
                countdownTimeout = setInterval(setTime, 1000);
            } else if(countdownTimeout) {
                clearTimeout(countdownTimeout);
            }
        };

        $(window).bind('ajaxLoad', initDefaults);
        initDefaults();


    });
}(jQuery, window));