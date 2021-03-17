<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class MapController extends Controller
{
    protected $meta = [
        'title' => 'Территории и Замки Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Территории и Замки Lineage 2',
        'description' => 'Территории и Замки Lineage 2',
        'h1' => 'Территории и Замки Lineage 2',
        'canonical' => '/map'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $this->content()
        ]);
    }

    private function content()
    {
        $str = '<p>Клан владеющий замком, получает политический и экономический контроль над всей прилегающей к этому замку территорией, в том числе возможность повышать налоги в подчиненных городах. Замок
    обладает похожим&nbsp;набором функций, что и Клан Холл. Можно перемещаться как внутрь замка, так и наружу, используя телепорт.</p>
<p>Лорд замка может изменить налоги в магазинах подчиненного города и получать доход у <strong>Grand Chamberlain</strong>.</p>
<p>Клан владеющий <a href="/map/Aden Castle#Aden Castle">Aden Castle</a>&nbsp;собирает налоги с городов: Town of Aden, Town of Gludio, Town of Dion, Town of Giran, Town of Oren, Heine.</p>
<p>Клан владеющий <a href="/map/Rune Castle#Rune Castle">Rune Castle</a>&nbsp;собирает налоги с городов:&nbsp;Rune Township,&nbsp;Town of Schuttgart, Town of Goddard.</p>
<p>Лорд каждого замка может выставить манор, продавая семена в своём городе. Затем&nbsp;обменивает, выросшие из этих семян на:</p>
<ul>
    <li>Заточки&nbsp;брони/оружия D, C, B, A и S грейдов</li>
    <li>Кристаллы С, В и А грейдов</li>
    <li>Blessed Scroll of Resurrection</li>
    <li>Blessed Scroll of Escape</li>
    <li>Quick Healing Potion</li>
    <li>Greater Swift Potion</li>
    <li>Greater Haste Potion</li>
    <li>Dualsword Craft Stamp</li>
    <li>Secret Book of Giants</li>
</ul>
<p>Лорд замка может летать на виверне.</p>
<br><ul id="tabberTab" class="nav nav-tabs">
<li class="nav-item"><a class="nav-link active" href="#tabs-0">Замки</a></li>
<li class="nav-item"><a class="nav-link" href="#tabs-1">Территории</a></li>
</ul><div id="tabs" class="tab-content" style="border-left: none !important; border-right: none !important;"><div class="tabber activetab" data-tab="Замки">';

        $str .= file_get_contents(__DIR__ . '/../static/castles.html');

        $str .= '</div><div class="tabber" data-tab="Территории">
<div class="col-md-12">
    <input class="form-control dbfilter input-sm" placeholder="Фильтр по названию" autocomplete="off">
</div>
<div class="clearfix"></div>
';

        $locations = DB::select("SELECT * FROM `old_db`.`huntingzones`");
        foreach ($locations as $item) {
            $str .= '<a href="/map/' . $item->name . '#' . $item->name . '" class="dbcont" data-name="' . $item->ru_name . ' / ' . $item->name . '"><div>' . $item->ru_name . ' [ ' . $item->name . ' ]</div></a>';
        }

        $str .= '</div></div>';

        return $str;
    }

    public function location()
    {

        $id = urldecode(Route::current()->parameter('id'));

        $data = DB::selectOne("SELECT * FROM `old_db`.`huntingzones` WHERE `name` = ?", [$id]);

        if (!$data) {
            abort(404);
        }

        $this->meta['h1'] = 'Территория Lineage 2 : ' . $id;

        $content = '
<div class="col-md-12">
    <select class="form-control dbfilter input-sm" autocomplete="off">
        <option>Выберите локацию</option>';

        $locations = DB::select("SELECT * FROM `old_db`.`huntingzones` ORDER BY `name`");
        foreach ($locations as $item) {
            $content .= '<option data-link="/map/' . $item->name . '#' . $item->name . '">' . $item->name . ' [ ' . $item->ru_name . ' ]</option>';
        }

        $content .= '</select>
<br>
</div>
<div class="col-md-12 npcmapcont">
<img class="npcmap" src="/img/map.jpg">
<img id="' . $id . '" src="/img/pointer.gif" class="npcposition" data-left="' . (round((130000 + (int)$data->loc_x) / 200) - 15) . '" data-top="' . (round((260000 + (int)$data->loc_y) / 200) - 20) . '">
</div><div class="clearfix"></div>';

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $content
        ]);
    }

}
