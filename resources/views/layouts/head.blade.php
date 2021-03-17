<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="{{$meta['keywords']}}">
    <meta name="description" content="{{$meta['description']}}">
    <meta property="og:image" content="/img/cropped-logo-192x192.png">
    <title>{{$meta['title']}}</title>
    <link rel="canonical" @if(@isset($meta['canonical'])) href="https://l2stars.com{{$meta['canonical']}}"> @else @php echo 'href="https://l2stars.com'.$_SERVER['REQUEST_URI'].'">'; @endphp @endif

    <link rel="icon" type="image/gif" href="/favicon.gif">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/css/jquery-ui.min.css">
    <link rel="stylesheet" href="/css/theme.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/jquery.js"></script>
    <script src="/js/jquery.cookie.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/numberAnimate.js"></script>
    <script src="/js/jquery-ui.min.js"></script>
    <script src="/js/script.js"></script>
    <script type="text/javascript" src="https://vk.com/js/api/openapi.js?168"></script>
    <script type="text/javascript">VK.init({apiId: 7527108, onlyWidgets: true});</script>
    <script src="https://vk.com/js/api/openapi.js?160" async onload="VK.Widgets.Group('vk_groups', {mode: 4, width: 'auto', height: '600', wide: 0, no_cover: 1 }, 47645207);"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>
