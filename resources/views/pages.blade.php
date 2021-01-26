@extends('layouts.index')

@section('content')

    @include('layouts.sidebar')

    <div class="col-md-9 page">

{{--        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-1634828634862162"
             data-ad-slot="8645699716"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>--}}

        @if(@isset($content))

            @if(@isset($meta['h1']))
                <div class="h1cont"><h1 class="pageh1">{{$meta['h1']}}</h1></div>
            @endif

            @if(@isset($meta['info']))
                <div class="info">{{$meta['seo']}}</div>
            @endif

            {!! $content !!}

        @endif

{{--        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-1634828634862162"
             data-ad-slot="8029077459"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>


        <div id="vk_comments"></div>
        <script type="text/javascript">VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});</script>--}}

    </div>

    @if(@isset($meta['seo']))
        <div class="clearfix"></div>
        <div class="fader">&nbsp;</div>
        <div class="col-md-12 seo">{{$meta['seo']}}</div>
    @endif

    <div class="clearfix"></div>

@endsection
