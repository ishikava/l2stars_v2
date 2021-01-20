<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta property="og:image" content="/img/cropped-logo-192x192.png">
    <title>Title</title>
    <link rel="canonical" href="https://l2stars.com">
    <link rel="icon" type="image/gif" href="/favicon.gif">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/css/jquery-ui.min.css">
    <link rel="stylesheet" href="/css/theme.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/numberAnimate.js"></script>
    <script src="/js/jquery-ui.min.js"></script>
    <script src="/js/script.js"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>
<body style="background-image: url('/brand/{{$brand->image}}')">
<div class="container top">
    <div class="brand" data-href="{{$brand->url}}"></div>
    <div class="logocont">
        <a href="/">l2stars.com</a>
    </div>
</div>

<div class="container nopad">
    <div class="anons">
        <h1><a href="/" title="Анонс Серверов Lineage 2">Анонс Серверов Lineage 2</a></h1>
        <span class="filterbtn"><i class="glyphicon glyphicon-menu-hamburger"></i> Подобрать сервер</span>
        <a href="/en"><img class="changelang pull-right" src="/img/ico_en.png" title="English" alt="en"></a>
    </div>
    <div class="filtercont">
        <div class="col-md-4">
            <div class="filter_header">Выберите хроники</div>
            @foreach ($chronicles as $chronicle)
                <div class="filter_item_cont" data-link="/#chronicles_{{$chronicle->chronicles}}" data-chronicles="{{$chronicle->chronicles}}">
                    <div class="filter_item">{{$chronicle->chronicles}}</div>
                </div>
            @endforeach
        </div>
        <div class="col-md-4">
            <div class="filter_header">Выберите рейты</div>
            <div class="filter_items">
                <div class="filter_item_cont" data-link="/#rates_1_10" data-min="1" data-max="10">
                    <div class="filter_item">x1 - x10</div>
                </div>
                <div class="filter_item_cont" data-link="/#rates_10_50" data-min="10" data-max="50">
                    <div class="filter_item">x10 - x50</div>
                </div>
                <div class="filter_item_cont" data-link="/#rates_50_100" data-min="50" data-max="100">
                    <div class="filter_item">x50 - x100</div>
                </div>
                <div class="filter_item_cont" data-link="/#rates_100_9999999" data-min="100" data-max="9999999">
                    <div class="filter_item">x100 - x9999</div>
                </div>
                <div class="filter_item_cont" data-link="/#gve" data-gve="gve">
                    <div class="filter_item">GVE</div>
                </div>
                <div class="filter_item_cont" data-link="/#rvr" data-gve="rvr">
                    <div class="filter_item">RVR</div>
                </div>
                <div class="clearfix"></div>
                <div class="filter_clear" data-link="/">Сбросить фильтр</div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="filter_header">Выберите дату открытия</div>
            <script>var dates = [@foreach ($dates as $date)"{{$date}}",@endforeach];</script>
            <div id="datepicker"></div>
            <input type="hidden" id="datepicker_value" value="{{$current_date}}">
        </div>
        <div class="clearfix"></div>
    </div>
</div>

<div class="container scene">

    <div class="content">
        @yield('content')
    </div>

    <div class="footer">
        <footer>
            <div class="footerheader">
                <div class="col-md-6">
                    <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter"></div>
                </div>
                <div class="col-md-6 counters">
                    <a data-href="https://webmaster.yandex.ru/siteinfo/?site=l2stars.com">
                        <img alt="" src="https://yandex.ru/cycounter?l2stars.com&amp;theme=light&amp;lang=ru" width="88" height="31" border="0">
                    </a>

                    <script type="text/javascript">document.write("<img src='//counter.yadro.ru/hit?t12.6;r" +
                            escape(document.referrer) + ((typeof (screen) == "undefined") ? "" :
                                ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
                                screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
                            ";h" + escape(document.title.substring(0, 150)) + ";" + Math.random() +
                            "' alt='' title='LiveInternet: показано число просмотров за 24" +
                            " часа, посетителей за 24 часа и за сегодня' " +
                            "border='0' width='88' height='31'>")</script>

                    <!-- Yandex.Metrika informer -->
                    <a href="https://metrika.yandex.ru/stat/?id=61340521&amp;from=informer"
                       target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/61340521/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
                                                           style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика"
                                                           title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="61340521"
                                                           data-lang="ru"/></a>
                    <!-- /Yandex.Metrika informer -->

                    <!-- Yandex.Metrika counter -->
                    <script type="text/javascript">
                        (function (m, e, t, r, i, k, a) {
                            m[i] = m[i] || function () {
                                (m[i].a = m[i].a || []).push(arguments)
                            };
                            m[i].l = 1 * new Date();
                            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
                        })
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(61340521, "init", {
                            clickmap: true,
                            trackLinks: true,
                            accurateTrackBounce: true,
                            webvisor: true
                        });
                    </script>
                    <noscript>
                        <div><img src="https://mc.yandex.ru/watch/61340521" style="position:absolute; left:-9999px;" alt=""/></div>
                    </noscript>
                    <!-- /Yandex.Metrika counter -->
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="col-md-4">
                <a href="/" class="footerlink">Добавить сервер в анонс</a>
                <a href="/" class="footerlink">Квесты Lineage 2</a>
                <a href="/" class="footerlink">Политика конфиденциальности</a>
                <a href="/" class="footerlink">Пользовательское соглашение и возврат средств</a>
            </div>
            <div class="col-md-4">
                <p class="footertext">По всем возникшим вопросам, пожалуйста обращайтесь в техподдержку по почте: <a class="linkpointer" data-href="mailto:support@l2stars.com">support@l2stars.com</a> или в нашу группу Вконтакте
                    <a class="linkpointer" data-href="https://vk.com/linedia_ru">https://vk.com/linedia_ru</a></p>
                <a class="linkpointer" data-href="https://linedia.ru" class="footerlink">База знаний Linedia.ru</a>
            </div>
            <div class="col-md-4">
                <p class="footertext">Для получения подробной статистики, используйте открытый доступ в <a class="linkpointer" data-href="https://www.liveinternet.ru/stat/l2stars.com/">Liveinternet</a><br>
                    Или запросите гостевой доступ к Яндекс.Метрике</p>
            </div>
            <div class="clearfix"></div>
            <div class="copycont">All rights belong to NCSoft. Servers listed on this page are used only for the purpose of acquaintance with the game. <span class="pull-right">L2stars.com &copy; by Dreamworld Entertainment GmbH</span>
            </div>
        </footer>
    </div>

</div>

<a class="scrolltop" href="#top" rel="nofollow"><img src="/img/arrow-top.png">Наверх</a>

</body>
</html>
