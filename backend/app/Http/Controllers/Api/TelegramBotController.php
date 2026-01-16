<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Services\TelegramBotService;

class TelegramBotController extends Controller
{
    protected $telegram;

    public function __construct(TelegramBotService $telegram)
    {
        $this->telegram = $telegram;
    }

    // 发送消息
    public function sendMessage(Request $request)
    {
        $request->validate([
            'chat_id' => 'required',
            'text' => 'required|string',
        ]);

        $result = $this->telegram->sendMessage($request->chat_id, $request->text);
        return response()->json($result);
    }

    // 获取最近消息
    public function getUpdates()
    {
        $result = $this->telegram->getUpdates();
        return response()->json($result);
    }

    public function getOwnInfo()
    {
        $result = $this->telegram->getOwnInfo();
        return response()->json($result);
    }
}
