<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TelegramController;

use Illuminate\Http\Request;


Route::post('/telegram/send', [TelegramController::class, 'sendMessage']);
Route::get('/telegram/updates', [TelegramController::class, 'getUpdates']);
Route::get('/telegram/getMe', [TelegramController::class, 'getOwnInfo']);


Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/', [AuthController::class, 'index']);
Route::get('/users', [AuthController::class, 'index']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', fn (Request $request) => $request->user());
    Route::post('/logout', [AuthController::class, 'logout']);
});
