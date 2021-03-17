<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class FishingController extends Controller
{
    protected $meta = [
        'title' => 'Умения и Предметы рыбалки Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Умения и Предметы рыбалки Lineage 2',
        'keywords' => 'Умения и Предметы рыбалки Lineage 2',
        'description' => 'Умения и Предметы рыбалки Lineage 2',
        'seo' => 'Умения и Предметы рыбалки Lineage 2'
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

        $str = '<br><ul id="tabberTab" class="nav nav-tabs">
<li class="nav-item"><a class="nav-link active" href="#tabs-0">Умения рыбалки</a></li>
<li class="nav-item"><a class="nav-link" href="#tabs-1">Предметы рыбалки</a></li>
<li class="nav-item"><a class="nav-link" href="#tabs-2">Крафт украшений</a></li>
</ul><div id="tabs" class="tab-content" style="border-left: none !important; border-right: none !important;"><div class="tabber activetab" data-tab="Умения рыбалки">';

        $str .= file_get_contents(__DIR__ . '/../static/fishing.html');

        $str .= '</div><div class="tabber" data-tab="Предметы рыбалки">';

        $items = DB::select("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `subtype` = 'Рыбалка'");
        foreach ($items as $item){
            $str .= '<a href="/items/' . $item->id . '" class="dbcont" data-name="' . $item->ru_name . ' ' . $item->name . '" data-type="' . $item->subtype . '"><img class="itemicon" src="/icons/' . $item->icon . '"><div>' . $item->ru_name . ' [ ' . $item->name . ' ]</div><span class="dbwhite">' . $item->rudesc . '</span><span><img class="itemparam" src="/icons/etc_adena_i00_0.bmp"> x ' . $item->price . '</span></a>';
        }
        unset($items);

        $str .= '</div><div class="tabber" data-tab="Крафт украшений">';

        $items = DB::select("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `rutype` = 'Заколки' AND `name` NOT LIKE '%Event%' AND `name` NOT LIKE '%L2 Day%'");
        foreach ($items as $item){
            $str .= '<a href="/items/' . $item->id . '" class="dbcont" data-name="' . $item->ru_name . ' ' . $item->name . '" data-type="' . $item->subtype . '"><img class="itemicon" src="/icons/' . $item->icon . '"><div>' . $item->ru_name . ' [ ' . $item->name . ' ]</div><span class="dbwhite">' . $item->rudesc . '</span><span><img class="itemparam" src="/icons/etc_adena_i00_0.bmp"> x ' . $item->price . '</span></a>';
        }

        $str .= '</div></div>';

        return $str;

    }

}
