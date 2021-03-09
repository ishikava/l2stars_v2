<div class="container top">
    <div class="brand" data-href="{{$brand->url}}"></div>
    <div class="logocont">
        <a href="/">l2stars.com</a>
    </div>
    <form id="search_form" method="POST" action="/search" class="form-inline pull-right">
        @csrf
        <input class="form-control input-sm" type="text" name="text" placeholder="Поиск по базе знаний L2stars">
        <button type="submit" class="btn btn-default btn-sm"><i class="glyphicon glyphicon-search"></i> Поиск</button>
    </form>
</div>

<div class="container nopad">
    <div class="anons">
        <h1><a href="/" title="Анонс Серверов Lineage 2">Анонс Серверов Lineage 2</a></h1>
        <span class="filterbtn"><i class="glyphicon glyphicon-menu-hamburger"></i> Подобрать сервер</span>
        <a href="/knowledge" class="questslink">База знаний Л2</a>
        <a href="/en"><img class="changelang pull-right" src="/img/ico_en.png" title="English" alt="en"></a>
    </div>
    <div class="filtercont @php if($_SERVER['REQUEST_URI'] === '/' && isset($_COOKIE['showtopmenu'])){echo 'showtopmenu';} @endphp">
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
                <div class="filter_item_cont rates" data-link="/#rates_1_10" data-min="1" data-max="10">
                    <div class="filter_item">x1 - x10</div>
                </div>
                <div class="filter_item_cont rates" data-link="/#rates_10_50" data-min="10" data-max="50">
                    <div class="filter_item">x10 - x50</div>
                </div>
                <div class="filter_item_cont rates" data-link="/#rates_50_100" data-min="50" data-max="100">
                    <div class="filter_item">x50 - x100</div>
                </div>
                <div class="filter_item_cont rates" data-link="/#rates_100_9999999" data-min="100" data-max="9999999">
                    <div class="filter_item">x100 - x9999</div>
                </div>
                <div class="filter_item_cont" data-link="/#gve" data-gve="gve">
                    <div class="filter_item">GVE</div>
                </div>
                <div class="filter_item_cont" data-link="/#rvr" data-rvr="rvr">
                    <div class="filter_item">RVR</div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="filter_header">Выберите дату открытия</div>
            <script>var dates = [@foreach ($dates as $date)"{{$date}}",@endforeach];</script>
            <div id="datepicker"></div>
            <input type="hidden" id="datepicker_value" value="{{$current_date}}">
            <div class="filter_clear">Сбросить фильтр</div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
