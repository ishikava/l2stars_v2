<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class MonstersController extends Controller
{
    protected $meta = [
        'title' => 'Монстры Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Монстры Lineage 2',
        'keywords' => 'Монстры Lineage 2',
        'description' => 'Монстры Lineage 2',
        'seo' => 'Монстры Lineage 2'
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
        $npc = DB::select("SELECT * FROM `db`.`monsters` JOIN `old_db`.`npcnames` ON `db`.`monsters`.`id` = `old_db`.`npcnames`.`id` ORDER BY `lvl`");

        $content = file_get_contents(__DIR__ . '/../static/monsters.html');

        for ($i = 0; $i < count($npc); $i++) {

            $content .= '<tr class="monstercont" data-name="' . $npc[$i]->ru_name . ' / ' . $npc[$i]->name . '" data-lvl="' . $npc[$i]->lvl . '"><td style="text-align: left !important;">';

            $icon = explode(':', $npc[$i]->icon);

            if (count($icon) > 1) {

                $content .= '<a href="/npc/' . $npc[$i]->id . '" class="monsterlink wikia ';
                $content .= $npc[$i]->agro == 'Aggressive' ? 'red' : 'blue';
                $content .= '"><img class="monstertypeimg" src="/icons/' . $icon[0] . '.bmp" alt="' . $icon[1] . '" title="' . $icon[1] . '"><span>[Lvl: ' . $npc[$i]->lvl . ']&nbsp;&nbsp;</span>' . $npc[$i]->ru_name . ' / ' . $npc[$i]->name . '<img class="monsterrange" src="/icons/';
                $content .= $npc[$i]->atkrange > 40 ? 'skill0208_0.bmp' : 'skill0249_0.bmp';
                $content .= '">';
                if ($npc[$i]->titles != '') {
                    $content .= ' <span> [ ' . $npc[$i]->titles . ' ] </span> ';
                }
                $content .= '</a>';
                $content .= '<div class="clearfix"></div><div class="monsterparams">HP: ' . $npc[$i]->hp . '&nbsp;&nbsp;&nbsp;P.atk: ' . $npc[$i]->patk . ' / M.atk: ' . $npc[$i]->matk . '&nbsp;&nbsp;&nbsp;<span>Exp: ' . $npc[$i]->exp . ' / Sp: ' . $npc[$i]->sp . '</span></div>';

            }

            $content .= '</td><td class="monsterabicont hidden-xs hidden-sm">';

            $tmp = explode('|', $npc[$i]->skills);

            for ($j = 0; $j < count($tmp); $j++) {
                $skill = explode(':', $tmp[$j]);
                if (count($skill) > 1) {
                    $content .= '<img class="monsterabi" src="/icons/' . $skill[0] . '.bmp" alt="' . $skill[1] . '" title="' . $skill[1] . '">';
                }
            }

            $content .= '</td><td class="monsterabicont hidden-xs hidden-sm">';

            $tmp = explode('|', $npc[$i]->weak);

            for ($j = 0; $j < count($tmp); $j++) {
                $skill = explode(':', $tmp[$j]);
                if (count($skill) > 1) {
                    $content .= '<img class="monsterabi" src="/icons/' . $skill[0] . '.bmp" alt="' . $skill[1] . '" title="' . $skill[1] . '">';
                }
            }

            $content .= '</td></tr>';

        }

        $content .= '</table><br><br>';

        return $content;
    }

}
