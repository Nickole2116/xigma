<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectItem extends Model
{
    use HasFactory;

    protected $fillable = ['project_id'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
