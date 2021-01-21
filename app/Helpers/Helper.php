<?php


namespace App\Helpers;


class Helper
{

    public static function mb_ucfirst($string, $enc = 'UTF-8')
    {
        return mb_strtoupper(mb_substr($string, 0, 1, $enc), $enc) .
            mb_substr($string, 1, mb_strlen($string, $enc), $enc);
    }

    public static function get_server_hash($server)
    {
        $str = $server->host. '_' . strtolower($server->chronicles) . '_' . $server->rates;
        return preg_replace('/[^A-Za-z0-9А-Яа-я]+/iu', '_', $str);
    }

}
