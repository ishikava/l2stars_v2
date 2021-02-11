<?php

namespace App\Http\Controllers;

class CalculatorController extends Controller
{
    protected $meta = [
        'title' => 'Калькулятор статов Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Калькулятор Lineage 2',
        'description' => 'Калькулятор Lineage 2',
        'seo' => 'Калькулятор Lineage 2'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__ . '/../static/calculator.html')
        ]);
    }

}
