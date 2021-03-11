<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class SkillsController extends Controller
{
    protected $meta = [
        'title' => 'Скилы Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Скилы Lineage 2',
        'keywords' => 'Скилы Lineage 2',
        'description' => 'Скилы Lineage 2',
        'seo' => 'Скилы Lineage 2'
    ];

    public function index()
    {
        $content = $this->content();
        $this->meta['h1'] = 'Скилы / Умения : ' . $content[1];
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $content[0].$this->contentC4(),
            'switcher' => ['Interlude', 'C4']
        ]);
    }

    private function content()
    {
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
                    ['plains_walker' => ['Следопыт', 213, 218, 225], 'silver_ranger' => ['Серебряный Рейнджер', 213, 218, 224]],
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
                    ['elven_elder' => ['Мудрец Евы', 215, 218, 226]],
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

        $requested_id = Route::current()->parameter('id');

        if(!is_numeric($requested_id)){
            abort(404);
        }

        $cl = DB::selectOne("SELECT * FROM `db`.`classes` WHERE `id` = ?", [$requested_id]);

        if(!$cl){
            abort(404);
        }

        switch ($requested_id) {
            case 0:
                $h1 = "Воин";
                break;
            case 10:
                $h1 = "Мистик";
                break;
            case 18:
                $h1 = "Светлый Воин";
                break;
            case 25:
                $h1 = "Светлый Мистик";
                break;
            case 31:
                $h1 = "Темный Воин";
                break;
            case 38:
                $h1 = "Темный Мистик";
                break;
            case 44:
                $h1 = "Орк Боец";
                break;
            case 49:
                $h1 = "Орк Адепт";
                break;
            case 53:
                $h1 = "Подмастерье";
                break;
            default:
            {
                foreach ($classes as $class) {
                    foreach ($class as $type) {
                        foreach ($type as $key => $value) {
                            $this->meta['img'] = '/classes/' . str_replace('_', '', $cl->coded_name) . '.png';
                            if (isset($value[$cl->coded_name])) {
                                $h1 = $value[$cl->coded_name][0];
                                $this->meta['info'] = 'Скилы (активные и пассивные умения) получаемые классом '.$h1.' при достижении уровней';
                            }
                        }
                    }
                }
            }
        }

        $min = $cl->min_level;
        $max = $cl->max_level;

        $skills = [];

        $res = DB::select("SELECT * FROM `db`.`gainskills` JOIN `db`.`skills` ON gainskills.skill_id = skills.skill_id AND gainskills.skill_level = skills.lvl WHERE `gainskills`.class_id = " . $requested_id . " AND `gainskills`.`level` BETWEEN $min AND $max ORDER BY `gainskills`.`level`, `gainskills`.`skill_id`, `gainskills`.`skill_level`");
        foreach ($res as $row) {
            $skills[$row->level][] = $row;
        }

        $content = '<div class="skillisttab"><ul id="tabberTab" class="nav nav-tabs">';
        $licount = count($skills);
        $licounter = 0;
        foreach ($skills as $key=>$value){
            $content .= '<li class="nav-item"><a class="nav-link';
            if($licount > 10){
                $content .= ' smallertab';
            }
            if($licounter === 0){
                $content .= ' active';
            }
            $content .= '" href="#tabs-' . $licounter . '">' . $key . ' Lvl</a></li>';
            $licounter++;
        }
        unset($key);
        unset($value);

        $content .= '</ul><div id="tabs" class="tab-content">';

        $tabcounter = 0;
        foreach ($skills as $key=>$value) {
            $content .= '<div class="tabber';
            if($tabcounter === 0){
                $content .= ' activetab';
            }
            $content .= '" data-tab="' . $key . ' Lvl"><table class="skillisttab"><tr class="skillheader"><td></td><td>Название умения</td><td>Тип</td><td>Потребление MP</td><td>Потребление HP</td><td>SP для изучения</td></tr>';
            foreach ($value as $k=>$val){
                $active = $val->active == 1 ? 'Активный' : 'Пассивный';
                $content .= '<tr><td><img src="/icons/' . $val->icon . '.bmp"></td><td style="text-align: left;">' . $val->runame . ' [Ур. ' . $val->skill_level . ']<br><span class="skilltext">' . $val->rudesc . '</span></td><td>' . $active . '</td><td>' . $val->mpconsume . '</td><td>' . $val->hpconsume . '</td><td>' . $val->sp_cost . '</td></tr>';

            }
            $content .= '</table></div>';
            $tabcounter++;
        }

        $content .= '</div></div><br><br>';

        return [$content, $h1];

    }

    private function contentC4()
    {
        $requested_id = Route::current()->parameter('id');

        $content = '';

        if (file_exists(__DIR__ . '/../_skills/' . $requested_id)) {
            $text = file_get_contents(__DIR__ . '/../_skills/' . $requested_id);

            $text = str_replace('src="http://elmore.ru/', 'src="/', $text);
            $text = str_replace("bgcolor='#c0cfdf'", 'class="skillstrip"', $text);
            $text = str_replace("background-color:White;", 'background-color:rgb(14,14,14);', $text);

            $content = '<style>
.skillstrip{background-color: rgba(55,55,55, 0.3);}
.table-bordered, .table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th{
    border: 1px solid rgba(255,255,255, 0.2);}
</style><br><br><div class="skillisttab content col-md-12 skillisttabwrapper" style="display: none">'.$text.'</div><div class="clearfix"></div> <br><br><script>var sdiv = ""; $("a:contains(\'Вытесняет\')").hide();$(".table-bordered tr").eq(1).hide();</script>';

        }

        return $content;

    }

}
