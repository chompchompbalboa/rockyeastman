<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
  protected $table = 'scheduled';
  protected $dates = ['datetime'];
}
