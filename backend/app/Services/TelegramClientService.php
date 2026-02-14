<?php

namespace App\Services;

use danog\MadelineProto\API;
use danog\MadelineProto\Settings;
use Log;

class TelegramClientService
{
    protected API $client;
    protected string $sessionPath;

    public function __construct()
    {
        $this->sessionPath = storage_path('telegram/session.madeline');

        // 确保目录存在
        if (!is_dir(dirname($this->sessionPath))) {
            mkdir(dirname($this->sessionPath), 0775, true);
        }

        $settings = new Settings();
        $settings->getAppInfo()
            ->setApiId((int) env('TELEGRAM_CLIENT_API_ID'))
            ->setApiHash(env('TELEGRAM_CLIENT_API_HASH'));

        $this->client = new API($this->sessionPath, $settings);

        // ⚠️ 不要在这里强制 start
        // 由 controller 决定要不要 login
    }

    /**
     * 是否已登录
     */
    public function isLoggedIn(): bool
    {
        try {
            $this->client->start(false);
            $this->client->getSelf();
            return true;
        } catch (\Throwable $e) {
            return false;
        }
    }

    /**
     * 生成 Telegram QR Code 登录
     */
    public function telegramLogin(): array
    {
        // $this->client->start(false);

        $qr = $this->client->qrLogin();

            return [
                'link' => $qr->link ?? null
            ];

        
    }

    /**
     * 发送消息
     */
    public function sendMessage($peer, string $message)
    {
        $this->client->start();

        return $this->client->messages->sendMessage([
            'peer'    => $peer,
            'message' => $message,
        ]);
    }

    /**
     * 获取最近消息
     */
    public function getMessages($peer, int $limit = 20)
    {
        $this->client->start();

        return $this->client->messages->getHistory([
            'peer'  => $peer,
            'limit'=> $limit,
        ]);
    }

    /**
     * 获取最近消息的聊天格
     */
    public function getDialogs(int $limit = 20)
    {
        $this->client->start();

        return $this->client->messages->getDialogs([
            'limit'=> $limit
        ]);
    }

    /**
     * 获取所有消息（分页）
     */
    public function getAllMessages($peer): array
    {
        $this->client->start();

        $all = [];
        $offsetId = 0;

        while (true) {
            $history = $this->client->messages->getHistory([
                'peer'      => $peer,
                'limit'     => 100,
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

    /**
     * 获取自己 profile
     */
    public function getMe()
    {
        $this->client->start();
        return $this->client->getSelf();
    }
}
