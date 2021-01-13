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
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/script.js"></script>
    <script type="text/javascript" src="https://vk.com/js/api/openapi.js?168"></script>
    <script type="text/javascript">VK.init({apiId: 7527108, onlyWidgets: true});</script>
    <script src="https://vk.com/js/api/openapi.js?160" async onload="VK.Widgets.Group('vk_groups', {mode: 4, width: 'auto', height: '600', wide: 0, no_cover: 1 }, 47645207);"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>
<body style="background-image: url('/brand/{{$brand->image}}')">
<div class="container top">
    <div class="brand" data-href="{{$brand->url}}"></div>
    <a href="/"><img class="logo" src="/img/logo.png"></a>
</div>

<div class="container scene">

    <div class="menu">
        <nav>
            <div class="menuitem">
                <a class="menuitema" href="/about">О сервере</a>
            </div>
            <div class="menuitem">
                <span class="menuitema">База знаний <i class="glyphicon glyphicon-menu-down"></i></span>
                <div class="menuiteminner">
                    <div class="col-md-3">
                        <a href="/weapons" class="mainmenulink">Оружие</a>
                        <a href="/armor" class="mainmenulink">Броня</a>
                        <a href="/sets" class="mainmenulink">Сеты</a>
                        <a href="/accessory" class="mainmenulink">Бижутерия</a>
                    </div>
                    <div class="col-md-3">
                        <a href="/recipes" class="mainmenulink">Рецепты</a>
                        <a href="/items" class="mainmenulink">Предметы</a>
                        <a href="/monsters" class="mainmenulink">Монстры</a>
                        <a href="/npc" class="mainmenulink">NPC</a>
                    </div>
                    <div class="col-md-3">
                        <a href="/raids" class="mainmenulink">Рейд-Боссы</a>
                        <a href="/skills" class="mainmenulink">Скилы/Классы</a>
                        <a data-href="https://linedia.ru/wiki/%D0%93%D0%B0%D0%B9%D0%B4%D1%8B_%D0%B8_%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0">Гайды <i class="glyphicon glyphicon-new-window smallextlink"></i></a>
                        <a data-href="https://linedia.ru/wiki/%D0%9A%D0%B2%D0%B5%D1%81%D1%82%D1%8B">Квесты <i class="glyphicon glyphicon-new-window smallextlink"></i></a>
                    </div>
                    <div class="col-md-3">
                        <img class="cat" src="/img/cat.png" alt="cat">
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="menuitem">
                <a class="menuitema" href="//forum.dreamworld.su">Форум</a>
            </div>
            <div class="menuitem">
                <a class="menuitema" href="/shop">Магазин</a>
            </div>
            <div class="menuitem">
                <a class="menuitema" href="/support">Техподдержка</a>
            </div>
            <div class="menuitem">
                <a class="menuitema" href="/sell">Рынок</a>
            </div>
            <div class="menuitem">
                <a class="menuitema" href="/worldmap">Карта респауна</a>
            </div>
        </nav>
    </div>

    <div class="content">
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        @yield('content')
    </div>

    <div class="footer"></div>

</div>

</body>
</html>
