<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class ItemsController extends Controller
{
    protected $meta = [
        'title' => 'Предметы Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Предметы Lineage 2',
        'description' => 'Предметы Lineage 2',
        'seo' => 'Предметы Lineage 2'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $this->contentindex()
        ]);
    }

    private function contentindex()
    {
        $items = [];
        $types = [];
        $res = DB::select("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `subtype` != ''");
        foreach ($res as $item) {
            if($item->subtype != 'Ресурсы' && $item->subtype != 'Рыбалка' && $item->subtype != 'Краска') {
                if (!in_array($item->subtype, $types)) {
                    $types[] = $item->subtype;
                }
                $items[] = $item;
            }
        }


        $content = '
<div class="col-md-6">
    <h1 class="pageh1">Предметы Lineage 2</h1>
</div>
<div class="col-md-6">
    <input class="form-control dbfilter input-sm" placeholder="Фильтр по названию" autocomplete="off">
</div>
<div class="col-md-12"><hr></div>
';

        for ($i = 0; $i < count($types); $i++) {
            $content .= '<div class="btn btn-default dbfilterbtn" data-type="' . mb_convert_case($types[$i], MB_CASE_TITLE, 'UTF-8') . '">' . mb_convert_case($types[$i], MB_CASE_TITLE, 'UTF-8') . '</div>';
        }

        $content .= '<div class="col-md-12"><br></div><div class="clearfix"></div>';

        for ($i = 0; $i < count($items); $i++) {
            $content .= '<a href="/items/' . $items[$i]->id . '" class="dbcont" data-name="' . $items[$i]->ru_name . ' ' . $items[$i]->name . '" data-type="' . $items[$i]->subtype . '"><img class="itemicon" src="/icons/' . $items[$i]->icon . '"><div>' . $items[$i]->ru_name . ' [ ' . $items[$i]->name . ' ]</div><span class="dbwhite">' . $items[$i]->rudesc . '</span><span><img class="itemparam" src="/icons/etc_adena_i00_0.bmp"> x ' . $items[$i]->price . '</span></a>';
        }

        return $content;

    }

    public function items()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $this->contentitems()
        ]);
    }

    private function contentitems()
    {
        $requested_id = Route::current()->parameter('id');

        if (is_numeric($requested_id)) {
            $item = DB::selectOne("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `db`.`items`.`id` = " . $requested_id);
            if(!$item){
                abort(404);
            }
        } else {
            $item = DB::selectOne("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `old_db`.`itemnames`.`name` LIKE ? ", [urldecode(str_replace('-', ' ', $requested_id))]);
            if(!$item){
                abort(404);
            }
            $requested_id = $item->id;
        }

        if ($item->parent != '') {
            $info = DB::selectOne("SELECT * FROM `db`.`" . $item->parent . "` WHERE `id` = " . $requested_id);
        }

        //подмена $requested_id для не запечатанной брони и бижи
        if (($item->parent == 'armor' || $item->parent == 'accessory') && strpos($item->runame, 'Запечатан ') === false) {
            if ($res = DB::selectOne("SELECT `id` FROM `db`.`items` WHERE `runame` = 'Запечатанный " . $item->runame . "' OR `runame` = 'Запечатанные " . $item->runame . "' OR `runame` = 'Запечатанная " . $item->runame . "' OR `runame` = 'Запечатанное " . $item->runame . "'")) {
                $requested_id = $res->id;
            }
        }

        //craft 60%
        $craft60items = [];
        $res = DB::select("SELECT * FROM `db`.`ingredients` WHERE `rate` = 60 AND `item_id` = " . $requested_id);
        foreach ($res as $row) {
            $res2 = DB::selectOne("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `db`.`items`.`id` = " . $row->material);
            $res2->quantity = $row->quantity;
            $craft60items[] = $res2;
        }
        unset($row);

        //craft 100%
        $craft100items = [];
        $res = DB::select("SELECT * FROM `db`.`ingredients` WHERE `rate` = 100 AND `item_id` = " . $requested_id);
        foreach ($res as $row) {
            $res2 = DB::selectOne("SELECT * FROM `db`.`items` JOIN `old_db`.`itemnames` ON `db`.`items`.`id` = `old_db`.`itemnames`.`id` WHERE `db`.`items`.`id` = " . $row->material);
            $res2->quantity = $row->quantity;
            $craft100items[] = $res2;
        }
        unset($row);

        //drop
        $drop = [];
        $res = DB::select("SELECT * FROM `db`.`drops` JOIN `db`.`npc` ON `db`.`drops`.`npc_id` = `db`.`npc`.`id` JOIN `old_db`.`npcnames` ON `db`.`npc`.`id` = `old_db`.`npcnames`.`id` WHERE `db`.`drops`.`sweep` = 0 AND `db`.`drops`.`item_id` = " . $requested_id . " ORDER BY `db`.`drops`.`percentage` DESC LIMIT 0,70");
        foreach ($res as $row) {
            $drop[] = $row;
        }
        unset($row);

        //sweep
        $sweep = [];
        $res = DB::select("SELECT * FROM `db`.`drops` JOIN `db`.`npc` ON `db`.`drops`.`npc_id` = `db`.`npc`.`id` JOIN `old_db`.`npcnames` ON `db`.`npc`.`id` = `old_db`.`npcnames`.`id` WHERE `db`.`drops`.`sweep` = 1 AND `db`.`drops`.`item_id` = " . $requested_id . " ORDER BY `db`.`drops`.`percentage` DESC LIMIT 0,70");
        foreach ($res as $row) {
            $sweep[] = $row;
        }
        unset($row);

        //quest
        $quest = [];
        $res = DB::select("SELECT * FROM `pages` WHERE `content` LIKE ?", ['%' . $item->name . '%']);
        foreach ($res as $row) {
            $quest[] = $row;
        }
        unset($row);

        $content = '<div class="col-md-12">
    <h1 class="dbh1 text-center"> <img src="/icons/' . $item->icon . '"> ' . $item->ru_name . ' [ ' . $item->name . ' ]</h1>';

        if (isset($item->rudesc) && $item->rudesc != '') {
            $content .= '<div class="iteminfo">' . $item->rudesc . '</div>';
        }

        $content .= '</div>
<div class="col-md-12">
<table class="dbtab">';

        if (isset($item->rutype) && $item->rutype != '') {
            $content .= '<tr><td>Тип</td><td>' . $item->rutype . '</td></tr>';
        }

        if (isset($info->ccode)) {
            switch ($info->ccode) {
                case 5:
                    $grade = 'S';
                    break;
                case 4:
                    $grade = 'A';
                    break;
                case 3:
                    $grade = 'B';
                    break;
                case 2:
                    $grade = 'C';
                    break;
                case 1:
                    $grade = 'D';
                    break;
                default:
                    $grade = 'No';
                    break;
            }
            $content .= '<tr><td>Грейд</td><td>' . $grade . '</td></tr>';
        }

        if (isset($item->weight) && $item->weight != 0) {
            $content .= '<tr><td><img src="/icons/skill0150_0.bmp">Вес</td><td>' . $item->weight . '</td></tr>';
        }

        if (isset($item->price) && $item->price != 0) {
            $content .= '<tr><td><img src="/icons/etc_adena_i00_0.bmp">Цена</td><td>' . $item->price . ' аден</td></tr>';
        }

        if (isset($info->hands) && $info->hands != 0) {
            $content .= '<tr><td><img src="/icons/skill1374_0.bmp">Руки</td><td>' . $info->hands . '</td></tr>';
        }

        if (isset($info->shots) && $info->shots != 0) {
            $content .= '<tr><td><img src="/icons/etc_spirit_bullet_white_i00_0.bmp">Шоты</td><td>' . $info->shots . '</td></tr>';
        }

        if (isset($info->ccount) && $info->ccount != 0) {
            $content .= '<tr><td><img src="/icons/etc_crystal_white_i00_0.bmp">Кри</td><td>' . $info->ccount . '</td></tr>';
        }

        if (isset($info->patk) && $info->patk != 0) {
            $content .= '<tr><td><img src="/icons/skill0249_0.bmp">Физ. Атк.</td><td>' . $info->patk . '</td></tr>';
        }

        if (isset($info->matk) && $info->matk != 0) {
            $content .= '<tr><td><img src="/icons/skill0146_0.bmp">Маг. Атк.</td><td>' . $info->matk . '</td></tr>';
        }

        if (isset($info->speed) && $info->speed != 0) {
            $content .= '<tr><td>Скорость Атк.</td><td>' . $info->speed . '</td></tr>';
        }

        if (isset($info->crit) && $info->crit != 0) {
            $content .= '<tr><td>Крит Атк.</td><td>' . $info->crit . '</td></tr>';
        }

        if (isset($info->pdef) && $info->pdef != 0) {
            $content .= '<tr><td><img src="/icons/skill0153_0.bmp">Физ. Защ.</td><td>' . $info->pdef . '</td></tr>';
        }

        if (isset($info->mpbonus) && $info->mpbonus != 0) {
            $content .= '<tr><td><img src="/icons/skill1048_0.bmp">MP бонус</td><td>' . $info->mpbonus . '</td></tr>';
        }

        if (isset($info->mdef) && $info->mdef != 0) {
            $content .= '<tr><td><img src="/icons/skill1035_0.bmp">Маг. Защ.</td><td>' . $info->mdef . '</td></tr>';
        }

        if (isset($info->level) && $info->level != 0) {
            $content .= '<tr><td><img src="/icons/skill0172_0.bmp">Уровень крафта</td><td>' . $info->level . '</td></tr>';
        }

        if (isset($info->mp) && $info->mp != 0) {
            $content .= '<tr><td>Потребление MP</td><td>' . $info->mp . '</td></tr>';
        }

        if (isset($info->chance) && $info->chance != 0) {
            $content .= '<tr><td>Шанс успеха</td><td>' . $info->chance . ' %</td></tr>';
        }

        $content .= '</table></div>
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

        if (!empty($sweep)) {
            $content .= '<li class="nav-item"><a class="nav-link';
            if ($tabcount === 0) {
                $content .= ' active';
            }
            $content .= '" href="#tabs-' . $tabcount . '">Спойл</a></li>';
            $tabcount++;
        }

        if (!empty($craft100items)) {
            $content .= '<li class="nav-item"><a class="nav-link';
            if ($tabcount === 0) {
                $content .= ' active';
            }
            $content .= '" href="#tabs-' . $tabcount . '">Крафт 100%</a></li>';
            $tabcount++;
        }

        if (!empty($craft60items)) {
            $content .= '<li class="nav-item"><a class="nav-link';
            if ($tabcount === 0) {
                $content .= ' active';
            }
            $content .= '" href="#tabs-' . $tabcount . '">Крафт 60%</a></li>';
            $tabcount++;
        }

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

        if (!empty($drop)) {
            $content .= '<div class="craftcont tabber';
            if ($tablecount === 0) {
                $content .= ' activetab';
            }
            $content .= '" data-tab="Дроп">';
            for ($i = 0; $i < count($drop); $i++) {
                $content .= '<a class="droplistitem" href="/npc/' . $drop[$i]->npc_id . '"><span>' . round($drop[$i]->percentage + 0.01, 3) . ' % [' . $drop[$i]->min;
                if (intval($drop[$i]->max) > intval($drop[$i]->min)) {
                    $content .= '-' . $drop[$i]->max;
                }
                $content .= ' шт.]</span>[ lvl: ' . $drop[$i]->lvl . ' ] ' . $drop[$i]->ru_name . ' [ ' . $drop[$i]->name . ' ]</a>';
            }
            $content .= '</div>';
            $tablecount++;
        }

        if (!empty($sweep)) {
            $content .= '<div class="craftcont tabber';
            if ($tablecount === 0) {
                $content .= ' activetab';
            }
            $content .= '" data-tab="Спойл">';
            for ($i = 0; $i < count($sweep); $i++) {
                $content .= '<a class="droplistitem" href="/npc/' . $sweep[$i]->npc_id . '"><span>' . round($sweep[$i]->percentage + 0.01, 3) . ' % [' . $sweep[$i]->min;
                if (intval($sweep[$i]->max) > intval($sweep[$i]->min)) {
                    $content .= '-' . $sweep[$i]->max;
                }
                $content .= ' шт.]</span>[ lvl: ' . $sweep[$i]->lvl . ' ] ' . $sweep[$i]->ru_name . ' [ ' . $sweep[$i]->name . ' ]</a>';
            }
            $content .= '</div>';
            $tablecount++;
        }

        if (!empty($craft100items)) {
            $has100recipe = false;
            $content .= '<div class="craftcont tabber';
            if ($tablecount === 0) {
                $content .= ' activetab';
            }
            $content .= '" data-tab="Крафт 100%">';
            for ($i = 0; $i < count($craft100items); $i++) {
                $content .= '<a href="/items/' . $craft100items[$i]->id . '"';
                if ($has100recipe) {
                    $content .= ' class="craftmargin"';
                }
                $content .= '><img src="/icons/' . $craft100items[$i]->icon . '"> <span> x ' . $craft100items[$i]->quantity . '</span>&nbsp;&nbsp;' . $craft100items[$i]->ru_name . ' [ ' . $craft100items[$i]->name . ' ]</a>';
                if (strpos($craft100items[$i]->icon, 'recipe') !== false) {
                    $has100recipe = true;
                }
            }
            $content .= '</div>';
            $tablecount++;
        }

        if (!empty($craft60items)) {
            $has60recipe = false;
            $content .= '<div class="craftcont tabber';
            if ($tablecount === 0) {
                $content .= ' activetab';
            }
            $content .= '" data-tab="Крафт 60%">';
            for ($i = 0; $i < count($craft60items); $i++) {
                $content .= '<a href="/items/' . $craft60items[$i]->id . '"';
                if ($has60recipe) {
                    $content .= ' class="craftmargin"';
                }
                $content .= '><img src="/icons/' . $craft60items[$i]->icon . '"> <span> x ' . $craft60items[$i]->quantity . '</span>&nbsp;&nbsp;' . $craft60items[$i]->ru_name . ' [ ' . $craft60items[$i]->name . ' ]</a>';
                if (strpos($craft60items[$i]->icon, 'recipe') !== false) {
                    $has60recipe = true;
                }
            }
            $content .= '</div>';
            $tablecount++;
        }

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
