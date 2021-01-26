<?php

namespace App\Http\Controllers;

class Quest1ProfController extends Controller
{
    protected $meta = [
        'title' => 'Квесты Lineage 2 на 1 профессию с картинками ⭐⭐⭐ l2stars.com',
        'h1' => 'Квесты на 1 профессию Lineage 2',
        'keywords' => 'Квесты на 1 профу, 1 профа, квесты Л2 с картинками, квесты Л2 с подробным описанием.',
        'description' => 'Подробное описание прохождения квестов на получение 1 профессии, с картинками для удобства навигации!',
        'info' => 'Подробное описание прохождения квестов на получение 1 профессии, с картинками для удобства навигации!',
        'seo' => 'Подробное описание прохождения квестов на получение 1 профессии, с картинками для удобства навигации!'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__ . '/../static/quest_1_prof.html')
        ]);
    }

}
