<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class CatacombsController extends Controller
{
    protected $meta = [
        'title' => 'Катакомбы и Некрополи Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Катакомбы и Некрополи Lineage 2',
        'description' => 'Катакомбы и Некрополи Lineage 2',
        'h1' => 'Катакомбы и Некрополи Lineage 2',
        'seo' => 'Катакомбы и Некрополи Lineage 2',
        'img' => '/images/catacombs/cat_and_necr.png',
        'info' => 'Катакомбы, как и Некрополи в принципе ничем не отличаются. Только что в Катакомбах перемещается Кузнец Мамона, а в Некрополях Торговец.
<br>Доступны подземелья все время проведения эвента "Семь печатей", если вы принадлежите победившей стороне. Находиться там могут только зарегистрированные персонажи. Зарегистрироваться могут персонажи выше 20 уровня.
<br>Подземелья приписаны каждый к своей печати - некрополи относятся к Печати Жадности, катакомбы - к Печати Познания. Абсолютно не влияет, какую печать вы выбрали при регистрации, эти две или же третью. Находится вы можете в любом из подземелий, в любой из периодов эвента без всяких ограничений, если ваша сторона победила.'
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
        //грязный поиск линков
        $str = file_get_contents(__DIR__ . '/../static/catacombs.html');
        require __DIR__ . "/simple_html_dom.php";
        $html = new \simple_html_dom();
        $html->load($str);

        foreach ($html->find('strong') as $strong) {
            $text = trim($strong->plaintext);
            $location = DB::selectOne("SELECT `id` FROM `old_db`.`huntingzones` WHERE `name` = ?", [$text]);
            if ($location) {
                $strong->innertext = '<a target="_blank" href="/map/' . $text . '#' . $text . '">' . $text . '</a>';
            }
        }

        foreach ($html->find('tr') as $tr) {
            $tds = $tr->find('td');
            $tdsindex = 0;
            foreach ($tds as $td) {
                if ($tdsindex === 1) {
                    $pre = explode('(', trim($td->plaintext));
                    if(count($pre) > 1){
                        $npc = DB::selectOne("SELECT `id` FROM `old_db`.`npcnames` WHERE `name` = ?", [trim($pre[0])]);
                        if ($npc) {
                            $td->innertext = '<a class="artlink" href="/npc/' . $npc->id . '">' . $td->plaintext . '</a>';
                        }
                    }
                }
                $tdsindex++;
            }
        }

        return $html->save();
    }

}
