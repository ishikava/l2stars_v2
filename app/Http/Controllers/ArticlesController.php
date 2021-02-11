<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class ArticlesController extends Controller
{

    public function index()
    {
        $data = DB::selectOne("SELECT * FROM `l2stars`.`pages` WHERE `url` = ?", [Route::current()->parameter('id')]);

        if(!$data){
            abort(404);
        }

        $meta = [
        'title' => $data->title . ' ⭐⭐⭐ l2stars.com',
        'keywords' => $data->keywords,
        'description' => $data->description,
        'info' => $data->excerpt,
        'seo' => $data->seo
    ];

        //почистим контент в постах
        $data->content = str_replace('padding-left: 120px;', '', $data->content );
        $data->content = str_replace('</h1>', '</h1><br><br>', $data->content );
        $data->content = str_replace('Не забывайте заходить на наш анонс', '<br><br>Не забывайте заходить на наш анонс', $data->content );
        $data->content = str_replace('(щелкните на название квеста, чтобы перейти к его выполнению)', '', $data->content );
        $data->content = str_replace('(щелкните по названию квест и перейдите к его описанию)', '', $data->content );
        $data->content = str_replace('(щелкните по названию квест и перейдите к его описанию)', '', $data->content );

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $meta,
            'content' => $data->content
        ]);
    }


}
