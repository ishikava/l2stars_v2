<?php

namespace App\Http\Controllers;

class QuestController extends Controller
{
    protected $meta = [
        'title' => 'Квесты Lineage 2 ⭐⭐⭐ l2stars.com',
        'h1' => 'Квесты на 1, 2 , 3 профу с картинками и подробным описанием.',
        'keywords' => 'Квесты л2, квесты ineage 2, Квесты ла2, Квесты на 1 профу, Квесты на 2 профу, Квесты на 3 профу, полезные квесты, прохождение квестов',
        'description' => 'Квесты укомплектованы картинками (для удобства навигации по миру) и подробным описанием. База полностью адаптирована для мобильных устройств. Вы найдете квесты асолютно всех про, квесты на питомцев и не только! Квесты на Эпик боссов! Квесты очень хорошо оформлены и понятны. Ни одна база знаний л2 не оформлена подобным образом. Мы позиционируем себя как один из лучших анонсов, по-этому стараемся для вас и надеемся, что не зря!',
        'info' => 'Квесты укомплектованы картинками (для удобства навигации по миру) и подробным описанием. База полностью адаптирована для мобильных устройств. Вы найдете квесты асолютно всех про, квесты на питомцев и не только! Квесты на Эпик боссов! Квесты очень хорошо оформлены и понятны. Ни одна база знаний л2 не оформлена подобным образом. Мы позиционируем себя как один из лучших анонсов, по-этому стараемся для вас и надеемся, что не зря!',
        'seo' => 'Квесты укомплектованы картинками (для удобства навигации по миру) и подробным описанием. База полностью адаптирована для мобильных устройств. Вы найдете квесты асолютно всех про, квесты на питомцев и не только! Квесты на Эпик боссов! Квесты очень хорошо оформлены и понятны. Ни одна база знаний л2 не оформлена подобным образом. Мы позиционируем себя как один из лучших анонсов, по-этому стараемся для вас и надеемся, что не зря!'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__ . '/../static/quests.html')
        ]);
    }

}