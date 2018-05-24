<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    protected $fillable = ['name', 'phone', 'street', 'city', 'state', 'zip', 'website', 'email', 'status', 'slug'];
}
