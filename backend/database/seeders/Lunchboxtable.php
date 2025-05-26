<?php

namespace Database\Seeders;
use App\Models\Lunchbox;
use Illuminate\Database\Seeder;

class Lunchboxtable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         // Lunchbox::truncate();
        Lunchbox::create([
                'bentos_id'=>'1',
                'bento_name' => 'Chicken Bento',
                'bento_price' => 120,
                'bento_restaurant' => 'nsusu monkey'
        ]);
    }
}
