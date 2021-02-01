<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class RaidsController extends Controller
{
    protected $meta = [
        'title' => 'Рейд-Боссы Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Рейд-Боссы Lineage 2',
        'keywords' => 'Рейд-Боссы Lineage 2',
        'description' => 'Рейд-Боссы Lineage 2',
        'seo' => 'Рейд-Боссы Lineage 2'
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
        $npc = DB::select("SELECT * FROM `db`.`raids` JOIN `old_db`.`npcnames` ON `db`.`raids`.`id` = `old_db`.`npcnames`.`id` ORDER BY `lvl`");

        $content = file_get_contents(__DIR__ . '/../static/monsters.html');

        for ($i = 0; $i < count($npc); $i++) {

            $skills = explode('|', $npc[$i]->skills);
            $weaks = explode('|', $npc[$i]->weak);
            $drops = explode('|', $npc[$i]->drops);
            $icon = explode(':', $npc[$i]->icon);

            if ($icon[1] == 'Рейдовый Босс') {
                $tmp = array_shift($skills);
                $tmp = array_shift($skills);
                $icon = explode(':', $tmp);
            }

            $content .= '<tr class="monstercont" data-name="' . $npc[$i]->ru_name . ' / ' . $npc[$i]->name . '" data-lvl="' . $npc[$i]->lvl . '"><td style="text-align: left !important;">';


            $content .= '<a href="/npc/' . $npc[$i]->id . '" class="monsterlink wikia"><img class="monstertypeimg" src="/icons/' . $icon[0] . '.bmp" alt="' . $icon[1] . '" title="' . $icon[1] . '"><span>[Lvl: ' . $npc[$i]->lvl . ']&nbsp;&nbsp;</span>' . $npc[$i]->ru_name . ' / ' . $npc[$i]->name . '</a>';

            $content .= '<div class="raiddrops">';
            for ($j = 0; $j < count($drops); $j++) {
                $drop = explode(':', $drops[$j]);
                if (count($drop) > 1) {
                    $content .= '<img class="monsterabi2" src="/icons/' . $drop[0] . '" alt="' . $drop[1] . '" title="' . $drop[1] . '">';
                }
            }
            $content .= '</div>';

            $content .= '<div class="clearfix"></div><div class="monsterparams">HP: ' . $npc[$i]->hp . '&nbsp;&nbsp;&nbsp;P.atk: ' . $npc[$i]->patk . ' / M.atk: ' . $npc[$i]->matk . '&nbsp;&nbsp;&nbsp;<span>Exp: ' . $npc[$i]->exp . ' / Sp: ' . $npc[$i]->sp . '</span></div>';


            $content .= '</td><td class="monsterabicont hidden-xs hidden-sm">';
            for ($j = 0; $j < count($skills); $j++) {
                $skill = explode(':', $skills[$j]);
                if (count($skill) > 1) {
                    $content .= '<img class="monsterabi" src="/icons/' . $skill[0] . '.bmp" alt="' . $skill[1] . '" title="' . $skill[1] . '">';
                }
            }
            $content .= '</td><td class="monsterabicont hidden-xs hidden-sm">';
            for ($j = 0; $j < count($weaks); $j++) {
                $weak = explode(':', $weaks[$j]);
                if (count($weak) > 1) {
                    $content .= '<img class="monsterabi" src="/icons/' . $weak[0] . '.bmp" alt="' . $weak[1] . '" title="' . $weak[1] . '">';
                }
            }
            $content .= '</td></tr>';

        }

        $content .= '</table><br><br>';

        return $content;
    }

}
