<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['status', 'projects_name', 'order_id', 'category_id', 'admin_id', 'user_id'];


    protected $casts = [
        'isStarred' => 'integer',
    ];

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function items()
    {
        return $this->hasMany(ProjectItem::class);
    }

    public function scopeStarred($query)
    {
        return $query->where('isStarred', 1);
    }
}
