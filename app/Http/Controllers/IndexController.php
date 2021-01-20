<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Brand;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    protected $max_servers = 200;
    protected $brand;
    protected $chronicles;
    protected $dates = [];
    protected $servers = [];
    protected $vipservers = [];
    protected $supervipservers = [];
    protected $old_servers = [];
    protected $old_vipservers = [];
    protected $old_supervipservers = [];

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
        $tomorrow = date('Y-m-d', time() + 3600 * 24);
        $soon = date('Y-m-d', time() + 3600 * 24 * 7);
        $later = date('Y-m-d', time() + 3600 * 24 * 365);
        $yesterday = date('Y-m-d', time() - 3600 * 24);
        $already = date('Y-m-d', time() - 3600 * 24 * 7);
        $old = date('Y-m-d', 0);
        $dt_today = Carbon::now();
        $dt_tomorrow = Carbon::now();
        $dt_yesterday = Carbon::now();
        $dt_tomorrow->addDay();
        $dt_yesterday->sub(1, 'days');

        //servers
        $servers = DB::select("SELECT * FROM `orders` WHERE `status` = 'published' ORDER BY `open_date` DESC LIMIT 0, " . $this->max_servers);
        $servers = array_reverse($servers, false);
        foreach ($servers as $server) {

            //обнулить просроченые випы
            if (strtotime($server->paid_date) < time()) {
                $server->vip = 0;
            }

            //найти хост
            $server->host = parse_url($server->url, PHP_URL_HOST);

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
                    if (strtotime($server->open_date) >= strtotime($today)) {
                        $this->supervipservers[] = $server;
                    } else {
                        $this->old_supervipservers[] = $server;
                    }
                    break;
                case 1:
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
            'old_supervipservers' => $this->old_supervipservers
        ]);
    }
}
