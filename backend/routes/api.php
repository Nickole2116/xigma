<?php
use App\Http\Controllers\Api\TelegramBotController;
use App\Http\Controllers\Api\TelegramClientController;

use App\Http\Controllers\Page\AuthController;
use App\Http\Controllers\Page\OrderController;

use Illuminate\Http\Request;

// Telegram Bot API - Bot Reply User
Route::post('/telegram/bot/send', [TelegramBotController::class, 'sendMessage']);
Route::get('/telegram/bot/updates', [TelegramBotController::class, 'getUpdates']);
Route::get('/telegram/bot/getMe', [TelegramBotController::class, 'getOwnInfo']);

Route::post('/telegram/client/login', [TelegramClientController::class, 'login']);
Route::get('/telegram/client/login', [TelegramClientController::class, 'login']);
Route::post('/telegram/client/send', [TelegramClientController::class, 'send']);
Route::get('/telegram/client/history', [TelegramClientController::class, 'history']);
Route::get('/telegram/client/dialogs', [TelegramClientController::class, 'dialogs']);
Route::get('/telegram/client/me', [TelegramClientController::class, 'me']);


Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/', [AuthController::class, 'index']);
Route::get('/users', [AuthController::class, 'index']);

// admin routes 
Route::post('/admin/login_as_form', [AuthController::class, 'adminLogin'])->name('admin_login');
Route::post('/admin/verify_token', [AuthController::class, 'verifyToken'])->name('verify_token');
Route::post('/admin/create_order', [OrderController::class, 'createOrder'])->name('create_order');
Route::get('/admin/get_order_init', [OrderController::class, 'getOrderInit'])->name('get_order_init');
Route::post('/admin/create_project', [OrderController::class, 'createProject'])->name('create_project');
Route::get('/admin/get_projects_init', [OrderController::class, 'getProjectInit'])->name('get_project_init');
Route::get('/admin/get_all_categories', [OrderController::class, 'getAllCategories'])->name('get_categories');
Route::post('/admin/create_project_item', [OrderController::class, 'createProjectItem'])->name('create_project_item');

Route::get('/admin/get_all_pncs', [OrderController::class, 'getAllPNCs'])->name('get_pncs');
Route::get('/admin/get_projects_completed', [OrderController::class, 'getAllProjectCompleted'])->name('get_completed_project');



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', fn (Request $request) => $request->user());
    Route::post('/logout', [AuthController::class, 'logout']);
});
