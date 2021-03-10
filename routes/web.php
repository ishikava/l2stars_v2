<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'App\Http\Controllers\IndexController@index');

Route::get('/quests', 'App\Http\Controllers\QuestController@index');
Route::get('/quest_1_prof', 'App\Http\Controllers\Quest1ProfController@index');
Route::get('/quest_2_prof', 'App\Http\Controllers\Quest2ProfController@index');
Route::get('/quest_3_prof', 'App\Http\Controllers\Quest3ProfController@index');
Route::get('useful_quests', 'App\Http\Controllers\QuestBestController@index');
Route::get('epics', 'App\Http\Controllers\QuestEpicController@index');
Route::get('pets', 'App\Http\Controllers\QuestPetsController@index');
Route::get('/news', 'App\Http\Controllers\NewsController@index');
Route::get('/fashion', 'App\Http\Controllers\FashionController@index');
Route::get('/calculator', 'App\Http\Controllers\CalculatorController@index');
Route::get('/knowledge', 'App\Http\Controllers\KnowledgeController@index');
Route::get('/skills', 'App\Http\Controllers\KnowledgeController@index');
Route::get('/weapons', 'App\Http\Controllers\WeaponsController@index');
Route::get('/armor', 'App\Http\Controllers\ArmorController@index');
Route::get('/accessory', 'App\Http\Controllers\AccessoryController@index');
Route::get('/recipes', 'App\Http\Controllers\RecipesController@index');
Route::get('/resources', 'App\Http\Controllers\ResourcesController@index');
Route::get('/items', 'App\Http\Controllers\ItemsController@index');
Route::get('/monsters', 'App\Http\Controllers\MonstersController@index');
Route::get('/raids', 'App\Http\Controllers\RaidsController@index');
Route::get('/npc', 'App\Http\Controllers\NpcController@index');
Route::get('/sets', 'App\Http\Controllers\SetsController@index');
Route::get('/worldmap', 'App\Http\Controllers\WorldmapController@index');

Route::get('/skills/{id}', 'App\Http\Controllers\SkillsController@index');
Route::get('/items/{id}', 'App\Http\Controllers\ItemsController@items');
Route::get('/npc/{id}', 'App\Http\Controllers\NpcController@npcs');
Route::get('/articles/{id}', 'App\Http\Controllers\ArticlesController@index');
Route::get('/map/{id}', 'App\Http\Controllers\MapController@index');

Route::get('/sa', 'App\Http\Controllers\SaController@index');
Route::get('/sa_blunts', 'App\Http\Controllers\SaController@index');
Route::get('/sa_bows', 'App\Http\Controllers\SaController@index');
Route::get('/sa_daggers', 'App\Http\Controllers\SaController@index');
Route::get('/sa_duals', 'App\Http\Controllers\SaController@index');
Route::get('/sa_fists', 'App\Http\Controllers\SaController@index');
Route::get('/sa_monsters', 'App\Http\Controllers\SaController@index');
Route::get('/sa_pole', 'App\Http\Controllers\SaController@index');
Route::get('/sa_stafs', 'App\Http\Controllers\SaController@index');
Route::get('/sa_swords', 'App\Http\Controllers\SaController@index');
Route::get('/mamon_trader', 'App\Http\Controllers\SaController@index');
Route::get('/mamon_smith', 'App\Http\Controllers\SaController@index');
Route::get('/luxor', 'App\Http\Controllers\SaController@index');
Route::get('/manor', 'App\Http\Controllers\SaController@index');
Route::get('/priest', 'App\Http\Controllers\SaController@index');
Route::get('/commands', 'App\Http\Controllers\SaController@index');

Route::get('cat/lineage-2', function () {return redirect('pets');});
Route::get('cat/quest_epic_boss', function () {return redirect('epics');});
Route::get('cat/best_quest', function () {return redirect('useful_quests');});
Route::get('cat/quest_1', function () {return redirect('quest_1_prof');});
Route::get('cat/quest_2', function () {return redirect('quest_2_prof');});
Route::get('cat/quest_3', function () {return redirect('quest_3_prof');});
Route::get('articles', function () {return redirect('quests');});
Route::get('l2top', function () {return redirect('');});
Route::get('files', function () {return redirect('');});
Route::get('adv', function () {return redirect('');});
Route::get('tournament', function () {return redirect('');});


Route::post('/search', 'App\Http\Controllers\SearchController@index');
