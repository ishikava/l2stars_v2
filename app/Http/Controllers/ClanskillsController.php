<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class ClanskillsController extends Controller
{
    protected $meta = [
        'title' => 'Клан скилы (Clan Skills)  Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Клан скилы (Clan Skills)  Lineage 2',
        'keywords' => 'Клан скилы (Clan Skills)  Lineage 2',
        'description' => 'Клан скилы (Clan Skills)  Lineage 2',
        'seo' => 'Клан скилы (Clan Skills)  Lineage 2',
        'info' => 'Клан скилы - это пассивные умения, которые действуют на всех членов клана (в зависимости от звания).<br>
Для того чтобы выучить клановое умение , необходимо иметь требуемое количество очков репутации клана и "яйца РБ".<br><br>
Если количество очков репутации клана достигает <strong style="font-size: 1.2em; color: red;">-1</strong> или ниже, станет невозможно изучать клановые умения, даже если для их получения не нужны очки репутации.<br><br>
<img src="/images/clanskills/Cradle_of_creation.jpg" alt="Cradle of Creation"> <strong>Cradle of Creation</strong> можно получить у <strong>Adventure Guildsman.</strong><br><br> Обменяйте  <img src="/images/clanskills/Destruction_tombstone.jpg" alt="Destruction Tombstone"> <strong>Destruction Tombstone</strong> - 3 шт. на <img src="/images/clanskills/box_of_adventure.jpg" alt="Adventurer`s Box: Cradle of Creation"> <strong>Adventurer`s Box: Cradle of Creation</strong> и откройте его двойным кликом. Также есть шанс ничего не получить при открытии сундука.'
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
        //грязный поиск линков
        $str = file_get_contents(__DIR__ . '/../static/clanskills.html');
        require __DIR__ . "/simple_html_dom.php";
        $html = new \simple_html_dom();
        $html->load($str);

        foreach ($html->find('a') as $a) {
            $item = DB::selectOne("SELECT * FROM `old_db`.`itemnames` JOIN `old_db`.`items` ON (`old_db`.`itemnames`.`id` = `old_db`.`items`.`id`) WHERE `old_db`.`itemnames`.`name` = ?", [trim($a->plaintext)]);
            if ($item) {
                $a->href = '/items/'.$item->id;
            }
        }

        return $html->save();

    }

}
