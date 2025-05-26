<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLunchbagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lunchbags', function (Blueprint $table) {
            $table->integer('quantity');
            $table->unsignedInteger('order_id');//foreign key指向order primary
            $table->integer('lunchbox_id');

            $table->timestamps();
            $table->foreign('order_id')->
            references('orders_id')->
            on('orders')->
            onDelete('cascade');
            $table->foreign('lunchbox_id')->
            references('bentos_id')->
            on('lunchboxes')->
            onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lunchbags');
    }
}
