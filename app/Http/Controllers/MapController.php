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

        return view('map', [
            'meta' => $this->meta,
            'id' => $id,
            'data' => [
                'x' => round((130000 + (int)$data->loc_x) / 200),
                'y' => round((260000 + (int)$data->loc_y) / 200) - 20
            ]
        ]);
    }

}
