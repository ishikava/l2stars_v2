@extends('layouts.index')

@section('content')

    <div class="wrapper">

        <div class="heighter">

            <div class="col-md-6">

                <div class="header">{{$lang[0]}}</div>

                @if(!empty($supervipservers))
                <div class="supervipserverscont">

                    @foreach ($supervipservers as $supervipserver)
                        <div class="vipserver supervipserver" style="background-image: url('/background/{{$supervipserver->background}}')" data-chronicle="{{$supervipserver->chronicles}}" data-rates="{{$supervipserver->rates}}" data-month="{{$supervipserver->month}}" data-day="{{$supervipserver->day}}">
                            <div class="vipserverinner">
                                <div class="logoimgcont"><img src="/logo/{{$supervipserver->logo}}" alt="{{$supervipserver->host}}"></div>
                                <div class="countercontwrapper">
                                     <div class="countercont" data-sid="{{$supervipserver->id}}">
                                        <div class="counterlike">👍</div>
                                        <span class="counter">{{$supervipserver->likes}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="vipserverouter" data-href="{{$supervipserver->url}}" data-sid="{{$supervipserver->id}}"
                                 title="&#11088; {{$supervipserver->host}} &#11088;  [ {{$supervipserver->chronicles}} {{$supervipserver->rates}} ] Дата открытия : {{$supervipserver->day}} {{$supervipserver->loc_month}} {{$supervipserver->year}}
                                     &#10;Статистика переходов : за 24 часа : {{$supervipserver->day_vis}} | за неделю : {{$supervipserver->week_vis}} | за все время : {{$supervipserver->all_vis}}">
                                <span class="vipservertext">{{$supervipserver->text}}</span>
                                <div class="vipserverinfo">
                                    <div class="bages hidden-xs">
                                        @if($supervipserver->b_super)<img class="bonus2" src="/img/supervip.png" title="Super VIP сервер">@endif
                                        @if($supervipserver->b_en)<img class="bonus2" src="/img/ico_en.png" title="Международный сервер">@endif
                                        @if($supervipserver->b_bonus)<img class="bonus2" src="/img/ico_bonus.png" title="Бонус новичкам">@endif
                                        @if($supervipserver->b_start)<img class="bonus2" src="/img/ico_start.png" title="Бонус старт">@endif
                                        @if($supervipserver->b_addon)<img class="bonus2" src="/img/ico_addon.png" title="Сервер с дополнениями">@endif
                                        @if($supervipserver->b_obt)<img class="bonus2" src="/img/ico_obt.png" title="ОБТ">@endif
                                        @if($supervipserver->b_pts)<img class="bonus2" src="/img/ico_pts.png" title="PTS">@endif
                                    </div>
                                    <div class="vipserverparams">
                                        <span class="rates">{{$supervipserver->rates}}</span>
                                        <span class="chronicles">{{$supervipserver->chronicles}}</span>
                                        <span class="date hidden-xs hidden-md">
                                    @if($supervipserver->today)
                                                <i class="highlighter">Сегодня @if($supervipserver->showtime)в {{$supervipserver->loc_time}}@endif</i>
                                            @elseif($supervipserver->yesterday)<i class="highlighter">Вчера @if($supervipserver->showtime)в {{$supervipserver->loc_time}}@endif</i>
                                            @elseif($supervipserver->tomorrow)<i class="highlighter">Завтра @if($supervipserver->showtime)в {{$supervipserver->loc_time}}@endif</i>
                                            @else{{$supervipserver->day}} {{$supervipserver->loc_month}} @if($supervipserver->showtime)в {{$supervipserver->loc_time}}@endif
                                            @endif
                                </span>
                                        <span class="shortdate show-xs hidden-sm show-md hidden-lg">{{$supervipserver->date}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    @endforeach

                </div>
                @endif

                <div class="vipserverscont">

                    @foreach ($vipservers as $vipserver)
                        <div class="vipserver" data-chronicle="{{$vipserver->chronicles}}" data-rates="{{$vipserver->rates}}" data-month="{{$vipserver->month}}" data-day="{{$vipserver->day}}">
                            <div class="vipserverinner">
                                <div class="logoimgcont"><img src="/img/cropped-logo-192x192.png" alt="{{$vipserver->host}}"></div>
                                <div class="countercontwrapper">
                                     <div class="countercont" data-sid="{{$vipserver->id}}">
                                        <div class="counterlike">👍</div>
                                        <span class="counter">{{$vipserver->likes}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="vipserverouter" data-href="{{$vipserver->url}}" data-sid="{{$vipserver->id}}"
                                 title="&#11088; {{$vipserver->host}} &#11088;  [ {{$vipserver->chronicles}} {{$vipserver->rates}} ] Дата открытия : {{$vipserver->day}} {{$vipserver->loc_month}} {{$vipserver->year}}
                                     &#10;Статистика переходов : за 24 часа : {{$vipserver->day_vis}} | за неделю : {{$vipserver->week_vis}} | за все время : {{$vipserver->all_vis}}">
                                <span class="vipservertext">{{$vipserver->text}}</span>
                                <div class="vipserverinfo">
                                    <div class="bages hidden-xs">
                                        @if($vipserver->b_en)<img class="bonus2" src="/img/ico_en.png" title="Международный сервер">@endif
                                        @if($vipserver->b_bonus)<img class="bonus2" src="/img/ico_bonus.png" title="Бонус новичкам">@endif
                                        @if($vipserver->b_start)<img class="bonus2" src="/img/ico_start.png" title="Бонус старт">@endif
                                        @if($vipserver->b_addon)<img class="bonus2" src="/img/ico_addon.png" title="Сервер с дополнениями">@endif
                                        @if($vipserver->b_obt)<img class="bonus2" src="/img/ico_obt.png" title="ОБТ">@endif
                                        @if($vipserver->b_pts)<img class="bonus2" src="/img/ico_pts.png" title="PTS">@endif
                                    </div>
                                    <div class="vipserverparams">
                                        <span class="rates">{{$vipserver->rates}}</span>
                                        <span class="chronicles">{{$vipserver->chronicles}}</span>
                                        <span class="date hidden-xs hidden-md">
                                    @if($vipserver->today)
                                                <i class="highlighter">Сегодня @if($vipserver->showtime)в {{$vipserver->loc_time}}@endif</i>
                                            @elseif($vipserver->yesterday)<i class="highlighter">Вчера @if($vipserver->showtime)в {{$vipserver->loc_time}}@endif</i>
                                            @elseif($vipserver->tomorrow)<i class="highlighter">Завтра @if($vipserver->showtime)в {{$vipserver->loc_time}}@endif</i>
                                            @else{{$vipserver->day}} {{$vipserver->loc_month}} @if($vipserver->showtime)в {{$vipserver->loc_time}}@endif
                                            @endif
                                </span>
                                        <span class="shortdate show-xs hidden-sm show-md hidden-lg">{{$vipserver->date}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    @endforeach

                </div>

                <div class="serverscont">

                    @foreach ($servers as $server)
                        <div class="server" data-href="{{$server->url}}" data-chronicle="{{$server->chronicles}}" data-rates="{{$server->rates}}" data-month="{{$server->month}}"
                             data-day="{{$server->day}}" data-sid="{{$server->id}}"
                             title="&#11088; {{$server->host}} &#11088;  [ {{$server->chronicles}} {{$server->rates}} ] Дата открытия : {{$server->day}} {{$server->loc_month}} {{$server->year}}
                                 &#10;Статистика переходов : за 24 часа : {{$server->day_vis}} | за неделю : {{$server->week_vis}} | за все время : {{$server->all_vis}}">
                            <div class="servertext">{{$server->text}}</div>
                            <div class="serverparams">
                                <span class="rates">{{$server->rates}}</span>
                                <span class="chronicles">{{$server->chronicles}}</span>
                                <span class="date hidden-xs hidden-md">
                                    @if($server->today)
                                        <i class="highlighter">Сегодня @if($server->showtime)в {{$server->loc_time}}@endif</i>
                                    @elseif($server->yesterday)<i class="highlighter">Вчера @if($server->showtime)в {{$server->loc_time}}@endif</i>
                                    @elseif($server->tomorrow)<i class="highlighter">Завтра @if($server->showtime)в {{$server->loc_time}}@endif</i>
                                    @else{{$server->day}} {{$server->loc_month}} @if($server->showtime)в {{$server->loc_time}}@endif
                                    @endif
                                </span>
                                <span class="shortdate show-xs hidden-sm show-md hidden-lg">{{$server->date}}</span>
                            </div>
                        </div>
                    @endforeach

                </div>

            </div>

            <div class="col-md-6">

                <div class="header">{{$lang[1]}}</div>

                @if(!empty($old_supervipservers))
                    <div class="supervipserverscont">

                        @foreach ($old_supervipservers as $old_supervipserver)
                            <div class="vipserver supervipserver" style="background-image: url('/background/{{$old_supervipserver->background}}')" data-chronicle="{{$old_supervipserver->chronicles}}" data-rates="{{$old_supervipserver->rates}}" data-month="{{$old_supervipserver->month}}" data-day="{{$old_supervipserver->day}}">
                                <div class="vipserverinner">
                                    <div class="logoimgcont"><img src="/logo/{{$old_supervipserver->logo}}" alt="{{$old_supervipserver->host}}"></div>
                                    <div class="countercontwrapper">
                                         <div class="countercont" data-sid="{{$old_supervipserver->id}}">
                                            <div class="counterlike">👍</div>
                                            <span class="counter">{{$old_supervipserver->likes}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="vipserverouter" data-href="{{$old_supervipserver->url}}" data-sid="{{$old_supervipserver->id}}"
                                     title="&#11088; {{$old_supervipserver->host}} &#11088;  [ {{$old_supervipserver->chronicles}} {{$old_supervipserver->rates}} ] Дата открытия : {{$old_supervipserver->day}} {{$old_supervipserver->loc_month}} {{$old_supervipserver->year}}
                                         &#10;Статистика переходов : за 24 часа : {{$old_supervipserver->day_vis}} | за неделю : {{$old_supervipserver->week_vis}} | за все время : {{$old_supervipserver->all_vis}}">
                                    <span class="vipservertext">{{$old_supervipserver->text}}</span>
                                    <div class="vipserverinfo">
                                        <div class="bages hidden-xs">
                                            @if($old_supervipserver->b_super)<img class="bonus2" src="/img/supervip.png" title="Super VIP сервер">@endif
                                            @if($old_supervipserver->b_en)<img class="bonus2" src="/img/ico_en.png" title="Международный сервер">@endif
                                            @if($old_supervipserver->b_bonus)<img class="bonus2" src="/img/ico_bonus.png" title="Бонус новичкам">@endif
                                            @if($old_supervipserver->b_start)<img class="bonus2" src="/img/ico_start.png" title="Бонус старт">@endif
                                            @if($old_supervipserver->b_addon)<img class="bonus2" src="/img/ico_addon.png" title="Сервер с дополнениями">@endif
                                            @if($old_supervipserver->b_obt)<img class="bonus2" src="/img/ico_obt.png" title="ОБТ">@endif
                                            @if($old_supervipserver->b_pts)<img class="bonus2" src="/img/ico_pts.png" title="PTS">@endif
                                        </div>
                                        <div class="vipserverparams">
                                            <span class="rates">{{$old_supervipserver->rates}}</span>
                                            <span class="chronicles">{{$old_supervipserver->chronicles}}</span>
                                            <span class="date hidden-xs hidden-md">
                                    @if($old_supervipserver->today)
                                                    <i class="highlighter">Сегодня @if($old_supervipserver->showtime)в {{$old_supervipserver->loc_time}}@endif</i>
                                                @elseif($old_supervipserver->yesterday)<i class="highlighter">Вчера @if($old_supervipserver->showtime)в {{$old_supervipserver->loc_time}}@endif</i>
                                                @elseif($old_supervipserver->tomorrow)<i class="highlighter">Завтра @if($old_supervipserver->showtime)в {{$old_supervipserver->loc_time}}@endif</i>
                                                @else{{$old_supervipserver->day}} {{$old_supervipserver->loc_month}} @if($old_supervipserver->showtime)в {{$old_supervipserver->loc_time}}@endif
                                                @endif
                                </span>
                                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">{{$old_supervipserver->date}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        @endforeach

                    </div>
                @endif

                <div class="vipserverscont">

                    @foreach ($old_vipservers as $old_vipserver)
                        <div class="vipserver" data-chronicle="{{$old_vipserver->chronicles}}" data-rates="{{$old_vipserver->rates}}" data-month="{{$old_vipserver->month}}" data-day="{{$old_vipserver->day}}">
                            <div class="vipserverinner">
                                <div class="logoimgcont"><img src="/img/cropped-logo-192x192.png" alt="{{$old_vipserver->host}}"></div>
                                <div class="countercontwrapper">
                                     <div class="countercont" data-sid="{{$old_vipserver->id}}">
                                        <div class="counterlike">👍</div>
                                        <span class="counter">{{$old_vipserver->likes}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="vipserverouter" data-href="{{$old_vipserver->url}}" data-sid="{{$old_vipserver->id}}"
                                 title="&#11088; {{$old_vipserver->host}} &#11088;  [ {{$old_vipserver->chronicles}} {{$old_vipserver->rates}} ] Дата открытия : {{$old_vipserver->day}} {{$old_vipserver->loc_month}} {{$old_vipserver->year}}
                                     &#10;Статистика переходов : за 24 часа : {{$old_vipserver->day_vis}} | за неделю : {{$old_vipserver->week_vis}} | за все время : {{$old_vipserver->all_vis}}">
                                <span class="vipservertext">{{$old_vipserver->text}}</span>
                                <div class="vipserverinfo">
                                    <div class="bages hidden-xs">
                                        @if($old_vipserver->b_en)<img class="bonus2" src="/img/ico_en.png" title="Международный сервер">@endif
                                        @if($old_vipserver->b_bonus)<img class="bonus2" src="/img/ico_bonus.png" title="Бонус новичкам">@endif
                                        @if($old_vipserver->b_start)<img class="bonus2" src="/img/ico_start.png" title="Бонус старт">@endif
                                        @if($old_vipserver->b_addon)<img class="bonus2" src="/img/ico_addon.png" title="Сервер с дополнениями">@endif
                                        @if($old_vipserver->b_obt)<img class="bonus2" src="/img/ico_obt.png" title="ОБТ">@endif
                                        @if($old_vipserver->b_pts)<img class="bonus2" src="/img/ico_pts.png" title="PTS">@endif
                                    </div>
                                    <div class="vipserverparams">
                                        <span class="rates">{{$old_vipserver->rates}}</span>
                                        <span class="chronicles">{{$old_vipserver->chronicles}}</span>
                                        <span class="date hidden-xs hidden-md">
                                    @if($old_vipserver->today)
                                                <i class="highlighter">Сегодня @if($old_vipserver->showtime)в {{$old_vipserver->loc_time}}@endif</i>
                                            @elseif($old_vipserver->yesterday)<i class="highlighter">Вчера @if($old_vipserver->showtime)в {{$old_vipserver->loc_time}}@endif</i>
                                            @elseif($old_vipserver->tomorrow)<i class="highlighter">Завтра @if($old_vipserver->showtime)в {{$old_vipserver->loc_time}}@endif</i>
                                            @else{{$old_vipserver->day}} {{$old_vipserver->loc_month}} @if($old_vipserver->showtime)в {{$old_vipserver->loc_time}}@endif
                                            @endif
                                </span>
                                        <span class="shortdate show-xs hidden-sm show-md hidden-lg">{{$old_vipserver->date}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    @endforeach

                </div>

                <div class="serverscont">

                    @foreach ($old_servers as $old_server)
                        <div class="server" data-href="{{$old_server->url}}" data-chronicle="{{$old_server->chronicles}}" data-rates="{{$old_server->rates}}" data-month="{{$old_server->month}}"
                             data-day="{{$old_server->day}}" data-sid="{{$old_server->id}}"
                             title="&#11088; {{$old_server->host}} &#11088;  [ {{$old_server->chronicles}} {{$old_server->rates}} ] Дата открытия : {{$old_server->day}} {{$old_server->loc_month}} {{$old_server->year}}
                                 &#10;Статистика переходов : за 24 часа : {{$old_server->day_vis}} | за неделю : {{$old_server->week_vis}} | за все время : {{$old_server->all_vis}}">
                            <div class="servertext">{{$old_server->text}}</div>
                            <div class="serverparams">
                                <span class="rates">{{$old_server->rates}}</span>
                                <span class="chronicles">{{$old_server->chronicles}}</span>
                                <span class="date hidden-xs hidden-md">
                                    @if($old_server->today)
                                        <i class="highlighter">Сегодня @if($old_server->showtime)в {{$old_server->loc_time}}@endif</i>
                                    @elseif($old_server->yesterday)<i class="highlighter">Вчера @if($old_server->showtime)в {{$old_server->loc_time}}@endif</i>
                                    @elseif($old_server->tomorrow)<i class="highlighter">Завтра @if($old_server->showtime)в {{$old_server->loc_time}}@endif</i>
                                    @else{{$old_server->day}} {{$old_server->loc_month}} @if($old_server->showtime)в {{$old_server->loc_time}}@endif
                                    @endif
                                </span>
                                <span class="shortdate show-xs hidden-sm show-md hidden-lg">{{$old_server->date}}</span>
                            </div>
                        </div>
                    @endforeach

                </div>

            </div>

            <div class="clearfix"></div>

        </div>

    </div>

    <div class="fader">&nbsp</div>

    <div class="moreserverscont">
        <div class="moreservers">{{$lang[2]}}</div>
    </div>

    <div class="col-xs-12 maintext">
        {!!$lang[3]!!}
    </div>

    <div class="clearfix"></div>

@endsection
