<?php

namespace App\Http\Controllers;

class FashionController extends Controller
{
    protected $meta = [
        'title' => 'Примерочная Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Примерочная Lineage 2',
        'keywords' => 'Примерочная Lineage 2',
        'description' => 'Примерочная Lineage 2',
        'seo' => 'Примерочная Lineage 2'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__ . '/../static/fashion.html')
        ]);
    }

}
