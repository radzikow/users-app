<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Users
Route::prefix('/users')->group(function () {

    // login lecturer or administrative
    Route::post('/login', 'LoginController@login');

    // register user
    Route::post('/register', 'RegisterController@register');

    // register lecturer
    Route::post('/register-lecturer', 'RegisterController@registerLecturer');

    // register administrative
    Route::post('/register-administrative', 'RegisterController@registerAdministrative');

    // get all users
    Route::get('/all', 'UserController@getUsers')->middleware('auth:api');

    // generate users
    Route::get('/generate', 'UserController@generateUsers')->middleware('auth:api');

    // get user by id
    Route::get('/{id}', 'UserController@getUser')->middleware('auth:api');

    // edit user
    Route::put('/{id}', 'ProductController@putUser')->middleware('auth:api');

    // delete user
    Route::delete('/{id}', 'ProductController@deleteUser')->middleware('auth:api');
});
