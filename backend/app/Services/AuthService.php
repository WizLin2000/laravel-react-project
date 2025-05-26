<?php
namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function login(array $credentials){
        $user=DB::table('customers')
        ->where('customer_account',$credentials['Customer_ID'])
        ->first();

        if(!$user ||!Hash::check($credentials['Customer_Pswd'],$user->customer_password)){
            return[
                'success'=>false,
                'message'=>'帳號密碼錯誤',
                'status'=>401
            ];
        }
        return [
            'success' => true,
            'message' => '登入成功',
            'status' => 200
        ];
    }
}
