<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['status', 'projects_name', 'attachment', 'attachment_fileformat', 'order_id', 'category_id', 'admin_id', 'user_id'];


    protected $casts = [
        'isStarred' => 'integer',
    ];
    protected $appends = ['isNew'];

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function items()
    {
        return $this->hasMany(ProjectItem::class);
    }

    public function scopeStarred($query)
    {
        return $query->where('isStarred', 1);
    }
    public function getIsNewAttribute()
    {
        if (!$this->created_at) {
            return 0;
        }

        return $this->created_at->greaterThanOrEqualTo(
            Carbon::now()->subDays(5)
        ) ? 1 : 0;
    }
}
