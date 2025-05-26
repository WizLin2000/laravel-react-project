<?php

namespace Database\Seeders;
use App\Models\Customer;
use Illuminate\Database\Seeder;

class Customertable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         // Customer::truncate();
        //  Customer::create([
        //     'customer_account'=>'nkazdt852',
        //     'customer_password'=>bcrypt('fuck306788'),
        //     'customer_name'=>'Lin Wiz1',
        //     'customer_email'=>'nkazdt852@gmail.com',
        //     'customer_phone'=>'091230678',
        //     'role'=>'user'
        // ]);
        Customer::create([
            'customer_account'=>'nkazdt852',
            'customer_password'=>bcrypt('fuck306788'),
            'customer_name'=>'Lin Wiz4',
            'customer_email'=>'nkazdt852@gmail.com',
            'customer_phone'=>'097414',
            'role'=>'user'
        ]);
    }
}
