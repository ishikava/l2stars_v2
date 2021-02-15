@extends('layouts.index')

@section('content')

    @include('layouts.sidebar')

    <div class="col-md-9 page">

        {{--
        <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-1634828634862162"
                     data-ad-slot="8645699716"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
        --}}

        <br> <br> <br> <br> <br> <br> <br><br> <br>

        @if(@isset($content))

            @if(@isset($meta['h1']))
                <div class="h1cont">
                    <h1 class="pageh1">{{$meta['h1']}}</h1>
                    @if(@isset($switcher))
                        <div class="switcher">
                            @foreach($switcher as $switch)
                                <div class="switcheritem @if($loop->index < 1) switcheritemon @endif">{{$switch}}</div>
                            @endforeach
                        </div>
                        <div class="clearfix"></div>
                    @endif
                </div>
            @endif

            @if(@isset($meta['info']))
                <div class="info">{{$meta['seo']}}</div>
            @endif

            {!! $content !!}

        @endif

        {{--
         <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-1634828634862162"
                     data-ad-slot="8029077459"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
        --}}

        <br> <br> <br> <br> <br> <br> <br><br> <br><br> <br><br> <br><br> <br>

        <div id="vk_comments"></div>
        <script type="text/javascript">VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});</script>

    </div>

    @if(@isset($meta['seo']))
        <div class="clearfix"></div>
        <div class="fader">&nbsp;</div>
        <div class="col-md-12 seo">{{$meta['seo']}}</div>
    @endif

    <div class="clearfix"></div>

@endsection
