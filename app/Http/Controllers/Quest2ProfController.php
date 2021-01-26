<?php

namespace App\Http\Controllers;

class Quest2ProfController extends Controller
{
    protected $meta = [
        'title' => 'Квесты Lineage на 2 профессию с картинками ⭐⭐⭐ l2stars.com',
        'h1' => 'Квесты на 2 профессию Lineage 2',
        'keywords' => 'Квесты на 2 профу, 2 профа, квесты Л2 с картинками, квесты Л2 с подробным описанием.',
        'description' => 'Подробное описание прохождения квестов на получение 2 профессии, с картинками для удобства навигации!',
        'info' => 'Чтобы получить ту или иную профессию, Вам необходимо выполнить 3 квеста (получить 3 марки). Можно и выполнять все 3 квеста одновременно, имея 39 уровень (если рейты сервера на котором вы играете х1). У нас предоставляется возможность выполнения квестов обоими способами. Можно выполнять все три марки по отдельности: на 35, на 37, на 39 уровне. А можно скачать текстовой документ, где будет описание одновременно 3 квестов. После выполнения 3 квестов и получив 40 уровень, можно сменить на интересующую вас профессию. На нашем сайте вы найдете все прохождения квестов, абсолютно всех проф. Все квесты подробно расписаны, а так же укомплектованы картинками для удобства навигации по миру Lineage 2. Чтобы перейти к выполнению профессии, просто щелкните по интересующему вас пункту. Квесты на 2 профу с картинками (на русском) подходят для хроник: (С4, интерлюд, хф, гф, классик и другие)',
        'seo' => 'Чтобы получить ту или иную профессию, Вам необходимо выполнить 3 квеста (получить 3 марки). Можно и выполнять все 3 квеста одновременно, имея 39 уровень (если рейты сервера на котором вы играете х1). У нас предоставляется возможность выполнения квестов обоими способами. Можно выполнять все три марки по отдельности: на 35, на 37, на 39 уровне. А можно скачать текстовой документ, где будет описание одновременно 3 квестов. После выполнения 3 квестов и получив 40 уровень, можно сменить на интересующую вас профессию. На нашем сайте вы найдете все прохождения квестов, абсолютно всех проф. Все квесты подробно расписаны, а так же укомплектованы картинками для удобства навигации по миру Lineage 2. Чтобы перейти к выполнению профессии, просто щелкните по интересующему вас пункту. Квесты на 2 профу с картинками (на русском) подходят для хроник: (С4, интерлюд, хф, гф, классик и другие)'
    ];

    public function index()
    {
        return view('pages', [
            'brand' => $this->brand,
            'chronicles' => $this->chronicles,
            'current_date' => date('d.m.Y', time()),
            'dates' => $this->dates,
            'meta' => $this->meta,
            'content' => file_get_contents(__DIR__ . '/../static/quest_2_prof.html')
        ]);
    }

}
