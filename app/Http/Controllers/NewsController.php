<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class NewsController extends Controller
{
    protected $meta = [
        'title' => 'Новости серверов Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Новости серверов Lineage 2',
        'keywords' => 'Новости серверов Lineage 2',
        'description' => 'Новости серверов Lineage 2',
        'seo' => 'Новости серверов Lineage 2'
    ];
    protected $content = "";

    public function index()
    {

        $res = DB::select('SELECT * FROM `posts` WHERE `status` = 1 ORDER BY `time` DESC LIMIT 0,100');

        setlocale(LC_ALL, 'ru.utf-8', 'ru_RU.utf-8', 'ru', 'ru_RU');

        foreach ($res as &$item) {

            $dts = Carbon::createFromTimestamp($item->time);
            $item->loc_month = Helper::mb_ucfirst($dts->locale('ru')->shortMonthName);

            $text = $item->text;
            $text = preg_replace("/(https?:\/\/(\S+))/", "<a class='news_text_a' data-href=\"$1\">$1</a>", $text);
            $text = preg_replace("/\[id(\d+)\|(.+?)\]/", "<a class='news_text_a' data-href=\"https://vk.com/id$1\">$2</a>", $text);
            $text = preg_replace("/[\r\n]+/", "<br>", $text);

            $this->content .= '<div class="news_item" data-href="' . $item->link . '">
    <img src="' . $item->img . '" class="news_img">
    <div class="news_item_content">
        <div class="news_header">
            <img src="' . $item->group_img . '" class="news_header_img">
            <a class="news_header_link" data-href="https://vk.com/' . $item->group_name . '">' . $item->group_title . '</a>
            <span class="news_date">' . strftime('%e '.$item->loc_month.' %Y в %k:%M', $item->time) . '</span>
        </div>
        <div class="news_text">' . $text . '</div>
        <a data-href="' . $item->link . '" class="news_link">Перейти к новости</a>
    </div>
    <div class="clearfix"></div>
</div>';
        }

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => $this->content
        ]);
    }

}
