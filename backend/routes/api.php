<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TelegramBotController;

use Illuminate\Http\Request;


Route::post('/telegram/bot/send', [TelegramBotController::class, 'sendMessage']);
Route::get('/telegram/bot/updates', [TelegramBotController::class, 'getUpdates']);
Route::get('/telegram/bot/getMe', [TelegramBotController::class, 'getOwnInfo']);


Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/', [AuthController::class, 'index']);
Route::get('/users', [AuthController::class, 'index']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', fn (Request $request) => $request->user());
    Route::post('/logout', [AuthController::class, 'logout']);
});
