<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable=['orders_id','order_date','customer_acc'];
    use HasFactory;

    // 訂單屬於一個客戶
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_acc', 'customer_account');
    }

    public function lunchbox()
    {
        return $this->belongsToMany(Lunchbox::class,'lunchbags')->
        withPivot('quantity')->withTimestamps();
    }
}
