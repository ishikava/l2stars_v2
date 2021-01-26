<?php

namespace App\Http\Controllers;

class QuestEpicController extends Controller
{
    protected $meta = [
        'title' => 'Квесты на эпик-боссов Lineage 2 с картинками ⭐⭐⭐ l2stars.com',
        'h1' => 'Квесты на эпик-боссов Lineage 2',
        'keywords' => 'квест, эпик, lineage 2',
        'description' => 'Квесты после прохождения которых вы сможете пройти к эпик-боссам Lineage 2',
        'info' => 'Квесты после прохождения которых вы сможете пройти к эпик-боссам Lineage 2',
        'seo' => 'Квесты после прохождения которых вы сможете пройти к эпик-боссам Lineage 2'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__ . '/../static/quest_epic.html')
        ]);
    }

}
