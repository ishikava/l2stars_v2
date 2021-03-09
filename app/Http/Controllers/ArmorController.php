<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class ArmorController extends Controller
{
    protected $meta = [
        'title' => 'Броня Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Броня Lineage 2',
        'description' => 'Броня Lineage 2',
        'seo' => 'Броня Lineage 2'
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

        $wep = DB::select("SELECT * FROM `db`.`armor` JOIN `old_db`.`itemnames` ON `db`.`armor`.`id` = `old_db`.`itemnames`.`id`");

        foreach ($wep as $armor) {

            if (!in_array($armor->rutype, $types)) {
                $types[] = $armor->rutype;
            }

            switch ($armor->ctype) {
                case 'S':
                    $sets['s'][] = $armor;
                    break;
                case 'A':
                    $sets['a'][] = $armor;
                    break;
                case 'B':
                    $sets['b'][] = $armor;
                    break;
                case 'C':
                    $sets['c'][] = $armor;
                    break;
                case 'D':
                    $sets['d'][] = $armor;
                    break;
                default:
                    $sets['no'][] = $armor;
                    break;
            }

        }

        $content = '
<div class="col-md-6">
                    <h1 class="pageh1">Броня Lineage 2</h1>
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
                $content .= '<a href="/items/' . $list[$i]->id . '" class="dbcont" data-name="' . $list[$i]->ru_name . ' ' . $list[$i]->name . '" data-type="' . $list[$i]->rutype . '"><img src="/icons/' . $list[$i]->icon . '"><div>' . $list[$i]->ru_name . ' [ ' . $list[$i]->name . ' ]</div><span class="dbwhite">' . $list[$i]->rudesc . '</span><span class="dbinfo"><img src="/icons/etc_crystal_white_i00_0.bmp"> x ' . $list[$i]->ccount . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/skill0150_0.bmp"> x ' . $list[$i]->weight . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/skill0153_0.bmp"> x ' . $list[$i]->pdef . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/etc_adena_i00_0.bmp"> x ' . $list[$i]->price . '</span></a>';
            }
            $content .= '</div>';

        }

        return $content;

    }

}
