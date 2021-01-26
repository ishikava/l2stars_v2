<?php

namespace App\Http\Controllers;

class QuestPetsController extends Controller
{
    protected $meta = [
        'title' => 'Квесты на питомцев Lineage 2 картинками ⭐⭐⭐ l2stars.com',
        'h1' => 'Квесты на питомцев Lineage 2',
        'keywords' => 'квест, питомец, lineage 2',
        'description' => 'Квесты после прохождения которых вы можете получить питомца в Lineage 2',
        'info' => 'Квесты после прохождения которых вы можете получить питомца в Lineage 2',
        'seo' => 'Квесты после прохождения которых вы можете получить питомца в Lineage 2'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__ . '/../static/quest_pets.html')
        ]);
    }

}
