<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectLog extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'project_item_id', 'action', 'payload', 'new_value'];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

    public function projectItem()
    {
        return $this->belongsTo(ProjectItem::class, 'project_item_id', 'id');
    }
}
