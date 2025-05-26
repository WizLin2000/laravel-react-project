<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lunchbox extends Model
{
    protected $fillable = ['bento_id','bento_name','bento_price','bento_restaurant'];
    use HasFactory;

    public function orders()
    {
        return $this->belongsToMany(Order::class,'lunchbag')->
        withTimestamps()->
        withPivot('quantity');
    }
}
