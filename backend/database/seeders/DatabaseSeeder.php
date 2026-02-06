<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;


class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {

        Category::factory()->create([
            'category_name' => 'MDI Icon',
        ]);
        
        Category::factory()->create([
            'category_name' => 'Banner',
        ]);

        Category::factory()->create([
            'category_name' => 'Logo',
        ]);

        Category::factory()->create([
            'category_name' => 'Elements',
        ]);

        Category::factory()->create([
            'category_name' => 'GIF Logo',
        ]);

        Category::factory()->create([
            'category_name' => 'Others',
        ]);
        
    }
}
