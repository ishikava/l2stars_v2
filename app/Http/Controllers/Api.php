<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Api
{

    private $salt = 'HamloTramvaynoe';
    private $delay = 60;

    public function index(Request $request)
    {
        //работать только для l2stars по токену и для Линедии по паролю
        if ($request->input('token') === csrf_token() || $request->input('pass') === $this->salt) {
            if ($request->input('method') && method_exists($this, $request->input('method'))) {
                $hash = md5($_SERVER['REMOTE_ADDR'] . $_SERVER['HTTP_USER_AGENT'] . $this->salt . $request->input('method') . $request->input('param'));
                //добавить действие в лимитер или игнор
                if (!$res = DB::selectOne("SELECT * FROM `limiter` WHERE `hash` = '$hash' AND `mktime` > " . (microtime(true) - $this->delay))) {
                    DB::insert("INSERT INTO `limiter` (`hash`, `mktime`) VALUES ('$hash', " . microtime(true) . ")");
                    $this->{$request->input('method')}($request->input('param'));
                } else {
                    exit();
                }
            } else {
                exit();
            }
        }
    }

    private function add_like($id)
    {
        DB::update("UPDATE `orders` SET `likes` = `likes` + 1 WHERE `orders`.`id` = ".$id);
    }

    private function add_click($id)
    {
        DB::insert("INSERT INTO `views` (`id`, `type`, `date`) VALUES ($id, 'click', CURRENT_TIMESTAMP)");
    }

    private function add_click_under($id)
    {
        DB::insert("INSERT INTO `views` (`id`, `type`, `date`) VALUES ($id, 'click_under', CURRENT_TIMESTAMP)");
    }

}
