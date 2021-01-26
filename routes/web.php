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
