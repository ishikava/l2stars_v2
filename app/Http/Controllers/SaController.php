<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

class SaController extends Controller
{
    protected $meta = [
        'title' => 'Special Abilities Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Special Abilities Lineage 2',
        'description' => 'Special Abilities Lineage 2',
        'seo' => 'Special Abilities Lineage 2'
    ];

    public function index()
    {

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__.'/../sa/'.Route::getFacadeRoot()->current()->uri().'.php')
        ]);
    }

}
