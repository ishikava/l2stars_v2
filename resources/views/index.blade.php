@extends('layouts.index')

@section('content')

    <div class="wrapper">

        <div class="heighter">

            <div class="col-md-6">

                <div class="header">скоро откроются</div>

                <div class="supervipserverscont">

                    <div class="vipserver supervipserver" style="background-image: url('/background/example.jpg')">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                    <img src="img/ico_pts.png" title="3">
                                    <img src="img/ico_start.png" title="4">
                                    <img src="img/ico_en.png" title="5">
                                </div>
                                <div class="params">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="vipserverscont">

                    @foreach ($vipservers as $vipserver)
                        <div class="vipserver" data-chronicles="{{$vipserver->chronicles}}" data-rates="{{$vipserver->rates}}" data-month="{{$vipserver->month}}" data-day="{{$vipserver->day}}" data-sid="{{$vipserver->id}}">
                            <div class="vipserverinner">
                                <img src="/img/cropped-logo-192x192.png" alt="{{$vipserver->host}}">
                                <div class="countercontwrapper">
                                    <div class="countercont">
                                        <div class="counterlike">👍</div>
                                        <span class="counter">123</span>
                                    </div>
                                </div>
                            </div>
                            <div class="vipserverouter" data-href="{{$vipserver->url}}" title="&#11088; {{$vipserver->host}} &#11088;  [ {{$vipserver->chronicles}} x {{$vipserver->rates}} ] Дата открытия : {{$vipserver->day}} {{$vipserver->loc_month}} {{$vipserver->year}}
                                &#10;Статистика переходов : за 24 часа : 0 | за неделю : 0 | за все время : 0">
                                <span class="vipservertext">{{$vipserver->text}}</span>
                                <div class="vipserverinfo">
                                    <div class="bages hidden-xs">
                                        <img src="img/supervip.png" title="Super VIP">
                                        <img src="img/ico_bonus.png" title="2">
                                    </div>
                                    <div class="vipserverparams">
                                        <span class="rates">x{{$vipserver->rates}}</span>
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
                        <div class="server" data-href="{{$server->url}}"  data-chronicles="{{$server->chronicles}}" data-rates="{{$server->rates}}" data-month="{{$server->month}}" data-day="{{$server->day}}" data-sid="{{$server->id}}"
                             title="&#11088; {{$server->host}} &#11088;  [ {{$server->chronicles}} x {{$server->rates}} ] Дата открытия : {{$server->day}} {{$server->loc_month}} {{$server->year}}
                                 &#10;Статистика переходов : за 24 часа : 0 | за неделю : 0 | за все время : 0">
                            <div class="servertext">{{$server->text}}</div>
                            <div class="serverparams">
                                <span class="rates">x{{$server->rates}}</span>
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

                <div class="header">уже открылись</div>

                <div class="supervipserverscont">

                    <div class="vipserver supervipserver" style="background-image: url('/background/example.jpg')">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                    <img src="img/ico_pts.png" title="3">
                                    <img src="img/ico_start.png" title="4">
                                    <img src="img/ico_en.png" title="5">
                                </div>
                                <div class="params">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vipserver supervipserver" style="background-image: url('/background/example.jpg')">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                    <img src="img/ico_pts.png" title="3">
                                    <img src="img/ico_start.png" title="4">
                                    <img src="img/ico_en.png" title="5">
                                </div>
                                <div class="params">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vipserver supervipserver" style="background-image: url('/background/example.jpg')">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                    <img src="img/ico_pts.png" title="3">
                                    <img src="img/ico_start.png" title="4">
                                    <img src="img/ico_en.png" title="5">
                                </div>
                                <div class="params">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="vipserverscont">

                    <div class="vipserver">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                </div>
                                <div class="params2">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vipserver">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                </div>
                                <div class="params2">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vipserver">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                </div>
                                <div class="params2">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vipserver">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                </div>
                                <div class="params2">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vipserver">
                        <div class="vipserverinner">
                            <img src="/img/cropped-logo-192x192.png" alt="l2stars.com">
                            <div class="countercontwrapper">
                                <div class="countercont">
                                    <div class="counterlike">👍</div>
                                    <span class="counter">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="vipserverouter" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                            <span class="vipservertext">l2stars.com  анонс серверов Lineage  ---------anons--------</span>
                            <div class="vipserverinfo">
                                <div class="bages hidden-xs">
                                    <img src="img/supervip.png" title="Super VIP">
                                    <img src="img/ico_bonus.png" title="2">
                                </div>
                                <div class="params2">
                                    <span class="rates">x1200</span>
                                    <span class="chronicles">Epilogue</span>
                                    <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                                    <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="serverscont">

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>

                    <div class="server" data-href="/" title="&#11088; &#11088; &#11088; Сервер : ' . $server['name'] . '  ( ' . $server['chronicles'] . ' x ' . $server['rates'] . ' )
&#10;Дата открытия : ' . $date . '.' . $year . '&#10;
Статистика переходов : за 24 часа : ' . $server['day_vis'] . ' | за неделю : ' . $server['week_vis'] . ' | за все время : ' . $server['all_vis'] . '">
                        <div class="servertext">👑 Dreamworld.su =Interlude=</div>
                        <div class="serverparams">
                            <span class="rates">x1200</span>
                            <span class="chronicles">Epilogue</span>
                            <span class="date hidden-xs hidden-md">11 Янв в 20:00</span>
                            <span class="shortdate show-xs hidden-sm show-md hidden-lg">11.01</span>
                        </div>
                    </div>


                </div>

            </div>

            <div class="clearfix"></div>

        </div>

    </div>

    <div class="fader">&nbsp</div>

    <div class="moreserverscont">
        <div class="moreservers">Показать больше серверов</div>
    </div>

    <div class="col-xs-12 maintext">

        <p>Легендарная многопользовательская RPG с открытым миром. Игра предоставляет огромный
            простор для развития персонажей, общения и взаимодействия с другими
            игроками.
            Красивый фэнтезийный мир населенный всевозможными монстрами и рейд-боссами, изобилие ресурсов и экипировки,
            а так-же приятная музыка способствуют глубокому погружению в игровой процесс.
            Персонажи имеют практически не ограниченную свободу действий, каждый игрок может найти себе занятие по душе.
            Lineage 2 позволяет использовать различные тактики и стили игры:
            некоторые предпочитают качаться в одиночку и исследовать огромный мир, кто-то особо ценит реалистичную экономическую
            модель игры, торговлю и крафт редких предметов или просто любит поразмышлять в процессе размеренной охоты на монстров.
        </p>

        <p>Основные возможности Lineage 2 раскрываются в командной игре - механика игры заточена прежде
            всего именно на командную игру и взаимодействие игроков и кланов.
            Персонажи объединяются в кланы, участвуют в осадах замков, сражаются за территории и влияние, вместе охотятся на монстров и рейд-боссов.
        </p>

        <p>Неспроста Lineage 2 завоевала любовь миллионов игроков по всему миру - игра на столько обширна и детализирована,
            что и по сегодняшний день остается непревзойденной.
            Даже несмотря на то, что многие современные игры имеют лучшую графику и более технологичны, они не способны подарить своим игрокам такие эмоции и глубину погружения как Lineage 2.
        </p>

    </div>

    <div class="clearfix"></div>

@endsection
