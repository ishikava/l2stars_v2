<?php

namespace App\Http\Controllers;

class AdvertController extends Controller
{
    protected $meta = [
        'title' => 'Реклама на ⭐⭐⭐ l2stars.com',
        'h1' => 'Реклама на l2stars.com и linedia.ru',
        'keywords' => 'Реклама на ⭐⭐⭐ l2stars.com',
        'description' => 'Реклама на ⭐⭐⭐ l2stars.com',
        'seo' => 'Реклама на ⭐⭐⭐ l2stars.com'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => '123'
        ]);
    }

}
