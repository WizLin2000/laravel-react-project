<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    
    protected $fillable =['customer_account',  'customer_name', 'customer_email', 'customer_telephone','role'];
    
    public function order()
    {
        return $this->hasMany(Order::class,'customer_acc','客戶帳號');
    }
    public function idadmin()
    {
        return $this->role ==='admin';
    }

}
