<?php

namespace App\Services;

use GuzzleHttp\Client;

class TelegramService
{
    protected $token;
    protected $apiUrl;
    protected $client;

    public function __construct()
    {
        $this->token = env('TELEGRAM_BOT_TOKEN'); // 在 .env 设置 BOT TOKEN
        $this->apiUrl = "https://api.telegram.org/bot{$this->token}/";
        $this->client = new Client();
    }

    // 发送消息
    public function sendMessage($chatId, $text)
    {
        $response = $this->client->post($this->apiUrl . 'sendMessage', [
            'json' => [
                'chat_id' => $chatId,
                'text' => $text,
            ],
        ]);

        return json_decode($response->getBody(), true);
    }

    // 获取最近消息（getUpdates）
    public function getUpdates()
    {
        $response = $this->client->get($this->apiUrl . 'getUpdates');
        return json_decode($response->getBody(), true);
    }

    public function getOwnInfo()
    {
        $response = $this->client->get($this->apiUrl . 'getMe');
        return json_decode($response->getBody(), true);
    }
}
