<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    protected $meta = [
        'title' => 'Поиск по базе знаний Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Поиск по базе знаний Lineage 2',
        'description' => 'Поиск по базе знаний Lineage 2',
        'seo' => 'Поиск по базе знаний Lineage 2'
    ];

    public function index(Request $request)
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $this->content($request->input('text'))
        ]);
    }

    private function content($requested_text)
    {
        $content = '
<div class="col-md-6">
    <h1 class="pageh1">Результаты поиска</h1>
</div>
<div class="col-md-6">
</div>
<div class="clearfix"></div>
';

        if (mb_strlen($requested_text) < 3) {
            return '<div class="text-center">Запрос не может быть короче 3 символов</div>';
        }

        $res_count = 0;

        $content .= '<br><hr><div class="searchheader"><span>Рейд-Боссы</span></div><br>';

        $res_raids = DB::select("SELECT * FROM `db`.`raids` JOIN `old_db`.`npcnames` ON `db`.`raids`.`id` = `old_db`.`npcnames`.`id` WHERE `name` LIKE ? OR `ru_name` LIKE ? ORDER BY `lvl`", ["%$requested_text%", "%$requested_text%"]);
        foreach ($res_raids as $raid) {
            $content .= '<a class="dbcont npclink wikia" href="/npc/' . $raid->id . '">[ lvl: ' . $raid->lvl . ' ] ' . $raid->ru_name . ' [ ' . $raid->name . ' ]</a>';
            $res_count++;
        }

        $content .= '<br><hr><div class="searchheader"><span>Монстры</span></div><br>';

        $res_monsters = DB::select("SELECT * FROM `db`.`monsters` JOIN `old_db`.`npcnames` ON `db`.`monsters`.`id` = `old_db`.`npcnames`.`id` WHERE `name` LIKE ? OR `ru_name` LIKE ? ORDER BY `lvl`", ["%$requested_text%", "%$requested_text%"]);
        foreach ($res_monsters as $monster) {
            $content .= '<a class="dbcont npclink wikia" href="/npc/' . $monster->id . '">[ lvl: ' . $monster->lvl . ' ] ' . $monster->ru_name . ' [ ' . $monster->name . ' ]</a>';
            $res_count++;
        }

        $content .= '<br><hr><div class="searchheader"><span>NPC</span></div><br>';

        $res_npcs = DB::select("SELECT * FROM `db`.`npcs` JOIN `old_db`.`npcnames` ON `db`.`npcs`.`id` = `old_db`.`npcnames`.`id` WHERE `name` LIKE ? OR `ru_name` LIKE ?", ["%$requested_text%", "%$requested_text%"]);
        foreach ($res_npcs as $npc) {
            $content .= '<a href="/npc/' . $npc->id . '" class="dbcont npclink wikia" data-name="' . $npc->ru_name . ' / ' . $npc->name;
            if ($npc->titles != '') {
                $content .= ' [ ' . $npc->titles . ' ] ';
            }
            $content .= '"><img src="/icons/' . $npc->icon . '.bmp" alt="' . $npc->race . '" title="' . $npc->race . '">' . $npc->ru_name . ' / ' . $npc->name;
            if ($npc->titles != '') {
                $content .= ' <span> [ ' . $npc->titles . ' ] </span> ';
            }
            $content .= '<div class="clearfix"></div></a>';
            $res_count++;
        }

        $content .= '<br><hr><div class="searchheader"><span>Предметы</span></div><br>';

        $res_items = DB::select("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `name` LIKE ? OR `runame` LIKE ?", ["%$requested_text%", "%$requested_text%"]);
        foreach ($res_items as $item) {
            $content .= '<a href="/items/' . $item->id . '" class="dbcont" data-name="' . $item->ru_name . ' ' . $item->name . '" data-type="' . $item->subtype . '"><img class="itemicon" src="/icons/' . $item->icon . '"><div>' . $item->ru_name . ' [ ' . $item->name . ' ]</div><span class="dbwhite">' . $item->rudesc . '</span><span><img class="itemparam" src="/icons/etc_adena_i00_0.bmp"> x ' . $item->price . '</span></a>';
            $res_count++;
        }

        if ($res_count) {
            return $content;
        } else {
            return '<div class="text-center">По вашему запросу ничего не найдено</div>';
        }

    }

}
