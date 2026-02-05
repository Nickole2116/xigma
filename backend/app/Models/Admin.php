<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'access_key', 'phone', 'phone_prefix', 'remember_token'];

    protected $hidden = [
        'access_key',
        'remember_token',
    ];

    protected $casts = [
        'remember_token' => 'hashed',
    ];

    
}
