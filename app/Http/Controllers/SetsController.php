<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class SetsController extends Controller
{
    protected $meta = [
        'title' => 'Сеты Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Сеты Lineage 2',
        'description' => 'Сеты Lineage 2',
        'seo' => 'Сеты Lineage 2'
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
        $sets = ['s' => [], 'a' => [], 'b' => [], 'c' => [], 'd' => [], 'no' => []];

        $types = [];

        $wep = DB::select("SELECT * FROM `db`.`sets`");

        foreach ($wep as $armor) {

            switch ($armor->grade) {
                case 'S':
                    $sets['s'][] = $armor;
                    break;
                case 'A':
                    $sets['a'][] = $armor;
                    break;
                case 'B':
                    $sets['b'][] = $armor;
                    break;
                case 'C':
                    $sets['c'][] = $armor;
                    break;
                case 'D':
                    $sets['d'][] = $armor;
                    break;
                default:
                    $sets['no'][] = $armor;
                    break;
            }

        }

        foreach ($sets as &$set) {

            for ($i = 0; $i < count($set); $i++) {

                $q = DB::select("SELECT * FROM `db`.`setitems` WHERE `setitems`.`set_id` = " . $set[$i]->id);

                foreach ($q as $item) {

                    $q2 = DB::select("SELECT * FROM `db`.`armor` JOIN `old_db`.`itemnames` ON `db`.`armor`.`id` = `old_db`.`itemnames`.`id` WHERE `db`.`armor`.`id` = " . $item->item_id);

                    foreach ($q2 as $item2) {

                        if (!in_array($item2->rutype, $types)) {
                            $types[] = $item2->rutype;
                        }

                        $set[$i]->items[] = $item2;

                    }

                }

            }

        }

        unset($set);

        $sar = [
            //S

            'light_draconic',
            'robe_arcana',
            'heavy_imperialcrusader',

            //A

            'heavy_darkcrystal',
            'light_darkcrystal',
            'robe_darkcrystal',

            'heavy_majestic',
            'light_majestic',
            'robe_majestic',

            'heavy_nightmare',
            'light_nightmare',
            'robe_nightmare',

            'heavy_tallum',
            'light_tallum',
            'robe_tallum',

            'heavy_apella',
            'light_apella',
            'robe_apella',

            //B

            'heavy_avadon',
            'heavy_bluewolf',
            'heavy_zubei',
            'heavy_doom',

            'light_avadon',
            'light_bluewolf',
            'light_zubei',
            'light_doom',

            'robe_avadon',
            'robe_bluewolf',
            'robe_zubei',
            'robe_doom',

            //C

            'light_mithril',
            'heavy_chainmail',
            'robe_karmian',

            'light_platedleather',
            'heavy_composite',
            'robe_demons',

            'light_theca',
            'light_drake',
            'heavy_fullplate',
            'robe_divine',


            //D
            'heavy_mithril',
            'light_reinforcedleather',
            'robe_knowledge',

            'light_manticore',
            'heavy_brigandine',
            'robe_elvenmithril',

            'light_clanoath',
            'heavy_clanoath',
            'robe_clanoath',

            //No

            'light_wooden',
            'robe_devotion',
        ];

        $rac = [
            'HumanFighter',
            'HumanMage',
            'Elf',
            'Darkelf',
            'OrcFighter',
            'OrcMage',
            'Dwarf'
        ];

        $pol = [
            'Male',
            'Female'
        ];

        $sctr = 0;

        $content = '
<div class="col-md-6">
                    <h1 class="pageh1">Сеты Lineage 2</h1>
</div>
<div class="col-md-6">
    <input class="form-control dbfilter input-sm" placeholder="Фильтр по названию" autocomplete="off">
</div>
<script>
$(document).ready(function () {
   //change race
    $(".racer").bind("change", function () {
        var pic = $(this).parent().find(".pic");
        var currentSrc = pic.attr(\'src\').replace(/https:\/\/cdn.l2stars.com\//, \'\').split(\'_\');
        currentSrc.splice(0, 1);
        pic.attr(\'src\', "https://cdn.l2stars.com/" + $(this).val().replace(\'DarkElf\', \'Darkelf\') + "_" + currentSrc.join("_"));
    });

    //change sex
    $(".sexer").bind("change", function () {
        var pic = $(this).parent().find(".pic");
        var currentSrc = pic.attr(\'src\').replace(/https:\/\/cdn.l2stars.com\//, \'\').split(\'_\');
        var race = currentSrc.splice(0, 1);
        currentSrc.splice(0, 1);
        pic.attr(\'src\', "https://cdn.l2stars.com/" + race + "_" + $(this).val() + "-front_" + currentSrc.join("_"));
    });

    //fashion rotator
    var turn_right = function () {
        var currentPic = $(this).parent().find(".pic");
        var current = currentPic.attr(\'src\');
        if(current === undefined){
            currentPic = $("#pic");
            current = currentPic.attr(\'src\');
        }
        if (current.indexOf(\'-front\') >= 0) {
            currentPic.attr(\'src\', current.replace(/-front/, \'-right\'));
        }
        if (current.indexOf(\'-right\') >= 0) {
            currentPic.attr(\'src\', current.replace(/-right/, \'-back\'));
        }
        if (current.indexOf(\'-back\') >= 0) {
            currentPic.attr(\'src\', current.replace(/-back/, \'-left\'));
        }
        if (current.indexOf(\'-left\') >= 0) {
            currentPic.attr(\'src\', current.replace(/-left/, \'-front\'));
        }

    };

    var turn_left = function () {
        var currentPic = $(this).parent().find(".pic");
        var current = currentPic.attr(\'src\');
        if(current === undefined){
            currentPic = $("#pic");
            current = currentPic.attr(\'src\');
        }
        if (current.indexOf(\'-front\') >= 0) {
            currentPic.attr(\'src\', current.replace(/-front/, \'-left\'));
        }
        if (current.indexOf(\'-right\') >= 0) {
            currentPic.attr(\'src\', current.replace(/-right/, \'-front\'));
        }
        if (current.indexOf(\'-back\') >= 0) {
            currentPic.attr(\'src\', current.replace(/-back/, \'-right\'));
        }
        if (current.indexOf(\'-left\') >= 0) {
            currentPic.attr(\'src\', current.replace(/-left/, \'-back\'));
        }
    };

    var keyDownDisable = function (e) {
        e = e || window.e;
        var newchar = e.which || e.keyCode;

        if (document.location.toString().indexOf(\'fashion\') >= 0) {

            if (newchar == 65 || newchar == 37 || newchar == 68 || newchar == 39) {
                e.stopPropagation();
                e.preventDefault();
                e.returnValue = false;
                e.cancelBubble = true;
                return false;
            }

        }
    };

    var keyPressed = function (e) {
        e = e || window.e;
        var newchar = e.which || e.keyCode;
        if (newchar == 65 || newchar == 37) {
            turn_left();
        }
        if (newchar == 68 || newchar == 39) {
            turn_right();
        }
    };

    $(\'.arright\').bind(\'click\', turn_right);
    $(\'.arleft\').bind(\'click\', turn_left);
    $(document).on("keydown", keyDownDisable);
    $(document).on("keyup", keyPressed);
});
</script>
<div class="col-md-12"><hr class="dbhr"></div>
';


        foreach ($sets as $grade => $set) {
            $content .= '<div class="btn btn-default dbfilterbtn" data-type="' . ucfirst($grade) . '-грейд">' . ucfirst($grade) . '-грейд</div>';
        }

        $content .= '<div class="col-md-12"><br></div><div class="clearfix"></div>';

        foreach ($sets as $grade => $set) {

            $content .= '<div class="dbsets"><h2 class="dbsetsheader">' . ucfirst($grade) . '-грейд</h2><div class="setpad">';

            for ($i = 0; $i < count($set); $i++) {

                $content .= '<div class="setcont">

                  <div class="col-md-6">
                      <h3 class="setheaderh3"><span>' . $set[$i]->name . '</span></h3><div class="setheader"> ' . $set[$i]->bonus . '</div>';

                for ($j = 0; $j < count($set[$i]->items); $j++) {

                    $content .= '<a href="/items/' . $set[$i]->items[$j]->id . '" class="dbcont" data-name="' . $set[$i]->items[$j]->name . '" data-type="' . ucfirst($grade) . '-грейд"><img src="/icons/' . $set[$i]->items[$j]->icon . '"><div>' . $set[$i]->items[$j]->name . '</div><span>' . $set[$i]->items[$j]->rudesc . '</span><span class="dbinfo"><img src="/icons/etc_crystal_white_i00_0.bmp"> x ' . $set[$i]->items[$j]->ccount . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/skill0150_0.bmp"> x ' . $set[$i]->items[$j]->weight . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/skill0153_0.bmp"> x ' . $set[$i]->items[$j]->pdef . '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/icons/etc_adena_i00_0.bmp"> x ' . $set[$i]->items[$j]->price . '</span></a>';
                }

                $content .= '</div>
                 <div class="col-md-6">

<div class="arcont text-center">
        <select class="racer Fashion_SelectBox form-control" autocomplete="off">
            <option value="HumanFighter">Human Fighter</option>
            <option value="HumanMage">Human Mage</option>
            <option value="Elf">Elf</option>
            <option value="DarkElf">Dark Elf</option>
            <option value="OrcFighter">Orc Fighter</option>
            <option value="OrcMage">Orc Mage</option>
            <option value="Dwarf">Dwarf</option>
        </select>
        <select class="sexer Fashion_SelectBox form-control" autocomplete="off">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
    <img src="https://cdn.l2stars.com/' . $rac[array_rand($rac)] . '_' . $pol[array_rand($pol)] . '-front_' . $sar[$sctr] . '_high.png" class="pic">
    <img src="/img/left.png" class="arleft smallarr">
    <img src="/img/right.png" class="arright smallarr">
</div>

<div class="clearfix"></div>

                  </div>
              <div class="clearfix"></div></div>';


                $sctr++;

            }

            $content .= '</div></div>';

        }

        return $content;

    }

}
