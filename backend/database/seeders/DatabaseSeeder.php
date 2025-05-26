<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            Customertable::class,  // 先插入 customers 資料
            Lunchboxtable::class,  // 插入 lunchboxes 資料
            Orderstable::class,     // 插入 orders 資料
            Lunchbagstable::class,  // 最後插入 lunchbags 資料
            Userstable::class
        ]);
        // $this->call([
        //  userseeder::class
        // ]);
    }
}
