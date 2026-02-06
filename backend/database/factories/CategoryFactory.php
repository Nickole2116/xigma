<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition(): array
    {
        return [
            'status' => 1,
            'category_name' => $this->faker->words(2, true),
            'created_by' => 1,
        ];
    }
}
