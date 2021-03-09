<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class MapController extends Controller
{
    protected $meta = [
        'title' => 'Карта Lineage 2 Interlude ⭐⭐⭐ l2stars.com',
        'keywords' => 'Карта Lineage 2 Interlude',
        'description' => 'Карта Lineage 2 Interlude',
    ];

    public function index()
    {

        $id = urldecode(Route::current()->parameter('id'));

        $data = DB::selectOne("SELECT * FROM `old_db`.`huntingzones` WHERE `name` = ?", [$id]);

        if (!$data) {
            abort(404);
        }

        $this->meta['h1'] = $id;

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => '
<div class="col-md-12 npcmapcont">
<img class="npcmap" src="/img/map.jpg">
<img src="/img/pointer.gif" class="npcposition" data-left="' . (round((130000 + (int)$data->loc_x) / 200) - 15) . '" data-top="' . (round((260000 + (int)$data->loc_y) / 200) - 20) . '">
</div><div class="clearfix"></div>'
        ]);
    }

}
