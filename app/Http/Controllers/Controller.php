<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\Brand;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    protected $max_servers = 150;
    protected $brand;
    protected $chronicles;
    protected $dates = [];

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

    }
}
