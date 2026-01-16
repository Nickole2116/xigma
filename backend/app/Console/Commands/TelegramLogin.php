<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use danog\MadelineProto\API;
use danog\MadelineProto\Settings;

class TelegramLogin extends Command
{
    protected $signature = 'telegram:login';
    protected $description = 'Login Telegram user via MadelineProto';

    public function handle()
    {
        $sessionPath = storage_path('telegram/session.madeline');

        if (!file_exists(dirname($sessionPath))) {
            mkdir(dirname($sessionPath), 0775, true);
        }

        $settings = new Settings;
        $settings->getAppInfo()
            ->setApiId(env('TELEGRAM_CLIENT_API_ID'))
            ->setApiHash(env('TELEGRAM_CLIENT_API_HASH'));

        $MadelineProto = new API($sessionPath, $settings);

        // ✅ CLI 登录（不会弹 HTML）
        $MadelineProto->start();

        $this->info('Telegram login success ✅');
    }
}
