<?php

namespace App\Http\Controllers;

class QuestBestController extends Controller
{
    protected $meta = [
        'title' => 'Полезные квесты Lineage 2 с картинками ⭐⭐⭐ l2stars.com',
        'h1' => 'Полезные квесты Lineage 2',
        'keywords' => 'квест, lineage 2.',
        'description' => 'Полезные квесты Lineage 2',
        'info' => 'Полезные квесты Lineage 2',
        'seo' => 'Полезные квесты Lineage 2'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__ . '/../static/best_quest.html')
        ]);
    }

}
