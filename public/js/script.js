$(document).ready(function () {

    //menu
    $('.menuitem').hover(function () {
        $('.menuiteminner').hide();
        $(this).find('.menuiteminner').show();
    }, function () {
        $('.menuiteminner').hide();
    }).bind("click", function () {
        $(this).find('.menuiteminner').toggle();
    });

    //data-href
    $("[data-href]").bind("click", function () {
        window.open($(this).attr("data-href"), '_blank');
        return false;
    });

    //data-link
    $("[data-link]").bind("click", function () {
        window.location = $(this).attr('data-link');
        return false;
    });

    // //clickunder
    // if (typeof $.cookie('click') === 'undefined'){
    //     $('a[href]').bind('click', function () {
    //         $.cookie('dwpopup', 'true', { expires: 1, path: '/' });
    //         //window.location = 'https://l2op.ru/#linedia';
    //         window.location = 'https://ketrawars.net/page/x1ru';
    //         window.open(this.href);
    //         return false;
    //     });
    // }

    //numbers animate
    let $span = $('.counter');
    $span.numberAnimate();

    $('.countercont').bind('click', function () {
        let id = $('.countercont').index(this);
        $span.eq(id).numberAnimate('set', parseInt($span.eq(id).attr('data-numberanimate-value')) + 1);
        $(this).unbind('click');
    });

    //scroll top
    $("a[href='#top']").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.scrolltop').fadeIn(300);
        } else {
            $('.scrolltop').fadeOut(300);
        }
    });


    let wrapper = $('.wrapper');
    let height = wrapper.height();
    let newheight = $('.heighter').height();
    let opened = false;

    //index height wrapper
    $('.moreservers').bind('click', function () {
        if(!opened){
            wrapper.stop().animate({height: newheight}, 700);
            opened = true;
        } else {
            wrapper.stop().animate({height: height}, 700);
            opened = false;
        }
    });


    //datepicker
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $(function () {
        $("#datepicker").datepicker({
            onSelect: function (date) {
                window.location = "/#date_" + $(this).datepicker('getDate').getDate() + "_" + ($(this).datepicker('getDate').getMonth() + 1);
                sortServersDate($(this).datepicker('getDate').getDate(), $(this).datepicker('getDate').getMonth() + 1);
            },
            beforeShowDay: function (date) {
                if ($.inArray(date.getDate() + "|" + (date.getMonth() + 1), dates) >= 0) {
                    return [true, 'highlight', ''];
                } else {
                    return [false, '', ''];
                }
            }
        });
        $("#datepicker").datepicker("setDate", $('#datepicker_value').val());
    });


    //show info
    var show_info = function () {

        var uri = decodeURI(window.location.toString()).split('#');
        var request = "";
        if (uri[1]) {
            request = uri[1].split('_');
        }
        switch (request[0]) {
            case 'chronicles' :
                $('.showinfocont').show().find('i').text('Сервера по хроникам: ' + request[1]);
                break;
            case 'rates' :
                $('.showinfocont').show().find('i').text('Сервера по рейтам: x' + request[1] + ' / x' + request[2]);
                break;
            case 'date' :
                $('.showinfocont').show().find('i').text('Сервера по дате: ' + request[1] + ' ' + localMonths[request[2]]);
                break;
        }

        if (!$('.visible').length) {
            $('.showinfocont').show().find('i').text('Ни одного сервера не найдено');
        }
    };

    //sort servers
    var sortServersChronicles = function (key, value) {

        $('.vipserver, .server').removeClass('visible').hide();

        $('.vipserver, .server').each(function (index) {
            if ($(this).attr(key) == value) {
                $(this).addClass('visible').show();
            }
        });
        //
        // $('.servergroup').each(function (index) {
        //     if ($(this).find('.visible').length) {
        //         $(this).show();
        //     }
        // });

       // show_info();
    };

    var sortServersRates = function (min, max) {
        $('.showinfocont').hide();
        $('.servergroup').hide();
        $('.serveritem, .serveritem2, .serveritem3').removeClass('visible').hide();

        $('.serveritem, .serveritem2, .serveritem3').each(function (index) {
            var rate = $(this).attr('data-rate');
            if (parseInt(rate) >= parseInt(min) && parseInt(rate) <= parseInt(max)) {
                $(this).addClass('visible').show();
            }
        });

        $('.servergroup').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        show_info();
    };

    var sortServersDate = function (day, month) {
        $('.showinfocont').hide();
        $('.servergroup').hide();
        $('.serveritem, .serveritem2, .serveritem3').removeClass('visible').hide();

        $('.serveritem, .serveritem2, .serveritem3').each(function (index) {
            var dataday = $(this).attr('data-day');
            var datamonth = $(this).attr('data-month');
            if (parseInt(dataday) == parseInt(day) && parseInt(datamonth) == parseInt(month)) {
                $(this).addClass('visible').show();
            }
        });

        $('.servergroup').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        show_info();
    };

    $('[data-chronicles]').bind('click', function () {
        sortServersChronicles('data-chronicle', $(this).attr('data-chronicles'));
    });

    $('.sb_item_cont2').bind('click', function () {
        sortServersRates($(this).attr('data-min'), $(this).attr('data-max'));
    });

    //parse url to find if redirect needed on page load
    // var uri = decodeURI(window.location.toString()).split('#');
    // var request = "";
    // if (uri[1]) {
    //     request = uri[1].split('_');
    // }
    // switch (request[0]) {
    //     case 'chronicles' :
    //         sortServersChronicles('data-' + request[0], request[1]);
    //         break;
    //     case 'rates' :
    //         sortServersRates(request[1], request[2]);
    //         break;
    //     case 'date' :
    //         sortServersDate(request[1], request[2]);
    //         break;
    // }

});
