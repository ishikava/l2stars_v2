<?php

namespace App\Http\Controllers;

use App\Models\Brand;

class IndexController extends Controller
{

    protected $brand;

    public function __construct()
    {
        $brand = Brand::where('active', 1)
            ->orderBy('date', 'desc')
            ->first();

        if($brand === NULL || strtotime($brand->date) < time()){
            $brand = new \stdClass();
            $brand->image = 'l2stars_com.jpg';
            $brand->url = 'https://l2stars.com';
            $brand->date = date('Y-m-d H:i:s', time() + 3600 * 24 * 365 * 10);
        }

        $this->brand = $brand;
    }

    public function index()
    {
        return view('index', ['brand' => $this->brand]);
    }
}
