<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'category';

    protected $fillable = ['status', 'category_name', 'created_by'];

    public function products()
    {
        return $this->hasMany(Project::class, 'category_id', 'id')->where('status', 1);
    }
}
