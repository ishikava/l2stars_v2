<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class RecipesController extends Controller
{
    protected $meta = [
        'title' => 'Рецепты Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Рецепты Lineage 2',
        'description' => 'Рецепты Lineage 2',
        'seo' => 'Рецепты Lineage 2'
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
        $sets = [1 => [], 2 => [], 3 => [], 4 => [], 5 => [], 6 => [], 7 => [], 8 => [], 9 => []];

        $types = [];

        $wep = DB::select("SELECT * FROM `db`.`recipes` JOIN `old_db`.`itemnames` ON `db`.`recipes`.`id` = `old_db`.`itemnames`.`id` ORDER BY `level`");

        foreach ($wep as $row) {

            if(!in_array($row->level.' Уровень', $types)){
                $types[] = $row->level.' Уровень';
            }

            switch ($row->level) {
                case 1:
                    $sets[1][] = $row;
                    break;
                case 2:
                    $sets[2][] = $row;
                    break;
                case 3:
                    $sets[3][] = $row;
                    break;
                case 4:
                    $sets[4][] = $row;
                    break;
                case 5:
                    $sets[5][] = $row;
                    break;
                case 6:
                    $sets[6][] = $row;
                    break;
                case 7:
                    $sets[7][] = $row;
                    break;
                case 8:
                    $sets[8][] = $row;
                    break;
                case 9:
                    $sets[9][] = $row;
                    break;

            }

        }

        $content = '
<div class="col-md-6">
    <h1 class="pageh1">Рецепты Lineage 2</h1>
</div>
<div class="col-md-6">
    <input class="form-control dbfilter" placeholder="Фильтр по названию" autocomplete="off">
</div>
<div class="col-md-12"><hr class="dbhr"></div>
';

        for ($i = 0; $i < count($types); $i++) {
            $content .= '<div class="btn btn-default dbfilterbtn" data-type="' . mb_convert_case($types[$i], MB_CASE_TITLE, 'UTF-8') . '">' . mb_convert_case($types[$i], MB_CASE_TITLE, 'UTF-8') . '</div>';
        }

        $content .= '<div class="col-md-12"></div><div class="clearfix"></div>';

        foreach ($sets as $grade => $list) {

            $content .= '<div class="dbsets"><h2 class="dbsetsheader">' . ucfirst($grade) . ' Уровень крафта</h2>';

            for ($i = 0; $i < count($list); $i++) {
                $content .= '<a href="/items/' . $list[$i]->id . '" class="dbcont" data-name="' . $list[$i]->ru_name . ' ' . $list[$i]->name . '" data-type="' . $list[$i]->level . ' Уровень"><img src="/icons/' . $list[$i]->icon . '"><div>' . $list[$i]->ru_name . ' [ ' . $list[$i]->name . ' ]</div><span class="dbwhite">' . $list[$i]->rudesc . '</span><span class="dbinfo"><img src="/icons/etc_adena_i00_0.bmp"> x ' . $list[$i]->price . '</span></a>';
            }

            $content .= '</div>';

        }

        return $content;

    }

}
