<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class EnchantskillsController extends Controller
{
    protected $meta = [
        'title' => 'Заточка скиллов (Enchanting Skills) Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Заточка скиллов (Enchanting Skills) Lineage 2',
        'keywords' => 'Заточка скиллов (Enchanting Skills) Lineage 2',
        'description' => 'Заточка скиллов (Enchanting Skills) Lineage 2',
        'seo' => 'Заточка скиллов (Enchanting Skills) Lineage 2',
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
        $str = file_get_contents(__DIR__ . '/../static/enchantskills.html');
        require __DIR__ . "/simple_html_dom.php";
        $html = new \simple_html_dom();
        $html->load($str);
        $table = $html->find('table')[0];

        foreach ($table->find('td') as $td) {
            $text = trim($td->plaintext);
            $location = DB::selectOne("SELECT `id` FROM `old_db`.`huntingzones` WHERE `name` = ?", [$text]);
            if ($location) {
                $td->innertext = '<a class="artlink" href="/map/' . $text . '#' . $text . '">' . $text . '</a>';
            } else {
                $extractedtitles = explode(' ', $text);
                if (count($extractedtitles) > 2) {
                    $npc = DB::selectOne("SELECT `id` FROM `old_db`.`npcnames` WHERE `titles` = ? AND `name` = ?", [$extractedtitles[0] . ' ' . $extractedtitles[1], $extractedtitles[2]]);
                    if (!$npc) {
                        $npc = DB::selectOne("SELECT `id` FROM `old_db`.`npcnames` WHERE `titles` = ? AND `name` = ?", [$extractedtitles[0], $extractedtitles[1] . ' ' . $extractedtitles[2]]);
                    }
                } else if (count($extractedtitles) > 1) {
                    $npc = DB::selectOne("SELECT `id` FROM `old_db`.`npcnames` WHERE `titles` = ? AND `name` = ?", [$extractedtitles[0], $extractedtitles[1]]);
                } else {
                    $npc = null;
                }
                if ($npc) {
                    $td->innertext = '<a class="artlink" href="/npc/' . $npc->id . '">' . $text . '</a>';
                }
            }
        }

        return $html->save();

    }

}
