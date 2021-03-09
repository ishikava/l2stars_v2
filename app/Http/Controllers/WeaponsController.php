<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class WeaponsController extends Controller
{
    protected $meta = [
        'title' => 'Оружие Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Оружие Lineage 2',
        'description' => 'Оружие Lineage 2',
        'seo' => 'Оружие Lineage 2'
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
        $sets = ['s' => [], 'a' => [], 'b' => [], 'c' => [], 'd' => [], 'no' => []];

        $types = [];

        $wep = DB::select("SELECT * FROM `db`.`weapons` JOIN `old_db`.`itemnames` ON `db`.`weapons`.`id` = `old_db`.`itemnames`.`id`");

        foreach ($wep as $weapon) {

            if (!in_array($weapon->rutype, $types)) {
                $types[] = $weapon->rutype;
            }

            switch ($weapon->ctype) {
                case 'S':
                    $sets['s'][] = $weapon;
                    break;
                case 'A':
                    $sets['a'][] = $weapon;
                    break;
                case 'B':
                    $sets['b'][] = $weapon;
                    break;
                case 'C':
                    $sets['c'][] = $weapon;
                    break;
                case 'D':
                    $sets['d'][] = $weapon;
                    break;
                default:
                    $sets['no'][] = $weapon;
                    break;
            }

        }

        $content = '
<div class="col-md-6">
                    <h1 class="pageh1">Оружие Lineage 2</h1>
</div>
<div class="col-md-6">
    <input class="form-control dbfilter input-sm" placeholder="Фильтр по названию" autocomplete="off">
</div>
<div class="col-md-12"><hr class="dbhr"></div>
';

        for ($i = 0; $i < count($types); $i++) {
            $content .= '<div class="btn btn-default dbfilterbtn" data-type="' . mb_convert_case($types[$i], MB_CASE_TITLE, 'UTF-8') . '">' . mb_convert_case($types[$i], MB_CASE_TITLE, 'UTF-8') . '</div>';
        }

        $content .= '<div class="col-md-12"></div><div class="clearfix"></div>';

        foreach ($sets as $grade => $list) {

            $content .= '<div class="dbsets"><h2 class="dbsetsheader">' . ucfirst($grade) . '-грейд</h2>';

            for ($i = 0; $i < count($list); $i++) {
                $content .= '<a href="/items/' . $list[$i]->id . '" class="dbcont" data-name="' . $list[$i]->ru_name . ' ' . $list[$i]->name . '" data-type="' . $list[$i]->rutype . '"><img src="/icons/' . $list[$i]->icon . '"><div>' . $list[$i]->ru_name . ' [ ' . $list[$i]->name . ' ]</div><span class="dbwhite">' . $list[$i]->rudesc . '</span><span class="dbinfo"><img src="/icons/etc_crystal_white_i00_0.bmp"> x ' . $list[$i]->ccount . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/etc_spirit_bullet_white_i00_0.bmp"> x ' . $list[$i]->shots . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/skill0249_0.bmp"> ' . $list[$i]->patk . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/skill0146_0.bmp"> ' . $list[$i]->matk . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/etc_adena_i00_0.bmp"> x ' . $list[$i]->price . '</span></a>';
            }

            $content .= '</div>';

        }

        return $content;

    }

}
