<?php

namespace App\Http\Controllers;

class AdvertController extends Controller
{
    protected $meta = [
        'title' => 'Реклама на ⭐⭐⭐ l2stars.com и linedia.ru',
        'keywords' => 'Реклама на ⭐⭐⭐ l2stars.com и linedia.ru',
        'description' => 'Реклама на ⭐⭐⭐ l2stars.com и linedia.ru',
        'h1' => 'Заказ рекламы на l2stars.com и linedia.ru',
        'seo' => 'Реклама на l2stars.com и linedia.ru'
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
        return view('layouts.advert', []);
    }

}
