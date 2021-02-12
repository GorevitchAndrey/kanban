<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/boards', 'BoardsController@index');

Route::get('/boards/{id}/columns', 'BoardColumnsController@index')->name('board_column');

Route::post('/cards', 'BoardCardController@createCard')->name('cards.store');

Route::post('/columns', 'BoardColumnsController@createColumn');

