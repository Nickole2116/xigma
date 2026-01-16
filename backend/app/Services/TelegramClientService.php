<?php

namespace App\Services;

use danog\MadelineProto\API;
use danog\MadelineProto\Settings;

class TelegramClientService
{
    protected API $client;

    public function __construct()
    {
        $sessionPath = storage_path('telegram/session.madeline');

        // 确保 storage/telegram 存在
        if (!file_exists(dirname($sessionPath))) {
            mkdir(dirname($sessionPath), 0775, true);
        }

        // ✅ 正确：使用 Settings 对象
        $settings = new Settings;

        $settings->getAppInfo()
            ->setApiId(env('TELEGRAM_CLIENT_API_ID'))
            ->setApiHash(env('TELEGRAM_CLIENT_API_HASH'));

        $this->client = new API($sessionPath, $settings);

        // 第一次会要求 login
        $this->client->start(false);
    }

    public function sendMessage($peer, $message)
    {
        return $this->client->messages->sendMessage([
            'peer'    => $peer,
            'message' => $message,
        ]);
    }

    public function getMessages($peer, $limit = 20)
    {
        return $this->client->messages->getHistory([
            'peer'  => $peer,
            'limit'=> $limit,
        ]);
    }

    public function getAllMessages($peer)
    {
        $all = [];
        $offsetId = 0;

        while (true) {
            $history = $this->client->messages->getHistory([
                'peer' => $peer,
                'limit' => 100,
                'offset_id' => $offsetId,
            ]);

            if (empty($history['messages'])) {
                break;
            }

            foreach ($history['messages'] as $msg) {
                $all[] = $msg;
            }

            $offsetId = end($history['messages'])['id'];
        }

        return $all;
    }

    public function getMe()
    {
        return $this->client->getSelf();
    }
}
