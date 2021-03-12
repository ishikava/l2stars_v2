<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

class ManorController extends Controller
{
    protected $meta = [
        'title' => 'Манор Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Манор Lineage 2',
        'description' => 'Манор Lineage 2',
        'seo' => 'Манор Lineage 2',
        'h1' => 'Манор Lineage 2',
    ];

    public function index()
    {

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__.'/../static/manor.html')
        ]);
    }

}
