<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class NpcController extends Controller
{
    protected $meta = [
        'title' => 'NPC Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'NPC Lineage 2',
        'description' => 'NPC Lineage 2',
        'seo' => 'NPC Lineage 2'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $this->indexContent()
        ]);
    }

    public function npcs()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $this->npcsContent()
        ]);
    }

    private function indexContent()
    {
        $npc = DB::select("SELECT * FROM `db`.`npcs` JOIN `old_db`.`npcnames` ON `db`.`npcs`.`id` = `old_db`.`npcnames`.`id`");

        $content = '
<div class="col-md-6">
                    <h1 class="pageh1">NPC Lineage 2</h1>
</div>
<div class="col-md-6">
    <input class="form-control dbfilter input-sm" placeholder="Фильтр по названию" autocomplete="off">
</div>
<div class="clearfix"></div><br>';

        for ($i = 0; $i < count($npc); $i++) {
            $content .= '<a href="/npc/' . $npc[$i]->id . '" class="dbcont npclink wikia" data-name="' . $npc[$i]->ru_name . ' / ' . $npc[$i]->name;
            if ($npc[$i]->titles != '') {
                $content .= ' [ ' . $npc[$i]->titles . ' ] ';
            }
            $content .= '"><img src="/icons/' . $npc[$i]->icon . '.bmp" alt="' . $npc[$i]->race . '" title="' . $npc[$i]->race . '">' . $npc[$i]->ru_name . ' / ' . $npc[$i]->name;
            if ($npc[$i]->titles != '') {
                $content .= ' <span> [ ' . $npc[$i]->titles . ' ] </span> ';
            }
            $content .= '<div class="clearfix"></div></a>';
        }

        $content .= '<br><br>';

        return $content;
    }

    private function npcsContent()
    {

        $requested_id = Route::current()->parameter('id');

        if (is_numeric($requested_id)) {
            $npc = DB::selectOne("SELECT * FROM `db`.`npc` JOIN `old_db`.`npcnames` ON `db`.`npc`.`id` = `old_db`.`npcnames`.`id` WHERE `db`.`npc`.`id` = " . $requested_id);
        } else {
            $npc = DB::selectOne("SELECT * FROM `db`.`npc` JOIN `old_db`.`npcnames` ON `db`.`npc`.`id` = `old_db`.`npcnames`.`id` WHERE `old_db`.`npcnames`.`fullname` LIKE ? OR `old_db`.`npcnames`.`name` LIKE ?", [urldecode($requested_id), urldecode($requested_id)]);
        }

        if(!$npc){
            abort(404);
        }

        //skills
        $skills = DB::select("SELECT * FROM `db`.`monsterability` JOIN `db`.`skills` ON `db`.`monsterability`.`skill_id` = `db`.`skills`.`skill_id` AND `db`.`monsterability`.`lvl` = `db`.`skills`.`lvl` JOIN `old_db`.`skillnames` ON `db`.`monsterability`.`skill_id` = `old_db`.`skillnames`.`skil_id` AND `db`.`monsterability`.`lvl` = `old_db`.`skillnames`.`level` WHERE `db`.`monsterability`.`npc_id` =" . $npc->id . " ORDER BY `db`.`monsterability`.`id` ASC");

        //positions
        $positions = DB::select("SELECT * FROM `db`.monster_location WHERE npc_id = " . $npc->id);

        //drops max > 1
        $drop = DB::select("SELECT * FROM `db`.`drops` JOIN `db`.`items` ON `db`.`drops`.`item_id` = `db`.`items`.`id` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `drops`.`npc_id` = " . $npc->id . " AND `max` > 1 ORDER BY `max` DESC, `percentage` DESC");

        //drops max = 1
        $drop2 = DB::select("SELECT * FROM `db`.`drops` JOIN `db`.`items` ON `db`.`drops`.`item_id` = `db`.`items`.`id` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `drops`.`npc_id` = " . $npc->id . " AND `max` = 1 ORDER BY `max` DESC, `percentage` DESC");

        //quest
        $quest = [];
        $res = DB::select("SELECT * FROM `pages` WHERE `content` LIKE ?", ['%' . $npc->name . '%']);
        foreach ($res as $row) {
            $quest[] = $row;
        }
        unset($row);

        $range = $npc->atkrange > 40 ? 'Range' : 'Melee';

        $argo = $npc->agro == 'Aggressive' ? '<span class="red">Aggressive</span>' : '<span class="blue">Passive</span>';

        $content = '
<div class="col-md-12">
    <h1 class="pageh1"><span> (Lvl: ' . $npc->lvl . ') </span>' . $npc->ru_name . ' / ' . $npc->name;
        if ($npc->titles != '') {
            $content .= ' <span> [ ' . $npc->titles . ' ] </span>';
        }
        $content .= '</h1>
<br>
</div>

<div class="col-md-7 npcimgcont">
    <img onerror="this.src=\'/img/l2-logo.jpg\'" class="npcimg" src="/npcs/' . $npc->id . '.jpg">
</div>

<div class="col-md-5">
<table class="dbtab">
    <tr><td>Уровень</td><td>' . $npc->lvl . '</td></tr>
    <tr><td><img src="/icons/skill1258_0.bmp">HP</td><td>' . $npc->hp . '</td></tr>
    <tr><td><img src="/shopicons/Icon.utx-etc_i.etc_alphabet_a_i00(Texture)_0.bmp">Exp</td><td>' . $npc->exp . '</td></tr>
    <tr><td><img src="/shopicons/Icon.utx-etc_i.etc_alphabet_b_i00(Texture)_0.bmp">SP</td><td>' . $npc->sp . '</td></tr>
    <tr><td><img src="/icons/skill0249_0.bmp">Физ. Атака</td><td>' . $npc->patk . '</td></tr>
    <tr><td><img src="/icons/skill0146_0.bmp">Маг. Атака</td><td>' . $npc->matk . '</td></tr>
    <tr><td><img src="/icons/skill7029_0.bmp">Скорость бега</td><td>' . $npc->speed . '</td></tr>
    <tr><td><img src="/icons/skill0003_0.bmp">Бой</td><td>' . $range . '</td></tr>
    <tr><td><img src="/icons/skill0002_0.bmp">Агр</td><td>' . $argo . '</td></tr>
</table></div>

<div class="col-md-12 npcinfo">';

        for ($i = 0; $i < count($skills); $i++) {

            $content .= '<div class="monsterskill"><img src="/icons/' . $skills[$i]->icon . '.bmp" alt="' . $skills[$i]->name . '" title="' . $skills[$i]->name . '"><span>' . $skills[$i]->name . '</span>. ' . $skills[$i]->rudesc . '</div>';

        }

        $content .= '</div>
<div class="col-md-12">
<ul id="tabberTab" class="nav nav-tabs">';

        $tabcount = 0;

        if (!empty($drop)) {
            $content .= '<li class="nav-item"><a class="nav-link';
            if ($tabcount === 0) {
                $content .= ' active';
            }
            $content .= '" href="#tabs-' . $tabcount . '">Дроп</a></li>';
            $tabcount++;
        }

        $hassweep = 0;
        foreach ($drop as $item) {
            if($item->sweep !== 0){
                $hassweep++;
            }
        }
        unset($item);
        foreach ($drop2 as $item) {
            if($item->sweep !== 0){
                $hassweep++;
            }
        }
        unset($item);

        if ($hassweep) {
            $content .= '<li class="nav-item"><a class="nav-link';
            if ($tabcount === 0) {
                $content .= ' active';
            }
            $content .= '" href="#tabs-' . $tabcount . '">Спойл</a></li>';
            $tabcount++;
        }

        //location
        $content .= '<li class="nav-item"><a class="nav-link';
        if ($tabcount === 0) {
            $content .= ' active';
        }
        $content .= '" href="#tabs-' . $tabcount . '">Локация</a></li>';
        $tabcount++;

        if (!empty($quest)) {
            $content .= '<li class="nav-item"><a class="nav-link';
            if ($tabcount === 0) {
                $content .= ' active';
            }
            $content .= '" href="#tabs-' . $tabcount . '">Квест</a></li>';
            $tabcount++;
        }




        $content .= '</ul><div id="tabs" class="tab-content">';

        $tablecount = 0;

        $sweep = 0;

        if (!empty($drop) || !empty($drop2)) {
            $content .= '<div class="craftcont tabber';
            if ($tablecount === 0) {
                $content .= ' activetab';
            }
            $content .= '" data-tab="Дроп">';
            foreach ($drop as $item) {
                if ($item->sweep == 0) {
                    $content .= '<a class="droplistitem" href="/items/' . $item->id . '"><img src="/icons/' . $item->icon . '"><span> ' . round($item->percentage + 0.01, 3) . ' % [' . $item->min;
                    if (intval($item->max) > intval($item->min)) {
                        $content .= '-' . $item->max;
                    }
                    $content .= ' шт .]</span > ' . $item->ru_name . ' </a > ';
                } else {
                    $sweep++;
                }
            }
            unset($item);

            foreach ($drop2 as $item) {
                if ($item->sweep == 0) {
                    $content .= '<a class="droplistitem" href="/items/' . $item->id . '"><img src="/icons/' . $item->icon . '"><span> ' . round($item->percentage + 0.01, 3) . ' % [' . $item->min;
                    if (intval($item->max) > intval($item->min)) {
                        $content .= '-' . $item->max;
                    }
                    $content .= ' шт .]</span > ' . $item->ru_name . ' </a > ';
                } else {
                    $sweep++;
                }
            }
            unset($item);

            $content .= '</div>';
            $tablecount++;
        }

        if ($sweep) {
            $content .= '<div class="craftcont tabber';
            if ($tablecount === 0) {
                $content .= ' activetab';
            }
            $content .= '" data-tab="Спойл">';
            foreach ($drop as $item) {
                if ($item->sweep == 1) {
                    $content .= '<a class="droplistitem" href="/items/' . $item->id . '"><img src="/icons/' . $item->icon . '"><span> ' . round($item->percentage + 0.01, 3) . ' % [' . $item->min;
                    if (intval($item->max) > intval($item->min)) {
                        $content .= '-' . $item->max;
                    }
                    $content .= ' шт .]</span > ' . $item->ru_name . ' </a > ';
                }
            }
            unset($item);

            foreach ($drop2 as $item) {
                if ($item->sweep == 1) {
                    $content .= '<a class="droplistitem" href="/items/' . $item->id . '"><img src="/icons/' . $item->icon . '"><span> ' . round($item->percentage + 0.01, 3) . ' % [' . $item->min;
                    if (intval($item->max) > intval($item->min)) {
                        $content .= '-' . $item->max;
                    }
                    $content .= ' шт .]</span > ' . $item->ru_name . ' </a > ';
                }
            }
            unset($item);

            $content .= '</div>';
            $tablecount++;
        }


        //location
        $content .= '<div class="npcmapcont tabber';
        if ($tablecount === 0) {
            $content .= ' activetab';
        }
        $content .= '" data-tab="Локация"><img class="npcmap" src="/img/map.jpg">';
        for ($i = 0; $i < count($positions); $i++) {
            $x = round((130000 + (int)$positions[$i]->X) / 200) - 15;
            $y = round((260000 + (int)$positions[$i]->Y) / 200) - 25;
            $content .= '<img  class="npcposition" src="/img/pointer.gif" data-top="' . $y . '" data-left="' . $x . '">';
        }
        $content .= '</div>';
        $tablecount++;


        if (!empty($quest)) {
            $content .= '<div class="craftcont tabber';
            if ($tablecount === 0) {
                $content .= ' activetab';
            }
            $content .= '" data-tab="Квест">';
            for ($i = 0; $i < count($quest); $i++) {
                $content .= '<a class="droplistitem" href="/articles/' . $quest[$i]->url . '"><span>' . $quest[$i]->title . '</span></a>';
            }
            $content .= '</div>';
            $tablecount++;
        }

        $content .= '</div></div><div class="clearfix"></div>';

        return $content;

    }
}
