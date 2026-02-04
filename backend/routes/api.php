<?php
use App\Http\Controllers\Api\TelegramBotController;
use App\Http\Controllers\Api\TelegramClientController;

use App\Http\Controllers\Page\AuthController;


use Illuminate\Http\Request;

// Telegram Bot API - Bot Reply User
Route::post('/telegram/bot/send', [TelegramBotController::class, 'sendMessage']);
Route::get('/telegram/bot/updates', [TelegramBotController::class, 'getUpdates']);
Route::get('/telegram/bot/getMe', [TelegramBotController::class, 'getOwnInfo']);

Route::post('/telegram/client/login', [TelegramClientController::class, 'login']);
Route::get('/telegram/client/login', [TelegramClientController::class, 'login']);
Route::post('/telegram/client/send', [TelegramClientController::class, 'send']);
Route::get('/telegram/client/history', [TelegramClientController::class, 'history']);
Route::get('/telegram/client/me', [TelegramClientController::class, 'me']);


Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/', [AuthController::class, 'index']);
Route::get('/users', [AuthController::class, 'index']);

// admin routes 
Route::post('/admin/login_as_form', [AuthController::class, 'adminLogin'])->name('admin_login');
Route::post('/admin/verify_token', [AuthController::class, 'verifyToken'])->name('verify_token');


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', fn (Request $request) => $request->user());
    Route::post('/logout', [AuthController::class, 'logout']);
});
