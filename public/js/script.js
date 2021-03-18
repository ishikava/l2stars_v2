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
        if (!opened) {
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
                $('.moreservers').hide();
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


    //sort servers
    let sortServersChronicles = function (key, value) {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            if ($(this).attr(key) == value) {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };

    let sortServersRates = function (min, max) {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            let str = $(this).attr('data-rates');
            let rate = str.substring(1, str.strlen);
            if (!isNaN(rate) && parseInt(rate) >= parseInt(min) && parseInt(rate) <= parseInt(max)) {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };

    let sortServersRvr = function () {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            if ($(this).attr('data-rates') === 'RVR') {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };

    let sortServersGve = function () {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            if ($(this).attr('data-rates') === 'GVE') {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };

    let sortServersDate = function (day, month) {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            let dataday = $(this).attr('data-day');
            let datamonth = $(this).attr('data-month');
            if (parseInt(dataday) == parseInt(day) && parseInt(datamonth) == parseInt(month)) {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };


    $('[data-chronicles]').bind('click', function () {
        $('.moreservers').hide();
        sortServersChronicles('data-chronicle', $(this).attr('data-chronicles'));
    });

    $('.rates').bind('click', function () {
        $('.moreservers').hide();
        sortServersRates($(this).attr('data-min'), $(this).attr('data-max'));
    });

    $('[data-rvr]').bind('click', function () {
        $('.moreservers').hide();
        sortServersRvr();
    });

    $('[data-gve]').bind('click', function () {
        $('.moreservers').hide();
        sortServersGve();
    });

    $('.filter_clear').bind('click', function () {
        $('.supervipserverscont, .vipserver, .server').show();
        $('.wrapper').stop().animate({height: height}, 500);
        $('.moreservers').show();
    });

    $('.filterbtn').bind('click', function () {
        $('.filtercont').toggle(300, function () {
            if ($(this).is(':visible')) {
                $.cookie('showtopmenu', 'true', {path: '/'});
            } else {
                $.removeCookie('showtopmenu');
            }
        });
    });

    //parse url to find if redirect needed on page load
    var uri = decodeURI(window.location.toString()).split('#');
    var request = "";
    if (uri[1]) {
        request = uri[1].split('_');
    }
    switch (request[0]) {
        case 'chronicles' :
            sortServersChronicles('data-chronicle', request[1]);
            break;
        case 'rates' :
            sortServersRates(request[1], request[2]);
            break;
        case 'date' :
            sortServersDate(request[1], request[2]);
            break;
        case 'rvr' :
            sortServersRvr();
            break;
        case 'gve' :
            sortServersGve();
            break;
    }

    //tabber
    $('#tabberTab li').bind('click', function () {
        $('#tabberTab li a').removeClass('active');
        $('.tabber').hide();
        $(this).find('a').addClass('active');
        $('.tabber[data-tab="' + $(this).find('a').text() + '"]').fadeIn(300);
    });

    //questtab
    $('.questtab tr[data-type="' + $('.questtab').attr('data-sort') + '"]').show();

    //switcheritem
    $('.switcheritem').bind('click', function () {
        $('.switcheritem').toggleClass('switcheritemon');
        $('.skillisttab').toggle();
    });

    //dbfilter
    $('.dbfilter').bind('input', function () {
        $('.dbsets').show();
        $('.dbfilterbtn').removeClass('btn-primary');
        var text = $(this).val();
        var pat = new RegExp(text, "i");
        $('.dbcont, .monstercont, .raidcontainer').hide().each(function () {
            var txt = $(this).attr('data-name');
            if (txt.search(pat) != -1) {
                $(this).show();
            }
        });
        $('.dbsets').each(function () {
            if ($(this).find('.dbcont:visible').length == 0) {
                $(this).hide();
            }
        });
    });

    //gradefilter
    $('.gradefilter').bind('change', function () {
        $('.dbsets').show();
        var text = $(this).val();
        var pat = new RegExp(text, "i");
        $('.dbcont, .monstercont, .raidcontainer').hide().each(function () {
            var txt = $(this).attr('data-grade');
            if (txt.search(pat) != -1) {
                if (currentdbfilterbtn != 'Выберите грейд') {
                    if ($(this).attr('data-type') == currentdbfilterbtn) {
                        $(this).show();
                    }
                } else {
                    $(this).show();
                }
            }
        });
        $('.dbsets').each(function () {
            if ($(this).find('.dbcont:visible').length == 0) {
                $(this).hide();
            }
        });
    });

    //dbfilterbtn
    var currentdbfilterbtn = 'Выберите грейд';
    $('.dbfilterbtn').bind('click', function () {
        $('.dbsets').show();
        $('.dbfilterbtn').removeClass('btn-primary');
        $(this).addClass('btn-primary');
        var pat = new RegExp("^" + $(this).attr('data-type') + "$", "i");
        currentdbfilterbtn = $(this).attr('data-type');
        $('.dbcont').hide().each(function () {
            var txt = $(this).attr('data-type');
            if (txt.search(pat) != -1) {
                if ($('.gradefilter').val() != 'Выберите грейд') {
                    if ($(this).attr('data-grade') == $('.gradefilter').val()) {
                        $(this).show();
                    }
                } else {
                    $(this).show();
                }
            }
        });
        $('.dbsets').each(function () {
            if ($(this).find('.dbcont:visible').length == 0) {
                $(this).hide();
            }
        });
    });

    //setfilter
    $('.setfilter').bind('input', function () {
        $('.dbsets').show();
        var text = $(this).val();
        var pat = new RegExp(text, "i");
        $('.setcont').hide().each(function () {
            var txt = $(this).attr('data-name');
            if (txt.search(pat) != -1) {
                $(this).show();
            }
        });
        $('.dbsets').each(function () {
            if ($(this).find('.setcont:visible').length == 0) {
                $(this).hide();
            }
        });
    });

    //monsterlvl
    $('.monsterlvl').bind('input', function () {

        var search = $(this).val();

        $('.monstercont, .raidcontainer').hide().each(function () {
            var lvl = $(this).attr('data-lvl');
            if (parseInt(lvl) >= (parseInt(search) - 2) && parseInt(lvl) <= (parseInt(search) + 2)) {
                $(this).show();
            }
        });

        if (search == '') {
            $('.monstercont, .raidcontainer').show();
        }
    });

    //dbskill
    $('.dbskill').bind('input', function () {

        var search = $(this).val();

        $('.monstercont, .raidcontainer').hide().each(function () {

            var cnt = $(this).find('*[alt="' + search + '"]').length;

            if (cnt > 0) {
                $(this).show();
            }
        });

        if (search == '') {
            $('.monstercont, .raidcontainer').show();
        }

    });

    //npcmap
    let npcmap = $('.npcmap').eq(0);
    let npcpointer = $('.npcposition').eq(0);
    let npcmapcont = $('.npcmapcont');

    npcmap.css('top', (-npcpointer.attr('data-top') + 450) + "px");
    npcmap.css('left', (-npcpointer.attr('data-left') + npcmapcont.width() / 2) + "px");

    $('.npcposition').each(function () {
        $(this).css('top', ($(this).attr('data-top') - npcpointer.attr('data-top') + npcmapcont.height() / 2) + "px");
        $(this).css('left', ($(this).attr('data-left') - npcpointer.attr('data-left') + npcmapcont.width() / 2) + "px");
    });

    //worldmap
    $('.playercontainer').hover(function () {
        $(this).addClass('wmzindex').find('.playerinfo').show(0);
    }, function () {
        $('.playerinfo').removeClass('wmzindex').hide(0);
    });


    //worldmap drag
    var drag = false;
    var dragx = 0;
    var dragy = 0;
    var worldmap = document.getElementById('worldmap');
    if (worldmap) {
        worldmap.onmousedown = function () {
            drag = true;
            dragx = event.pageX;
            dragy = event.pageY;
            return false;
        };
        worldmap.onmouseup = function () {
            drag = false;
        };
        worldmap.onmouseleave = function () {
            drag = false;
        };
        worldmap.onmousemove = function () {
            if (drag) {
                this.scrollLeft = this.scrollLeft - event.pageX + dragx;
                window.scrollTo(0, window.scrollY - event.pageY + dragy);
                dragx = event.pageX;
                dragy = event.pageY;
            }
        };
    }

    //worldmap raidcontainer
    $.each($('.raidcontainer'), function () {
        if (parseInt($(this).css('left')) > 1266) {
            $(this).find('.raidcontainerinner').css('margin-left', '-' + (parseInt($(this).css('left')) - 1240) + 'px');
        }

        if (parseInt($(this).css('top')) > 2200) {
            var cont = $(this).find('.raidcontainerinner');
            cont.css('margin-top', (2640 - (parseInt($(this).css('top')) + parseInt(cont.height()) + 100)) + 'px');
        }
    });
    $('.raidcontainer').hover(function () {
        $(this).addClass('wmzindex').find('.raidcontainerinner').show();
    }, function () {
        $(this).removeClass('wmzindex');
        $('.raidcontainerinner').hide();
    });
    $('.raidcontainer').bind('click', function () {
        if($(this).hasClass('wmzindex')){
            $(this).removeClass('wmzindex');
            $('.raidcontainerinner').hide();
        } else {
            $('.raidcontainerinner').hide();
            $(this).addClass('wmzindex').find('.raidcontainerinner').show();
        }
    });

    //rbslider
    $("#rbslider").slider({
        min: 20,
        max: 90,
        range: true,
        values: [20, 90],
        create: function (event, ui) {
            $('.ui-slider-handle').eq(0).html('20&nbsp;lvl');
            $('.ui-slider-handle').eq(1).html('90&nbsp;lvl');
        },
        change: function (event, ui) {
            $('.monstercont').hide().each(function () {
                var lvl = parseInt($(this).attr('data-lvl'));
                if (lvl >= ui.values[0] && lvl <= ui.values[1]) {
                    $(this).show();
                }
            });
        },
        slide: function (event, ui) {
            $('.ui-slider-handle').eq(0).html(ui.values[0] + '&nbsp;lvl');
            $('.ui-slider-handle').eq(1).html(ui.values[1] + '&nbsp;lvl');
        }
    });

    //monsterslider
    $("#monsterslider").slider({
        min: 1,
        max: 87,
        range: true,
        values: [1, 87],
        create: function (event, ui) {
            $('.ui-slider-handle').eq(0).html('1&nbsp;lvl');
            $('.ui-slider-handle').eq(1).html('87&nbsp;lvl');
        },
        change: function (event, ui) {
            $('.monstercont').hide().each(function () {
                var lvl = parseInt($(this).attr('data-lvl'));
                if (lvl >= ui.values[0] && lvl <= ui.values[1]) {
                    $(this).show();
                }
            });
        },
        slide: function (event, ui) {
            $('.ui-slider-handle').eq(0).html(ui.values[0] + '&nbsp;lvl');
            $('.ui-slider-handle').eq(1).html(ui.values[1] + '&nbsp;lvl');
        }
    });

    //catacombslink
    $('.catacombslink').bind('click', function () {
        $('.catacombsrow').hide().eq($('.catacombslink').index(this)).show(500);
    });

    //details
    $('.detailsbtn').bind('click', function () {
        $('.details').toggle();
    });

});
