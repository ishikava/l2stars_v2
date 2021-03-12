<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

class SaController extends Controller
{
    protected $meta = [
        'title' => 'Специальные возможности оружия Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Специальные возможности оружия Lineage 2',
        'description' => 'Специальные возможности оружия Lineage 2',
        'seo' => 'Специальные возможности оружия Lineage 2',
        'h1' => 'Специальные возможности оружия Lineage 2',
        'info' => '
    <p>Специальные возможности оружия достигаются за&nbsp;счет вставки в&nbsp;него кристаллов душ&nbsp;разного цвета и&nbsp;разного уровня.</p>
    <p>В&nbsp;различное оружие C, B, A&nbsp;и S&nbsp;класса можно вложить специальные бонусы (SA). </p>
    <p>В&nbsp;каждое оружие можно вставить одну SA&nbsp;из трех на&nbsp;выбор. Посмотреть список SA&nbsp;можно на&nbsp;странице оружия. Спаренные мечи автоматически получают определенную SA&nbsp;при
        энчанте их&nbsp;до +4. </p>',
    ];

    public function index()
    {

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__.'/../static/sa.html')
        ]);
    }

}
