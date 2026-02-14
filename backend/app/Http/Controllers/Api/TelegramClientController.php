<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Services\TelegramClientService;

class TelegramClientController extends Controller
{
    protected $telegram;

    public function __construct(TelegramClientService $telegram)
    {
        $this->telegram = $telegram;
    }

    public function login(Request $request) {
        
            $qr = $this->telegram->telegramLogin();
            if($qr['link'] !== null) {
                return response()->json([
                    'isLogined' => false,
                    'requestQR' => $qr['link'] ?? null
                ]);
            } else {
                //sync chat history 
                $info = $this->telegram->getMe();
                return response()->json([
                    'isLogined' => true,
                    'info' => [
                        'username' => $info['username']
                    ]
                ]);
            }
            
        
    }

    public function send(Request $request)
    {
        return response()->json(
            $this->telegram->sendMessage(
                $request->peer,
                $request->message
            )
        );
    }

    public function dialogs(Request $request)
    {
        return response()->json(
            $this->telegram->getDialogs()
        );
    }

    public function history(Request $request)
    {
        return response()->json(
            $this->telegram->getMessages($request->peer)
        );
    }

    public function me()
    {
        return response()->json(
            $this->telegram->getMe()
        );
    }
}
