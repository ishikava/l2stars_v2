<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class WorldmapController extends Controller
{

    protected $meta = [
        'title' => 'Карта респауна рейд-боссов Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Карта респауна рейд-боссов Lineage 2',
        'keywords' => 'Карта респауна рейд-боссов Lineage 2',
        'description' => 'Карта респауна рейд-боссов Lineage 2',
        'seo' => 'Карта респауна рейд-боссов Lineage 2'
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
        $raids = json_decode(file_get_contents(__DIR__ . '/../data/_raiddata.json'), true);
        $epics = json_decode(file_get_contents(__DIR__ . '/../data/_epics.json'), true);

        $content = '
<div class="col-md-6">
    <input class="form-control monsterlvl" placeholder="Уровень +/- 2" autocomplete="off" type="number" max="90">
</div>
<div class="col-md-6">
    <input class="form-control dbfilter" placeholder="Фильтр по названию" autocomplete="off">
</div>
<div class="clearfix"></div>

<div class="worldmap" id="worldmap">
<div class="worldmapscene">
<img src="/img/map.jpg">';


        if (isset($raids)) {
            for ($i = 0; $i < count($raids); $i++) {

                $x = round((130000 + (int)$raids[$i]['X']) / 200);
                $y = round((260000 + (int)$raids[$i]['Y']) / 200) - 10;

                $content .= '
<div class="raidcontainer"  data-name="' . $raids[$i]['runame'] . '" data-lvl="' . $raids[$i]['lvl'] . '" style="top:' . $y . 'px;left:' . $x . 'px;">';

                if (isset($killed[$raids[$i]['id']])) {
                    $content .= '<img class="killed" src="/img/killed.png">';
                } else {
                    $content .= '<img class="raidflag" src="/img/flag.png">';
                }

                $content .= '<div class="raidcontainerinner">
<div class="raidcontainerimgcont">
<img class="raidimg" src="/npcs/' . $raids[$i]['id'] . '.jpg">
</div>
<div class="wmraidinfo">
<span class="raidnamelvl">Рейд-Босс (Lvl: ' . $raids[$i]['lvl'] . ')</span><br>
';


                $content .= '
<div class="raidname">' . $raids[$i]['runame'] . '</div>';

                for ($j = 0; $j < count($raids[$i]['skills']); $j++) {

                    $content .= '<img class="raidinfoimg" src="/icons/' . $raids[$i]['skills'][$j][0] . '.bmp" title="' . $raids[$i]['skills'][$j][1] . '">';

                }

                $content .= '
<div class="raidinfotext">';

                if (isset($raids[$i]['skills'][1][0]) && $raids[$i]['skills'][1][0] == 'skillraid_0') {

                    $content .= $raids[$i]['skills'][1][2];

                }

                $content .= '<hr class="raidhr">';

                $drops = explode('|', $raids[$i]['drops']);

                for ($k = 0; $k < count($drops); $k++) {

                    $drop = explode(':', $drops[$k]);

                    $content .= '<img class="raiddropsimg" src="/icons/' . $drop[0] . '" title="' . $drop[1] . '">';

                }

                $content .= '<br>подробнее: <a href="/npc/' . $raids[$i]['id'] . '" target="_blank">https://l2stars.com/npcs/' . $raids[$i]['id'] . ' </a> </div>
</div><div class="clearfix"></div>
</div>
</div>
';

            }
        }

        if (isset($epics)) {
            for ($i = 0; $i < count($epics); $i++) {

                $x = round((130000 + (int)$epics[$i]['X']) / 200);
                $y = round((260000 + (int)$epics[$i]['Y']) / 200) - 10;

                $content .= '
<div class="raidcontainer"  data-name="' . $epics[$i]['runame'] . '" data-lvl="' . $epics[$i]['lvl'] . '" style="top:' . $y . 'px;left:' . $x . 'px;">';

                if (isset($killed[$epics[$i]['id']])) {
                    $content .= '<img class="killed" src="/img/killed.png">';
                } else {
                    $content .= '<img class="raidflag" src="/img/epicflag.png">';
                }

                $content .= '<div class="raidcontainerinner">
<div class="raidcontainerimgcont">
<img class="raidimg" src="/npcs/' . $epics[$i]['id'] . '.jpg">
</div>
<div class="wmraidinfo">
<span class="raidnamelvl">Рейд-Босс (Lvl: ' . $epics[$i]['lvl'] . ')</span><br>
';


                $content .= '
<div class="raidname">' . $epics[$i]['runame'] . '</div>';

                for ($j = 0; $j < count($epics[$i]['skills']); $j++) {

                    $content .= '<img class="raidinfoimg" src="/icons/' . $epics[$i]['skills'][$j][0] . '.bmp" title="' . $epics[$i]['skills'][$j][1] . '">';

                }

                $content .= '
<div class="raidinfotext">';

                if (isset($epics[$i]['skills'][1][0]) && $epics[$i]['skills'][1][0] == 'skillraid_0') {

                    $content .= $epics[$i]['skills'][1][2];

                }

                $content .= '<hr class="raidhr">';

                $drops = explode('|', $epics[$i]['drops']);

                for ($k = 0; $k < count($drops); $k++) {

                    $drop = explode(':', $drops[$k]);

                    $content .= '<img class="raiddropsimg" src="/icons/' . $drop[0] . '" title="' . $drop[1] . '">';

                }

                $content .= '<br>подробнее: <a href="/npc/' . $epics[$i]['id'] . '" target="_blank">https://l2stars.com/npcs/' . $epics[$i]['id'] . ' </a> </div>
</div><div class="clearfix"></div>
</div>
</div>
';

            }
        }

        $content .= '</div></div>';

        return $content;

    }
}
