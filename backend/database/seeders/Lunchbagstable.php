<?php

namespace Database\Seeders;
use App\Models\Lunchbag;
use Illuminate\Database\Seeder;

class Lunchbagstable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
                // lunchbag::truncate();
                lunchbag::create([
                    'order_id'=>1,
                    'lunchbox_id'=>1,
                    'quantity'=>2,
                ]);
    }
}
