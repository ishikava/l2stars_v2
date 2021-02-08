<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class ArticlesController extends Controller
{

    public function index()
    {
        $data = DB::selectOne("SELECT * FROM `l2stars`.`pages` WHERE `url` = ?", [Route::current()->parameter('id')]);

        $meta = [
        'title' => $data->title . ' ⭐⭐⭐ l2stars.com',
        'keywords' => $data->keywords,
        'description' => $data->description,
        'info' => $data->excerpt,
        'seo' => $data->seo
    ];

        //почистим контент в постах
        $data->content = str_replace('padding-left: 120px;', '', $data->content );
        $data->content = str_replace('</h1>', '</h1><br><br>', $data->content );
        $data->content = str_replace('Не забывайте заходить на наш анонс', '<br><br>Не забывайте заходить на наш анонс', $data->content );
        $data->content = str_replace('(щелкните на название квеста, чтобы перейти к его выполнению)', '', $data->content );
        $data->content = str_replace('(щелкните по названию квест и перейдите к его описанию)', '', $data->content );
        $data->content = str_replace('(щелкните по названию квест и перейдите к его описанию)', '', $data->content );

        //заинжектим рекламу в статьи
        $data->content = str_replace('<img class="wp-image-', '<img class="size-full wp-image-', $data->content );

        $data->content = $this->preg_replace_nth('/<img class="size-full wp-image-/', '<br><br><br><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1634828634862162"
     data-ad-slot="8645699716"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins><br><br>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><img class="size-full wp-image-', $data->content, 8);

        $data->content = $this->preg_replace_nth('/<img class="size-full wp-image-/', '<br><br><br><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1634828634862162"
     data-ad-slot="5560371371"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins><br><br>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><img class="size-full wp-image-', $data->content, 15);

        $data->content = $this->preg_replace_nth('/<img class="size-full wp-image-/', '<br><br><br><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1634828634862162"
     data-ad-slot="7332618045"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins><br><br>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><img class="size-full wp-image-', $data->content, 22);

        $data->content = $this->preg_replace_nth('/<img class="size-full wp-image-/', '<br><br><br><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1634828634862162"
     data-ad-slot="7740019950"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins><br><br>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><img class="size-full wp-image-', $data->content, 29);

        $data->content = $this->preg_replace_nth('/<img class="size-full wp-image-/', '<br><br><br><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1634828634862162"
     data-ad-slot="7548448260"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins><br><br>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><img class="size-full wp-image-', $data->content, 36);

        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $meta,
            'content' => $data->content
        ]);
    }

    private function preg_replace_nth($pattern, $replacement, $subject, $nth = 1)
    {
        return preg_replace_callback($pattern,
            function ($found) use (&$pattern, &$replacement, &$nth) {
                $nth--;
                if ($nth == 0) return preg_replace($pattern, $replacement, reset($found));
                return reset($found);
            }, $subject, $nth);
    }

}
