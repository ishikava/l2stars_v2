<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class CatacombsController extends Controller
{
    protected $meta = [
        'title' => 'Катакомбы Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Катакомбы Lineage 2',
        'description' => 'Катакомбы Lineage 2',
        'seo' => 'Катакомбы Lineage 2'
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
