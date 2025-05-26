<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Auth\Events\Login;
use App\Http\Controllers\BentoController;
use App\Http\Controllers\Ordercontroller;

// Route::middleware('web')->post('/login',[AuthController::class ,'login']);
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

#ChatPGT
#修改middleware
// Route::middleware('web')->post('/login', [AuthController::class, 'login']);
// Route::get('/bento',[BentoController::class,'getdb']);
// Route::post('/orders',[Ordercontroller::class,'store']);
// Route::get('bento/{id}',[BentoController::class,'getbentodetail']);

#chatGPT1
Route::middleware('web')->post('/login', [AuthController::class, 'login']);