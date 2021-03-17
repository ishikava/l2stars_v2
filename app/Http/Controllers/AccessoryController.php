<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Support\Facades\DB;

class AccessoryController extends Controller
{
    protected $meta = [
        'title' => 'Бижутерия Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Бижутерия Lineage 2',
        'description' => 'Бижутерия Lineage 2',
        'seo' => 'Бижутерия Lineage 2'
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

        $wep = DB::select("SELECT * FROM `db`.`accessory` JOIN `old_db`.`itemnames` ON `db`.`accessory`.`id` = `old_db`.`itemnames`.`id`");

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
<div class="col-md-4">
                    <h1 class="pageh1">Бижутерия Lineage 2</h1>
</div>
<div class="col-md-4">
    <select class="form-control input-sm gradefilter" autocomplete="off">
        <option>Выберите грейд</option>';

        foreach ($sets as $grade => $list) {
            $content .= '<option>' . ucfirst($grade) . '-грейд</option>';
        }

        $content .= '</select>
</div>
<div class="col-md-4">
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
                $content .= '<a href="/items/' . $list[$i]->id . '" class="dbcont" data-name="' . $list[$i]->ru_name . ' ' . $list[$i]->name . '" data-type="' . Helper::mb_ucfirst($list[$i]->rutype ) . '" data-grade="' . ucfirst($grade) . '-грейд"><img src="/icons/' . $list[$i]->icon . '"><div>' . $list[$i]->ru_name . ' [ ' . $list[$i]->name . ' ]</div><span class="dbwhite">' . $list[$i]->rudesc . '</span><span class="dbinfo"><img src="/icons/etc_crystal_white_i00_0.bmp"> x ' . $list[$i]->ccount . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/skill1035_0.bmp"> x ' . $list[$i]->mdef . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/etc_adena_i00_0.bmp"> x ' . $list[$i]->price . '</a>';
            }
            $content .= '</div>';

        }

        return $content;

    }

}
