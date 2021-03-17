<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class ManorController extends Controller
{
    protected $meta = [
        'title' => 'Манор Lineage 2 ⭐⭐⭐ l2stars.com',
        'keywords' => 'Манор Lineage 2',
        'description' => 'Манор Lineage 2',
        'seo' => 'Манор Lineage 2',
        'h1' => 'Манор Lineage 2',
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
        $str = file_get_contents(__DIR__ . '/../static/manor.html');
        require __DIR__ . "/simple_html_dom.php";
        $html = new \simple_html_dom();
        $html->load($str);
        $table = $html->find('table')[1];

        foreach ($table->find('td') as $td) {
            $text = trim($td->plaintext);
            $item = DB::selectOne("SELECT * FROM `old_db`.`itemnames` JOIN `old_db`.`items` ON (`old_db`.`itemnames`.`id` = `old_db`.`items`.`id`) WHERE `old_db`.`itemnames`.`name` = ?", [trim($text)]);
            if ($item) {
                $td->innertext = '<div class="cb1cont" title="' . $item->ru_name . '"><img src="/icons/' . $item->icon . '"> <a href="/items/' . $item->id . '">' . mb_ereg_replace('Семя: ', '', $item->ru_name) . '</a></div>';
            }
        }

        return $html->save();

    }

}
