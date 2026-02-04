<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class CreateManualAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:create 
                            {name : Admin name} 
                            {access_key : Admin access key}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new admin user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');
        $accessKey = $this->argument('access_key');

        // 可选：避免重复 admin
        if (Admin::where('name', $name)->exists()) {
            $this->error('Admin with this name already exists.');
            return Command::FAILURE;
        }

        $admin = Admin::create([
            'name' => $name,
            'access_key' => Hash::make($accessKey),
            'phone' => null,
            'phone_prefix' => null,
            'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
            'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
        ]);

        $this->info('Admin created successfully 🎉');
        $this->line('Name: ' . $name);
        $this->line('Access key: ' . $accessKey);
        $this->line('Created at: ' . Carbon::now()->setTimezone('Asia/Kuala_Lumpur'));

        return Command::SUCCESS;
    }
}
