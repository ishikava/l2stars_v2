<?php

namespace App\Http\Controllers;

class ResourcesController extends Controller
{
    protected $meta = [
        'title' => 'Ресурсы Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Ресурсы Lineage 2',
        'description' => 'Ресурсы Lineage 2',
        'h1' => 'Ресурсы Lineage 2 по уровню крафта',
        'seo' => 'Ресурсы Lineage 2'
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
        return file_get_contents(__DIR__ . '/../static/resources.html');
    }

}
