<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lunchbag extends Model
{
    use HasFactory;
    protected $fillable = ['order_id', 'lunchbox_id', 'quantity'];
}
