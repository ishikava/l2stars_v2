<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class SpecialshopsController extends Controller
{
    protected $meta = [
        'title' => 'Специальные магазины Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Специальные магазины Lineage 2',
        'description' => 'Специальные магазины Lineage 2',
        'seo' => 'Специальные магазины Lineage 2',
        'info' => 'Специальные магазины Lineage 2'
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
        $str = file_get_contents(__DIR__ . '/../static/specialshops.html');
        require __DIR__ . "/simple_html_dom.php";
        $html = new \simple_html_dom();
        $html->load($str);

        foreach ($html->find('tr') as $tr) {
            $tds = $tr->find('td');
            $tdsindex = 0;
            foreach ($tds as $td) {
                if ($tdsindex === 1) {
                    $texts = explode('<br>', $td->innertext);
                    $new_text = [];
                    foreach ($texts as $text) {
                        if ($text != '') {
                            $item = DB::selectOne("SELECT * FROM `old_db`.`itemnames` JOIN `old_db`.`items` ON (`old_db`.`itemnames`.`id` = `old_db`.`items`.`id`) WHERE `old_db`.`itemnames`.`name` = ?", [trim($text)]);
                            if ($item) {
                                $new_text[] = '<a class="artlink" href="/items/' . $item->id . '">' . $text . '</a>';
                            } else {
                                $new_text[] = $text;
                            }
                        }
                    }
                    $td->innertext = implode($new_text);
                }
                $tdsindex++;
            }
        }
        return $html->save();
    }

}
