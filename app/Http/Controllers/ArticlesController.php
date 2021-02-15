<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class ArticlesController extends Controller
{

    public function index()
    {

        $data = DB::selectOne("SELECT * FROM `l2stars`.`pages` WHERE `url` = ?", [Route::current()->parameter('id')]);

        if (!$data) {
            abort(404);
        }

        $meta = [
            'title' => $data->title . ' ⭐⭐⭐ l2stars.com',
            'keywords' => $data->keywords,
            'description' => $data->description,
            'info' => $data->excerpt,
            'seo' => $data->seo
        ];

        //почистим контент в постах
        $data->content = str_replace('padding-left: 120px;', '', $data->content);
        $data->content = str_replace('</h1>', '</h1><br><br>', $data->content);
        $data->content = str_replace('Не забывайте заходить на наш анонс', '<br><br>Не забывайте заходить на наш анонс', $data->content);
        $data->content = str_replace('(щелкните на название квеста, чтобы перейти к его выполнению)', '', $data->content);
        $data->content = str_replace('(щелкните по названию квест и перейдите к его описанию)', '', $data->content);
        $data->content = str_replace('(щелкните по названию квест и перейдите к его описанию)', '', $data->content);
        $data->content = str_replace('#ffb400;', '#f2db9f;', $data->content);
        $data->content = str_replace('</strong><strong>', '', $data->content);
        $data->content = str_replace('</strong> <strong>', ' ', $data->content);
        $data->content = str_replace('.</strong>', '</strong>', $data->content);
        $data->content = str_replace('.</span>', '</span>', $data->content);
        $data->content = str_replace('.</b>', '</b>', $data->content);
        $data->content = str_replace(', </strong>', ' </strong>', $data->content);
        $data->content = str_replace('. </strong>', ' </strong>', $data->content);
        $data->content = str_replace('. </span>', ' </span>', $data->content);
        $data->content = str_replace('’', '\'', $data->content);
        $data->content = str_replace('Town of Giran', 'Giran Castle Town', $data->content);
        $data->content = str_replace('Wastelands', 'Wasteland', $data->content);
        $data->content = str_replace('Hardin\'s Private Academy', 'Hardin`s Academy', $data->content);
        $data->content = str_replace('Pet Exchange Ticket', 'Pet Exchange Ticket:', $data->content);

        //грязный поиск линков
        $str = $data->content;
        require __DIR__ . "/simple_html_dom.php";
        $html = new \simple_html_dom();
        $html->load($str);

        foreach ($html->find('span') as $span) {

            $text = $span->plaintext;
            $tmp = explode('(', $text);

            $check_if_number = explode(' ', $tmp[0]);
            if (intval($check_if_number[0])) {
                unset($check_if_number[0]);
            }

            $extracted = trim(implode(' ', $check_if_number));

            $npc = DB::selectOne("SELECT `id` FROM `old_db`.`npcnames` WHERE `name` = ?", [$extracted]);
            if ($npc) {
                $span->innertext = '<a target="_blank" class="artlink" href="/npc/' . $npc->id . '">' . $text . '</a>';
            } else {
                $extractedtitles = explode(' ', $extracted);
                if (count($extractedtitles) > 2) {
                    $npc = DB::selectOne("SELECT `id` FROM `old_db`.`npcnames` WHERE `titles` = ? AND `name` = ?", [$extractedtitles[0] . ' ' . $extractedtitles[1], $extractedtitles[2]]);
                } else if (count($extractedtitles) > 1) {
                    $npc = DB::selectOne("SELECT `id` FROM `old_db`.`npcnames` WHERE `titles` = ? AND `name` = ?", [$extractedtitles[0], $extractedtitles[1]]);
                } else {
                    $npc = null;
                }
                if ($npc) {
                    $span->innertext = '<a target="_blank" class="artlink" href="/npc/' . $npc->id . '">' . $text . '</a>';
                } else {
                    $location = DB::selectOne("SELECT `id` FROM `old_db`.`huntingzones` WHERE `name` = ?", [$extracted]);
                    if ($location) {
                        $span->innertext = '<a target="_blank" class="artlink" href="/map/' . $extracted . '#' . $extracted . '">' . $text . '</a>';
                    } else {
                        $item = DB::selectOne("SELECT * FROM `old_db`.`itemnames` JOIN `old_db`.`items` ON (`old_db`.`itemnames`.`id` = `old_db`.`items`.`id`) WHERE `old_db`.`itemnames`.`name` = ?", [$extracted]);
                        if ($item) {
                            $span->innertext = '<img class="artimg" src="/icons/' . $item->icon . '"><a target="_blank" class="artlink" href="/items/' . $item->id . '">' . $text . '</a>';
                        }
                    }
                }
            }
        }

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $meta,
            'content' => $html->save()
        ]);
    }


}
