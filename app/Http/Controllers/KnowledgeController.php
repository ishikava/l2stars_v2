<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class KnowledgeController extends Controller
{
    protected $meta = [
        'title' => 'База знаний Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'База знаний Lineage 2',
        'keywords' => 'База знаний Lineage 2',
        'description' => 'База знаний Lineage 2',
        'seo' => 'База знаний Lineage 2'
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
        $races = array('fighter', 'mage', 'elven_fighter', 'elven_mage', 'dark_fighter', 'dark_mage', 'orc_fighter', 'orc_mage', 'dwarven_fighter');

        $races_ru = array('Воин', 'Мистик', 'Светлый Воин', 'Светлый Мистик', 'Темный Воин', 'Темный Мистик', 'Боец', 'Адепт', 'Подмастерье');

        $classes = array(
            0 => [
                0 => array(
                    ['warrior' => ['Воитель', 401]],
                    ['warlord' => ['Копейщик', 211, 217, 223], 'gladiator' => ['Гладиатор', 211, 217, 222]],
                    ['dreadnought' => ['Полководец', 74], 'duelist' => ['Дуэлист', 73]]
                ),
                1 => array(
                    ['knight' => ['Рыцарь', 402]],
                    ['paladin' => ['Паладин', 212, 217, 226], 'dark_avenger' => ['Мститель', 212, 217, 229]],
                    ['phoenix_knight' => ['Рыцарь Феникса', 70], 'hell_knight' => ['Рыцарь Ада', 95]]
                ),
                2 => array(
                    ['rogue' => ['Разбойник', 403]],
                    ['treasure_hunter' => ['Искатель Сокровищь', 213, 217, 225], 'hawkeye' => ['Стрелок', 213, 217, 224]],
                    ['adventurer' => ['Авантюрист', 79], 'sagittarius' => ['Снайпер', 82]]
                )
            ],
            1 => [
                0 => array(
                    ['wizard' => ['Маг', 404]],
                    ['sorcerer' => ['Властитель Огня', 214, 217, 228], 'necromancer' => ['Некромант', 214, 217, 229], 'warlock' => ['Колдун', 214, 217, 230]],
                    ['archmage' => ['Архимаг', 88], 'soultaker' => ['Пожиратель Душ', 94], 'arcana_lord' => ['Чернокнижник', 91]]
                ),
                1 => array(
                    ['cleric' => ['Клерик', 405]],
                    ['bishop' => ['Епископ', 215, 217, 226], 'prophet' => ['Проповедник', 215, 217, 227]],
                    ['cardinal' => ['Кардинал', 85], 'hierophant' => ['Апостол', 86]]
                )
            ],
            2 => [
                0 => array(
                    ['elven_knight' => ['Светлый Рыцарь', 406]],
                    ['swordsinger' => ['Менестрель', 211, 218, 222], 'temple_knight' => ['Рыцарь Евы', 212, 218, 226]],
                    ['sword_muse' => ['Виртуоз', 72], 'evas_templar' => ['Храмовник Евы', 71]]
                ),
                1 => array(
                    ['elven_scout' => ['Разведчик', 407]],
                    ['plain_walker' => ['Следопыт', 213, 218, 225], 'silver_ranger' => ['Серебряный Рейнджер', 213, 218, 224]],
                    ['wind_rider' => ['Странник Ветра', 80], 'moonlight_sentinel' => ['Страж Лунного Света', 83]]
                )
            ],
            3 => [
                0 => array(
                    ['elven_wizard' => ['Светлый маг', 408]],
                    ['elemental_summoner' => ['Последователь Стихий', 214, 218, 230], 'spellsinger' => ['Певец Заклинаний', 214, 218, 228]],
                    ['elemental_master' => ['Мастер Стихий', 92], 'mystic_muse' => ['Магистр Магии', 89]]
                ),
                1 => array(
                    ['oracle' => ['Оракул Евы', 409]],
                    ['elder' => ['Мудрец Евы', 215, 218, 226]],
                    ['evas_saint' => ['Жрец Евы', 87]]
                )
            ],
            4 => [
                0 => array(
                    ['palus_knight' => ['Темный Рыцарь', 410]],
                    ['shillien_knight' => ['Рыцарь Шилен', 212, 219, 229], 'bladedancer' => ['Танцор Смерти', 211, 219, 222]],
                    ['shillien_templar' => ['Храмовник Шилен', 97], 'spectral_dancer' => ['Призрачный Танцор', 96]]
                ),
                1 => array(
                    ['assasin' => ['Ассасин', 411]],
                    ['abyss_walker' => ['Странник Бездны', 213, 219, 225], 'phantom_ranger' => ['Призрачный Рейнджер', 213, 219, 224]],
                    ['ghost_hunter' => ['Призрачный Охотник', 81], 'ghost_sentinel' => ['Страж Теней', 84]]
                )
            ],
            5 => [
                0 => array(
                    ['dark_wizard' => ['Темный Маг', 412]],
                    ['spellhowler' => ['Заклинатель Ветра', 214, 219, 228], 'phantom_summoner' => ['Последователь Тьмы', 214, 219, 230]],
                    ['storm_screamer' => ['Повелитель Бури', 90], 'spectral_master' => ['Владыка Теней', 93]]
                ),
                1 => array(
                    ['shillien_oracle' => ['Оракул Шилен', 413]],
                    ['shillien_elder' => ['Мудрец Шилен', 215, 219, 227]],
                    ['shillien_saint' => ['Жрец Шилен', 98]]
                )
            ],
            6 => [
                0 => array(
                    ['orc_raider' => ['Налетчик', 414]],
                    ['destroyer' => ['Разрушитель', 211, 220, 223]],
                    ['titan' => ['Титан', 75]]
                ),
                1 => array(
                    ['orc_monk' => ['Монах', 415]],
                    ['tyrant' => ['Отшельник', 211, 220, 222]],
                    ['grand_khavatari' => ['Аватар', 76]]
                )
            ],
            7 => [
                0 => array(
                    ['orc_shaman' => ['Шаман', 416]],
                    ['overlord' => ['Верховный шаман', 215, 220, 232], 'warcryer' => ['Вестник Войны', 215, 220, 233]],
                    ['dominator' => ['Деспот', 77], 'doomcryer' => ['Глас Судьбы', 78]]
                )
            ],
            8 => [
                0 => array(
                    ['scavenger' => ['Собиратель', 417]],
                    ['bounty_hunter' => ['Охотник за Наградой', 216, 221, 225]],
                    ['fortune_seeker' => ['Кладоискатель', 99]]
                ),
                1 => array(
                    ['artisan' => ['Ремесленник', 418]],
                    ['warsmith' => ['Кузнец', 216, 221, 231]],
                    ['maestro' => ['Мастер', 100]]
                )
            ]
        );

        $quests = [];
        $class_ids = [];
        $class_names = [];

        $q = DB::select("SELECT DISTINCT `quest_id`, `main_name`, `main_name_en` FROM `old_db`.`quests_ru`");
        foreach ($q as $quest) {
            $quests[$quest->quest_id] = $quest;
        }

        $cl = DB::select("SELECT * FROM `db`.`classes` WHERE `coded_name` IS NOT NULL");
        foreach ($cl as $class) {
            $class_ids[$class->coded_name] = $class->id;
            $class_names[$class->coded_name] = $class->name;
        }

        $content = file_get_contents(__DIR__.'/../static/knowledge.html');

        for ($a = 0; $a < count($classes); $a++) {

            switch ($a) {
                case 0 :
                case 1 :
                    $race = 'Human';
                    break;
                case 2 :
                case 3 :
                    $race = 'Elf';
                    break;
                case 4 :
                case 5 :
                    $race = 'Dark Elf';
                    break;
                case 6 :
                case 7 :
                    $race = 'Orc';
                    break;
                case 8 :
                    $race = 'Dwarf';
                    break;
            }

            $ork = '';

            if($a == 0 || $a == 2 || $a == 4 || $a == 6 || $a == 8){
                $content .= '<div data-tab="'.$race.'" class="tabber '; if($a == 0){ $content .= 'activetab';}  $content .= '">';
            }

            $content .= '
        <h2 class="wikih2"><a href="/skills/' . $class_ids[$races[$a]] . '">' . $class_names[$races[$a]] . '</a></h2>
        <div class="classesContainer' . $ork . '">';

            for ($b = 0; $b < count($classes[$a]); $b++) {

                $cell_count = count($classes[$a]) > 2 ? 'col-md-4 classgrp' : 'col-md-6 classgrp';

                if (count($classes[$a]) < 2)
                    $cell_count = '';

                $content .= '<div class="' . $cell_count . '">';

                for ($c = 0; $c < count($classes[$a][$b]); $c++) {

                    $content .= '<div class="classesItemContainer">';

                    $subs = count($classes[$a][$b][$c]);

                    if ($c == 1) {

                        $content .= '<img class="clar" src="/img/classesarrows-' . $subs . '.png">';

                    }

                    foreach ($classes[$a][$b][$c] as $class_name => $class) {

                        switch (count($classes[$a][$b][$c])) {
                            case 1 :
                                $classes_item = '';
                                break;
                            case 2 :
                                $classes_item = 'classesItem2';
                                break;
                            case 3 :
                                $classes_item = 'classesItem3';
                                break;
                        }

                        $ru_name = array_shift($class);

                        $content .= '<div class="' . $classes_item . '">';

                        if ($c > 1) {

                            $content .= '<img class="clarsolo" src="/img/classesarrows-solo.png">';

                        }

                        $content .= '<a class="classesItem" href="/skills/' . $class_ids[$class_name] . '"><span>' . ucfirst(str_replace('_', ' ', $class_name)) . '</span>
                    <img src="/classes/' . str_replace('_', '', $class_name) . '.png"></a>';

                        for ($d = 0; $d < 1; $d++) {

                            if(count($class) > 1){
                                $content .= '<div class="classesItemText2"><a class="wikia" href="/quests/' . $class_name . '">Квест</a></div>';
                            } else {
                                $content .= '<div class="classesItemText2"><a class="wikia" href="/quests/' . $class[$d] . '">Квест</a></div>';
                            }

                        }

                        $content .= '</div>';

                    }

                    $content .= '<div class="clearfix"></div></div>';

                }

                $content .= '</div>';

            }

            $content .= '<div class="clearfix"></div></div>';

            if($a == 1 || $a == 3 || $a == 5 || $a == 7 || $a == 8){
                $content .= '</div>';
            }

        }

        $content .= '</div><br><br><br>';

        return $content;

    }

}
