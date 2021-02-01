<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'App\Http\Controllers\IndexController@index');

Route::get('/quests', 'App\Http\Controllers\QuestController@index');
Route::get('/quest_1_prof', 'App\Http\Controllers\Quest1ProfController@index');
Route::get('/quest_2_prof', 'App\Http\Controllers\Quest2ProfController@index');
Route::get('/quest_3_prof', 'App\Http\Controllers\Quest3ProfController@index');
Route::get('/cat/best_quest', 'App\Http\Controllers\QuestBestController@index');
Route::get('/cat/quest_epic_boss', 'App\Http\Controllers\QuestEpicController@index');
Route::get('/cat/lineage-2', 'App\Http\Controllers\QuestPetsController@index');

Route::get('/news', 'App\Http\Controllers\NewsController@index');
Route::get('/fashion', 'App\Http\Controllers\FashionController@index');
Route::get('/calculator', 'App\Http\Controllers\CalculatorController@index');

Route::get('/knowledge', 'App\Http\Controllers\KnowledgeController@index');
Route::get('/weapons', 'App\Http\Controllers\WeaponsController@index');
Route::get('/armor', 'App\Http\Controllers\ArmorController@index');
Route::get('/accessory', 'App\Http\Controllers\AccessoryController@index');
Route::get('/recipes', 'App\Http\Controllers\RecipesController@index');
Route::get('/items', 'App\Http\Controllers\ItemsController@index');
Route::get('/monsters', 'App\Http\Controllers\MonstersController@index');
Route::get('/raids', 'App\Http\Controllers\RaidsController@index');
Route::get('/npc', 'App\Http\Controllers\NpcController@index');

Route::get('/skills/{id}', 'App\Http\Controllers\SkillsController@index');
Route::get('/items/{id}', 'App\Http\Controllers\ItemsController@items');
Route::get('/npc/{id}', 'App\Http\Controllers\NpcController@npcs');
