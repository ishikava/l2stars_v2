<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Brand;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    protected $max_servers = 150;
    protected $brand;
    protected $chronicles;
    protected $dates = [];
    protected $servers = [];
    protected $vipservers = [];
    protected $supervipservers = [];
    protected $old_servers = [];
    protected $old_vipservers = [];
    protected $old_supervipservers = [];
    protected $meta = [
        'canonical'=> '/',
        'title' => '⭐⭐⭐ Анонс серверов Lineage 2 l2stars.com',
        'keywords'=>'Анонс серверов lineage 2, Новые сервера Л2, Lineage, Ла2, Л2',
        'description'=>'Актуальный анонс серверов Lineage 2. Даты открытия новых серверов Л2. Удобный подбор новых серверов Lineage 2.'
    ];

    public function __construct()
    {
        //branding
        $brand = Brand::where('active', 1)
            ->orderBy('date', 'desc')
            ->first();
        //Если нет активного бренда - поставить заглушку на l2stars
        if ($brand === NULL || strtotime($brand->date) < time()) {
            $brand = new \stdClass();
            $brand->image = 'l2stars_com.jpg';
            $brand->url = 'https://l2stars.com';
            $brand->date = date('Y-m-d H:i:s', time() + 3600 * 24 * 365 * 10);
        }
        $this->brand = $brand;

        //chronicles
        $this->chronicles = DB::select("SELECT DISTINCT(`chronicles`) FROM (SELECT * FROM `orders` WHERE `status` = 'published' ORDER BY `open_date` DESC LIMIT 0, " . $this->max_servers . ") as `chronicles` ORDER BY `chronicles`");

        //dates
        $dates = DB::select("SELECT `open_date` FROM `orders` WHERE `status` = 'published' ORDER BY `open_date` DESC LIMIT 0, " . $this->max_servers);
        foreach ($dates as $date) {
            $this->dates[] = date('j|n', strtotime($date->open_date));
        }

        //time intervals for servers
        setlocale(LC_ALL, 'ru.utf-8', 'ru_RU.utf-8', 'ru', 'ru_RU');
        $today = date('Y-m-d', time());
        $dt_today = Carbon::now();
        $dt_tomorrow = Carbon::now();
        $dt_yesterday = Carbon::now();
        $dt_tomorrow->addDay();
        $dt_yesterday->sub(1, 'days');

        //servers
        $servers = DB::select("SELECT *,
 (SELECT COUNT(`id`) FROM `likes` WHERE `host` = `orders`.`host` AND `rates` = `orders`.`rates` AND `chronicles` = `orders`.`chronicles`) as `likes`,
 (SELECT COUNT(`id`) FROM `views` WHERE `host` = `orders`.`host` AND `rates` = `orders`.`rates` AND `chronicles` = `orders`.`chronicles` AND `date` > FROM_UNIXTIME(" . (time() - 3600 * 24) . ")) as `day_vis`,
 (SELECT COUNT(`id`) FROM `views` WHERE `host` = `orders`.`host` AND `rates` = `orders`.`rates` AND `chronicles` = `orders`.`chronicles` AND `date` > FROM_UNIXTIME(" . (time() - 3600 * 24 * 7) . ")) as `week_vis`,
 (SELECT COUNT(`id`) FROM `views` WHERE `host` = `orders`.`host` AND `rates` = `orders`.`rates` AND `chronicles` = `orders`.`chronicles` ) as `all_vis`
 FROM `orders` WHERE `status` = 'published' ORDER BY `open_date` DESC LIMIT 0, " . $this->max_servers);

        foreach ($servers as $server) {

            //обнулить просроченые випы
            if (strtotime($server->paid_date) < time()) {
                $server->vip = 0;
            }

            //найти хост
            $server->host = mb_strtolower(parse_url($server->url, PHP_URL_HOST));

            //корректировка рейтов для RVR и GVE
            if ($server->rates !== 'RVR' && $server->rates !== 'GVE') {
                $server->rates = 'x' . $server->rates;
            }

            //дата открытия
            $server->date = date('d.m', strtotime($server->open_date));
            $server->month = date('n', strtotime($server->open_date));
            $server->day = date('j', strtotime($server->open_date));
            $server->year = date('Y', strtotime($server->open_date));

            //локализованная дата открытия сервера
            $dts = Carbon::createFromDate($server->open_date);
            $server->loc_month = Helper::mb_ucfirst($dts->locale('ru')->shortMonthName);
            $server->loc_time = $dts->format('H:i');

            //проверить открытие завтра, сегодня, вчера
            $server->today = false;
            $server->yesterday = false;
            $server->tomorrow = false;
            if ($dt_today->month === $dts->month && $dt_today->day === $dts->day) {
                $server->today = true;
            }
            if ($dt_yesterday->month === $dts->month && $dt_yesterday->day === $dts->day) {
                $server->yesterday = true;
            }
            if ($dt_tomorrow->month === $dts->month && $dt_tomorrow->day === $dts->day) {
                $server->tomorrow = true;
            }

            //разложить сервера по группам
            switch (intval($server->vip)) {
                case 2:
                    self::get_background($server);
                    self::get_logo($server);
                    if (strtotime($server->open_date) >= strtotime($today)) {
                        $this->supervipservers[] = $server;
                    } else {
                        $this->old_supervipservers[] = $server;
                    }
                    break;
                case 1:
                    self::get_logo($server);
                    if (strtotime($server->open_date) >= strtotime($today)) {
                        $this->vipservers[] = $server;
                    } else {
                        $this->old_vipservers[] = $server;
                    }
                    break;
                default:
                    if (strtotime($server->open_date) >= strtotime($today)) {
                        $this->servers[] = $server;
                    } else {
                        $this->old_servers[] = $server;
                    }
            }

        }

        //поменять порядок следования для новых серверов
        $this->supervipservers = array_reverse($this->supervipservers, false);
        $this->vipservers = array_reverse($this->vipservers, false);
        $this->servers = array_reverse($this->servers, false);
    }

    public function index()
    {
        return view('index', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'servers' => $this->servers,
            'vipservers' => $this->vipservers,
            'supervipservers' => $this->supervipservers,
            'old_servers' => $this->old_servers,
            'old_vipservers' => $this->old_vipservers,
            'old_supervipservers' => $this->old_supervipservers,
            'meta' => $this->meta
        ]);
    }

    public static function get_logo(&$server)
    {
        //получить лого
        $hash = Helper::get_server_hash($server);

        if (file_exists(__DIR__ . '/../../../public/logo/' . $hash . '.jpg')) {
            $server->logo = $hash . '.jpg';
        } elseif (file_exists(__DIR__ . '/../../../public/logo/' . $hash . '.png')) {
            $server->logo = $hash . '.png';
        } else {
            $server->logo = 'l2stars_com.png';
        }
    }

    public static function get_background(&$server)
    {
        //получить бэкграунд
        $hash = Helper::get_server_hash($server);

        if (file_exists(__DIR__ . '/../../../public/background/' . $hash . '.jpg')) {
            $server->background = $hash . 'jpg';
        } elseif (file_exists(__DIR__ . '/../../../public/background/' . $hash . '.png')) {
            $server->background = $hash . '.png';
        } else {
            $server->background = 'l2stars_com.jpg';
        }
    }
}
