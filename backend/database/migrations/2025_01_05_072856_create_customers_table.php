<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->string('customer_account')->primary();
            $table->string('customer_password');
            $table->string('customer_name');  // 客戶姓名
            $table->string('customer_email');  // 客戶信箱
            $table->string('customer_phone');  // 客戶電話
            $table->enum('role',['user','admin'])->default('user');
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
