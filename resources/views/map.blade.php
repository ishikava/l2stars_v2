<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="{{$meta['keywords']}}">
    <meta name="description" content="{{$meta['description']}}">
    <meta property="og:image" content="/img/cropped-logo-192x192.png">
    <title>{{$meta['title']}}</title>
    <link rel="icon" type="image/gif" href="/favicon.gif">
    <style>
        .npcposition {
            position: absolute;
            width: 35px;
            top: 0;
            left: 0;
        }
    </style>
</head>
<body>

<img src="/img/map.jpg">

<img id="{{$id}}" src="/img/pointer.gif" class="npcposition" style="left: {{$data['x']}}px;top: {{$data['y']}}px;">

</body></html>
