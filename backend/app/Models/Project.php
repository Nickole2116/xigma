<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $casts = [
        'isStarred' => 'integer',
    ];

    public function items()
    {
        return $this->hasMany(ProjectItem::class);
    }

    public function scopeStarred($query)
    {
        return $query->where('isStarred', 1);
    }
}
