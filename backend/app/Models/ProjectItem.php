<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectItem extends Model
{
    use HasFactory;

    protected $fillable = ['path', 'item_name', 'project_id', 'isPin', 'created_by', 'path_fileformat'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
