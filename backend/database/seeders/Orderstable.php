<?php

namespace Database\Seeders;
use App\Models\Order;
use Illuminate\Database\Seeder;

class Orderstable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
             // Order::truncate();
             Order::create([
                'customer_acc'=>'nkazdt852',
                'order_date'=>now(),
            ]);
    }
}
