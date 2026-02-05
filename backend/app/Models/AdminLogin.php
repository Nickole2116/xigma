<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminLogin extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'user_agent', 'client_ip', 'token'];

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'user_id', 'id');
    }
}
