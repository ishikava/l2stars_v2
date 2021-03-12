<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

class CommandsController extends Controller
{
    protected $meta = [
        'title' => 'Команды чата Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Команды чата Lineage 2',
        'description' => 'Команды чата Lineage 2',
        'seo' => 'Команды чата Lineage 2',
        'h1' => 'Команды чата Lineage 2',
    ];

    public function index()
    {

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__.'/../static/commands.html')
        ]);
    }

}
