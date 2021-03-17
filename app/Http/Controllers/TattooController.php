<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class TattooController extends Controller
{
    protected $meta = [
        'title' => 'Татуировки Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Татуировки Lineage 2',
        'keywords' => 'Татуировки Lineage 2',
        'description' => 'Татуировки Lineage 2',
        'seo' => 'Татуировки Lineage 2'
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
<li class="nav-item"><a class="nav-link active" href="#tabs-0">Что дают татуировки</a></li>
<li class="nav-item"><a class="nav-link" href="#tabs-1">Краски для татуировки</a></li>
</ul><div id="tabs" class="tab-content" style="border-left: none !important; border-right: none !important;"><div class="tabber activetab" data-tab="Что дают татуировки">';

        $str .= file_get_contents(__DIR__ . '/../static/tattoo.html');

        $str .= '</div><div class="tabber" data-tab="Краски для татуировки">';

        $items = DB::select("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `subtype` = 'Краска'");
        foreach ($items as $item) {
            if (substr_count($item->ru_name, '1') > 1 || substr_count($item->ru_name, '2') > 1 || substr_count($item->ru_name, '3') > 1 || substr_count($item->ru_name, '4') > 1) {
                $str .= '<a href="/items/' . $item->id . '" class="dbcont" data-name="' . $item->ru_name . ' ' . $item->name . '" data-type="' . $item->subtype . '"><img class="itemicon" src="/icons/' . $item->icon . '"><div>' . $item->ru_name . ' [ ' . $item->name . ' ]</div><span class="dbwhite">' . $item->rudesc . '</span><span><img class="itemparam" src="/icons/etc_adena_i00_0.bmp"> x ' . $item->price . '</span></a>';
            }
        }

        $str .= '</div></div>';

        return $str;
    }

}
