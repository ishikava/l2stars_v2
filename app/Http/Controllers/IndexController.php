<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;

class IndexController extends Controller
{
    protected $servers = [];
    protected $vipservers = [];
    protected $supervipservers = [];
    protected $old_servers = [];
    protected $old_vipservers = [];
    protected $old_supervipservers = [];
    protected $meta = [
        'title' => '⭐⭐⭐ Анонс серверов Lineage 2 l2stars.com',
        'keywords' => 'Анонс серверов lineage 2, Новые сервера Л2, Lineage, Ла2, Л2',
        'description' => 'Актуальный анонс серверов Lineage 2. Даты открытия новых серверов Л2. Удобный подбор новых серверов Lineage 2.'
    ];

    public function index()
    {
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

        if(Request::path() == 'en'){
            $lang = [
                'opening soon',
                'already opened',
                'Show more servers',
                'Please read the prices and terms of advertising on our website: <a href="/advert">Here</a>'
            ];
        } else {
            $lang = [
                'скоро откроются',
                'уже открылись',
                'Показать больше серверов',
                '
<img class="indeximg" src="/img/darkelf.png" alt="Dark Elf Lineage 2">
<h2 class="indexh2">L2stars.com</h2>
<p>Офигенный, самый лучший, умопомрачительный, непревзойденный, единственный в своем роде, сказочно-чудесный, невероятныо красивый, незабываемый, легендарный супер мега анонс серверов Lineage 2 л2старс.
Анонсирует, анонсирует, да не выанонсирует открытие самых новых, уникальных, супер VIP без доната лучших серверов однодневок и есть даже норм сервера на которых можно погамать чуть больше чем пару дней.
Специально для любителей тру ПВП "я твой мама делал" есть на верху зачетная кнопочка по которой можно клацнуть и ( неожиданно ) увидеть список новых пвп серверов Л2.
Для тех-же игорьков, которые находятся в замешательстве относительно выбора рейтов своего будущего супер мега сервера на котором они собираются играть... Во что?
Да, именно в неё - в Lineage 2 разных хроник и типа рейты чтобы не x1.</p>
<p>
Короче, эти товарищи могут уверенным шагом проследовать наверх в менюшку и яростно (или спокойно - по усмотрению посетителя сайта) клацнуть куда-то, там вроде кнопка или что-то типа того.
В общем будут рейты тогда и их можно будет выбрать - это поможет сделать правильный выбор нового сервера.</p>
<p>
Если-же ты, дорогой упоротый гость, дочитавший до этих строк никто иной как крутой админ супер мега сервера Lineage 2 все хроники играть сейчас бесплатно по ссылке.
То милости просим добавить свой проект в оналы истории на страницах нашего (перечисление статусов см. выше) анонсёра.
У нас есть бесплатное (без регистрации скачать торрент линейку на ПК) размещение для работяг-админов в обмен на обратную ссылку и жирный лайк.
И особое, специальное, супер выгодное по низким ценам - VIP размещение для лордов и господ, желающих поработить мир Л2 и заставить несчастных работяг и охранников пятерочки донатить последние крохи черствого хлебушка, добытого потом, кровью и мазолями на задницах вышеупомянутых лиц.
</p>
<p>
Администрация анонсёра, анонсирующего открытие новых серверов Ла2 л2старс, далее - "Упоротые *бланы", а так-же наверняка и вы, уважаемый, досточтимый гость аносера новых серверов lineage 2.
Снимают с себя всякую бню, в том числе ответственность за все что здесь написано, все что будет сказано в чатиках, и вообще все что происходит во вселенной л2 и около неё.
</p>
<p>
Так-же, напоминаем, что Иннова, далее - "Жадные твари, загубившие Линейдж 2" не дремлет и завтра ночью к тебе домой придет отдел "К" с обыском, заберёт твои печеньки и посадит твою мамку в обезьянник.
</p>
<p>
Всех благ! С праздниками (все-равно какими)! Удачных стартов!
<br>
P.S. Данный упоротый анонсер является детищем упоротой команды линедия.ru
</p>
<h2 class="indexh2">Lineage 2</h2>
<p>Легендарная многопользовательская RPG с открытым миром. Игра предоставляет огромный
            простор для развития персонажей, общения и взаимодействия с другими
            игроками.
            Красивый фэнтезийный мир населенный всевозможными монстрами и рейд-боссами, изобилие ресурсов и экипировки,
            а так-же приятная музыка способствуют глубокому погружению в игровой процесс.
            Персонажи имеют практически не ограниченную свободу действий, каждый игрок может найти себе занятие по душе.
            Lineage 2 позволяет использовать различные тактики и стили игры:
            некоторые предпочитают качаться в одиночку и исследовать огромный мир, кто-то особо ценит реалистичную экономическую
            модель игры, торговлю и крафт редких предметов или просто любит поразмышлять в процессе размеренной охоты на монстров.
        </p>

        <p>Основные возможности Lineage 2 раскрываются в командной игре - механика игры заточена прежде
            всего именно на командную игру и взаимодействие игроков и кланов.
            Персонажи объединяются в кланы, участвуют в осадах замков, сражаются за территории и влияние, вместе охотятся на монстров и рейд-боссов.
        </p>

        <p>Неспроста Lineage 2 завоевала любовь миллионов игроков по всему миру - игра на столько обширна и детализирована,
            что и по сегодняшний день остается непревзойденной.
            Даже несмотря на то, что многие современные игры имеют лучшую графику и более технологичны, они не способны подарить своим игрокам такие эмоции и глубину погружения как Lineage 2.
        </p>'
            ];
        }

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
            'meta' => $this->meta,
            'lang' => $lang
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
